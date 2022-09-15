"use strict";
const axios = require("axios");
require("dotenv").config();

module.exports = {
  async up(queryInterface, Sequelize) {
    const options = {
      method: "GET",
      url: "https://dota2-heroes.p.rapidapi.com/heroes/english",
      headers: {
        "X-RapidAPI-Key": process.env.DOTA_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "dota2-heroes.p.rapidapi.com",
      },
    };

    const { data: fetched } = await axios(options);

    const data = fetched.map((x) => {
      return {
        name: x.name_loc,
        hero_id: x.id,
        imageUrl: x.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    await queryInterface.bulkInsert("Heros", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Heros");
  },
};
