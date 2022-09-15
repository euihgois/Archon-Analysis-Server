const { Account } = require("../models");

class Controller {
  //tidak berfungsi dengan baik karen data dari opendota tidak semuanya ada
  static async addSteamId(req, res, next) {
    try {
      const { steamId = "" } = req.body;
      const { userId } = req.user;

      await Account.upsert({ userId, steamId });

      res.status(201).json({
        userId,
        steamId,
      });
    } catch (error) {
      next({ statusText: error.name });
    }
  }
}

module.exports = Controller;
