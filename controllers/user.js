const axiosCredential = require("../apis/axiosCredential");
const { signToken } = require("../helpers/jwt");

class Controller {
  static async register(req, res, next) {
    try {
      const { email, password, username } = req.body;

      if (!email) throw { response: { statusText: "emptyEmail" } };
      if (!password) throw { response: { statusText: "emptyPassword" } };
      if (!username) throw { response: { statusText: "emptyUserName" } };

      await axiosCredential.post("Create", {
        username,
        email,
        password,
      });

      res.status(201).json({ message: `${email} is sucessfully registerd` });
    } catch ({ response }) {
      next(response);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { response: { statusText: "emptyEmail" } };
      if (!password) throw { response: { statusText: "emptyPassword" } };

      const {
        data: {
          session: { userId },
        },
      } = await axiosCredential.post("Login", {
        email,
        password,
      });
      const access_token = signToken({
        userId,
      });

      res.status(200).json({ access_token });
    } catch ({ response }) {
      next(response);
    }
  }
}

module.exports = Controller;
