const database = require("../config/index");
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/index");
class Users {
  async createUser(req, res) {
    let input = req.body;

    input.userPass = await hash(input.userPass, 15);

    let User = {
      Email: input.Email,
      Password: input.Password,
    };

    database.query(`INSERT INTO Users SET ?`, [input], (err) => {
      if (err) {
        res.status(400).json({ err });
      } else {
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
    let data = req.body;
    database.query(
      `SELECT UsersId, Name, Surname, Cellphone, Email, Password, Address, Gender 
      FROM Users  
      WHERE Email = ? AND Password = ? ;`,
      [data.Email, data.Password],
      async (err, result) => {
        if (result.length === 0) {
          res.status(400).json({ err });
        } else {
          await compare(Password, data[0].Password, (cErr, Result) => {
            const jwToken = createToken({
              Email,
              Password,
            });
            res.cookie("VerifiedUser", jwToken, {
              maxAge: 3600000,
              httpOnly: true,
            });
            if (Result) {
              res.status(200).json({
                msg: "welcome back"[data.UsersId],
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
    );
  }

  showUser(req, res) {
    let reqUsersId = req.params.UsersId;
    database.query(
      `SELECT UsersId, Name, Surname, cellphone, Email, Password, Address, Gender 
      FROM Users  
      WHERE usersId = ?;`,
      [reqUsersId],
      (err, data) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).json({ UsersId: data });
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
    let reqUserId = req.params.UsersId;
    let data = req.body;
    if (data.Password !== null || data.Password !== undefined)
      data.Password = hashSync(data.Password, 15);
    database.query(
      `Update Users SET UsersId = ?, Name = ?, Surname = ?, cellphone = ?, Email = ?, Password = ?, Address = ?, Gender = ? 
        WHERE UsersId = ?;`,
      [
        data.UsersId,
        data.Name,
        data.Surname,
        data.cellphone,
        data.Email,
        data.Password,
        data.Address,
        data.Gender,
        reqUserId,
      ],
      (err, result) => {
        if (err) throw err;
        else {
          res.status(200).json({ msg: "User updated successfully" });
        }
      }
    );
  }

  deleteUser(req, res) {
    let reqUserId = req.params.UsersId;
    database.query(
      `DELETE FROM Users 
      WHERE UsersId = ? ;`,
      [reqUserId],
      (err) => {
        if (err) throw err;
        else res.status(200).json({ msg: "Deleted successfully" });
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
    let reqProduct = req.params.ProductId;
    let data = req.body;
    database.query(
      `Update Products SET ProductId = ?, ProductName = ?,ProductImage = ?, Price = ?, Size = ?, Quantity = ? 
        WHERE ProductId = ?`,
      [
        data.ProductId,
        data.ProductName,
        data.ProductImage,
        data.Price,
        data.Size,
        data.Quantity,
        reqProduct,
      ],
      (err, result) => {
        if (err) throw err;
        else {
          res.status(200).json({ msg: "Product updated successfully" });
          // res.json({result});
        }
      }
    );
  }

  deleteProduct(req, res) {
    let reqProduct = req.params.ProductId;
    database.query(
      `DELETE FROM Products 
      WHERE ProductId = ? ;`,
      [reqProduct],
      (err) => {
        if (err) throw err;
        else res.status(200).json({ msg: "Deleted successfully" });
      }
    );
  }

  showProduct(req, res) {
    let reqProduct = req.params.ProductId;
    database.query(
      `SELECT ProductId, ProductName, ProductImage, Price, Size, Quantity
      FROM Products  
      WHERE ProductId = ?;`,
      [reqProduct],
      (err, data) => {
        if (err) {
          res.status(400).json({ err });
        } else res.status(200).json({ ProductId: data });
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
