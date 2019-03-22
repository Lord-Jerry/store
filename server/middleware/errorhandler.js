const logger = (err, _req, res, _next) => {
  if (!err.statusCode) {
    return res.status(500).json({
      message: "internal server error",
      statusCode: 500
    });
  }
  
  return res.status(err.statusCode).json({
    message: err.message,
    statusCode: err.statusCode
  });
};
module.exports = logger;
