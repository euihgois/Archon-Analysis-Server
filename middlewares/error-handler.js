module.exports = function (err, req, res, next) {
  switch (err.statusText) {
    case "emptyEmail":
      res.status(400).json({ message: "Email is empty" });
      break;
    case "emptyPassword":
      res.status(400).json({ message: "Password is empty" });
      break;
    case "empty":
      res.status(404).json({ message: "Item(s) not found" });
      break;
    case "Unauthorized":
      res.status(401).json({ message: "Invalid email or password" });
      break;
    case "JsonWebTokenError":
      res
        .status(401)
        .json({ message: "Invalid token or user has not logged in" });
      break;
    case "forbidden":
      res.status(403).json({ message: "Forbidden access" });
      break;
    case "emptyUserName":
      res.status(401).json({ message: "Name is empty" });
      break;
    case "Bad Request":
      res.status(403).json({ message: err.data.detail });
      break;
    case "Internal Server Error":
      res.status(403).json({ message: err.data.detail });
      break;
    default:
      res.status(500).json({
        message: "error",
      });
      break;
  }
};
