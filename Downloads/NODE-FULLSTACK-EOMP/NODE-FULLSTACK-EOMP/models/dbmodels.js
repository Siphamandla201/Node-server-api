const database = require("../config/config");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticatedUser");
class Users {
 async createUser(req, res) {
    let input = req.body;

    input.userPass = await hash(input.userPass, 15);

    let User = {
      email_Add: input.emailAdd,
      userPass: input.userPass,
    };

    database.query(`INSERT INTO Users SET ?`, [input], (err) => {
      if (err) {
        res.status(400).json({ err });
      }  else {
        const jwToken = createToken(User);
    
        res.cookie("VerifiedUser", jwToken, {
          maxAge: 3600000,
          httpOnly: true,
        });
        res.status(200).json({ msg: "User info submitted." });
      }
    });
  }

  login(req, res) {
    let data = req.body
    database.query(
     `SELECT username, userProfile, firstName, lastName, cellphone, email_Add, userPass, address, gender 
      FROM Users  
      WHERE email_Add = ? AND userPass = ? ;`,[data.email_Add, data.userPass ], async (err, result) => {
        if(result.length === 0) {
            res.status(400).json({err})
          } else {
            await compare(userPass, data[0].userPass, (cErr, Result) => {
              const jwToken = createToken({
                email_Add,
                userPass,
              });
              res.cookie("VerifiedUser", jwToken, {
                maxAge: 3600000,
                httpOnly: true,
              });
              if (Result) {
                res.status(200).json({
                  msg: "welcome back"[data.username],
                  jwToken,
                  result: data[0],
                });
              } else {
                res.status(401).json({
                  err: "incorrect Password, have you signed up ? ",
                });
              }
            });
          }
          }
    )
  }

  showUser(req, res) {
    let reqUsername = req.params.username;
    database.query(
      `SELECT username, userProfile, firstName, lastName, cellphone, email_Add, userPass, address, gender 
      FROM Users  
      WHERE username = ?;`,
      [reqUsername],
      (err, data) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).json({ username: data });
      }
    );
  }

  showAllUsers(req, res) {
    database.query(`SELECT * FROM Users `, (err, result) => {
      if (err) {
        res.status(400).json({ err });
      } else res.status(200).send({ result });
    });
  }

  updateUser(req, res) {
    let  reqUsername = req.params.username;
    let data = req.body
    if (data.userPass !== null || data.userPass !== undefined)
      data.userPass = hashSync(data.userPass, 15);
    database.query(
      `Update Users SET username = ?, userProfile = ?, firstName = ?, lastName = ?, cellphone = ?, email_Add = ?, userPass = ?, address = ?, gender = ? 
        WHERE username = ?;`,
        [ data.username, data.userProfile, data.firstName, data.lastName, data.cellphone, data.email_Add, data.userPass, data.address, data.gender, reqUsername],
      (err, result) => {
        if (err) throw err;
        else {
          res.status(200).json({msg : 'User updated successfully'});
        }
      }
    );
  }

  deleteUser(req, res) {
    let  reqUsername = req.params.username;
    database.query(
      `DELETE FROM Users 
      WHERE username = ? ;`,
      [reqUsername],
      (err,) => {
        if (err) throw err;
        else res.status(200).json({msg : 'Deleted successfully'});
      }
    );
  }
}

class Products {
  createProduct(req, res) {
    let input = req.body;
    database.query(`INSERT INTO Products SET ?`, [input], (err) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        res.status(200).json({ msg: "Product added" });
      }
    });  
  }

  updateProduct(req, res) {
    let  reqProduct = req.params.productId;
    let data = req.body
    database.query(
      `Update Products SET productId = ?, productName = ?, productImage = ?, price = ?, size = ?, quantity = ?, username = ? 
        WHERE productId = ?`,
        [ data.productId, data.productName, data.productImage, data.price, data.size, data.quantity, data.username, reqProduct],
      (err, result) => {
        if (err) throw err;
        else {
          res.status(200).json({msg : 'Product updated successfully'});
          // res.json({result});
        }
      }
    );
  }

  deleteProduct(req, res) {
    let  reqProduct = req.params.productId;
    database.query(
      `DELETE FROM Products 
      WHERE productId = ? ;`,
      [reqProduct],
      (err,) => {
        if (err) throw err;
        else res.status(200).json({msg : 'Deleted successfully'});
      }
    );
  }

  showProduct(req, res) {
    let reqProduct = req.params.productId;
    database.query(
      `SELECT productId, productName, productImage, price, size, quantity, username  
      FROM Products  
      WHERE productId = ?;`,
      [reqProduct],
      (err, data) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).json({ productId: data });
      }
    );
  }

  showAllProducts(req, res) {
    database.query(`SELECT * FROM Products `, (err, result) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).send({ result });
      });
  }

}


module.exports = { Users, Products };
