"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {}
  }
  Account.init(
    {
      userId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      steamId: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Account",
    }
  );
  return Account;
};
