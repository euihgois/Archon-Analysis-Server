const { Account } = require("../models");

class Controller {
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
