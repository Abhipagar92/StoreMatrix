const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

pool.getConnection((err, connection) => {

    if (err) {

        console.log("DB Connection Failed");
        console.log(err.message);

    } else {

        console.log("Railway Database Connected Successfully");

        connection.release();

    }

});

module.exports = pool.promise();