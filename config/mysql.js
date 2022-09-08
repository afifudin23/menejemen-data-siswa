const Sequelize = require("sequelize");

module.exports = new Sequelize(
    "sman_5_tegal",
    "root",
    "1234",
    {
        "dialect": "mysql",
        "host": "localhost"
    }
);

/* // Check Connection
const db = new Sequelize(
    "sman_5_tegal",
    "root",
    "1234",
    {
        "dialect": "mysql",
        "host": "localhost"
    }
);

db.sync().then(() => {
    console.log("Connection Sequelize to MySQL is Successfully!");
}).catch(err => {
    console.log(`Connect Error : ${err}`);
});
*/
