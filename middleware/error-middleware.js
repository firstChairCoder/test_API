const errorMiddleware = (req, res, next, err) => {
  console.log("here is an error middleware");
  const errCode = res.statusCode ? res.statusCode : 500;
  res.status(errCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorMiddleware;
