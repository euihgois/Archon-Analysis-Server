const axiosCredential = require("../apis/axiosCredential");
const { verifyToken } = require("../helpers/jwt");

module.exports = {
  async authentication(req, res, next) {
    try {
      const { access_token } = req.headers;
      const { id } = verifyToken(access_token);

      await axiosCredential.post("Read", { id });

      next();
    } catch (error) {
      if (error.name === "JsonWebTokenError")
        next({ statusText: "JsonWebTokenError" });
      else next(error.response);
    }
  },
};
