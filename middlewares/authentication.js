const axiosCredential = require("../apis/axiosCredential");
const { verifyToken } = require("../helpers/jwt");

module.exports = {
  async authentication(req, res, next) {
    try {
      const { access_token } = req.headers;
      const { userId } = verifyToken(access_token);

      const {
        data: {
          account: { id },
        },
      } = await axiosCredential.post("Read", { id: userId });

      if (!id) throw { response: { statusText: "invalid" } };

      req.user = {
        userId,
      };

      next();
    } catch (error) {
      if (error.name === "JsonWebTokenError")
        next({ statusText: "JsonWebTokenError" });
      else next(error.response);
    }
  },
};
