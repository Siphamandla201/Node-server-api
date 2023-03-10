function errorHandling(err, req, res, next) {
  if (err) {
    const status = err.status || 404;
    res.status(status).json({
      status: status,
      err: "Please Consider refreshing your page. An error has Occurred",
    });
  }
  next();
}
module.exports = { errorHandling };
