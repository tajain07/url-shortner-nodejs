const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  database: "shorturl",
  username: "tjain",
  password: "tjain",
});

const URLs = db.define("urls", {
  id: { primaryKey: true, type: DataTypes.BIGINT },
  code: { type: DataTypes.STRING(7), unique: true },
  link: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = {
  db,
  URLs,
};
