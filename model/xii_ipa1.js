const Sequelize = require("sequelize");
const db = require("../config/mysql");


const xii_ipa1 = db.define("xii_ipa1", {
    no: Sequelize.INTEGER,
    nama: Sequelize.STRING,
    alamat: Sequelize.STRING,
    kd_hobi: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});

xii_ipa1.removeAttribute("id");
module.exports = xii_ipa1;

/* // Check Connection
db.sync().then(() => {
   console.log('Book table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});
*/