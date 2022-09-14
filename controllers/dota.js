const axiosDota = require("../apis/axiosDota");

class Controller {
  static async getMatch(req, res, next) {
    try {
      const { data } = await axiosDota.get("matches/271145478");

      res.status(200).json(data);
    } catch (error) {
      next({ statusText: "empty" });
    }
  }
}

module.exports = Controller;
