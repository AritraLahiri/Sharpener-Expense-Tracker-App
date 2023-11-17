const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Expense = sequelize.define("Expense", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Description: Sequelize.STRING,
  Amount: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  Category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Expense;
