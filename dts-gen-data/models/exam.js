const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Exam = sequelize.define(
  "exam",
  {},
  {
    // Other model options go here
  }
);

module.exports = Exam;
