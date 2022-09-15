const { Favorite, Hero } = require("../models");

class Controller {
  static async addFavorite(req, res, next) {
    try {
      const { userId } = req.user;
      const { hero_id } = req.params;

      const hero = await Hero.findOne({ where: { hero_id } });

      if (!hero) throw { statusText: "empty" };

      const [favorite] = await Favorite.findOrCreate({ userId, hero_id });

      res.status(201).json(favorite);
    } catch (error) {
      next(error);
    }
  }

  static async get(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
