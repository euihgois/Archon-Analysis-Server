const axiosDota = require("../apis/axiosDota");
const { Hero } = require("../models");

class Controller {
  static async getHeroes(req, res, next) {
    try {
      const heroes = await Hero.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.status(200).json(heroes);
    } catch (error) {
      next(error);
    }
  }

  static async analysis(req, res, next) {
    try {
      const { match_id } = req.params;

      const {
        data: { players },
      } = await axiosDota.get(`matches/${match_id}`);

      const { data: heroes } = await axiosDota.get("Heroes");

      const fetches = players.map((player) => {
        const heroName = heroes.filter((hero) => hero.id == player.hero_id)[0]
          .localized_name;

        return {
          heroName,
          hero_id: player.hero_id,
          benchmarks: player.benchmarks,
        };
      });

      res.status(200).json(fetches);
    } catch ({ response }) {
      next({ statusText: response.data.error });
    }
  }

  static async benchmarks(req, res, next) {
    try {
      const { hero_id } = req.params;

      const hero = await Hero.findOne({ where: { hero_id } });

      if (!hero) throw { response: { statusText: "empty" } };

      const { data } = await axiosDota.get("benchmarks", {
        params: {
          hero_id,
        },
      });

      res.status(200).json(data);
    } catch ({ response }) {
      next(response);
    }
  }
}

module.exports = Controller;
