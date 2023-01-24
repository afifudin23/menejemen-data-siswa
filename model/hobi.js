const Sequelize = require("sequelize");
const db = require("../config/mysql");

const hobi = db.define("hobi", {
  kd_hobi: Sequelize.STRING,
  nama_hobi: Sequelize.STRING,
}, {
  freezeTableName: true,
  timestamps: false
});



hobi.removeAttribute("id");
module.exports = hobi;
