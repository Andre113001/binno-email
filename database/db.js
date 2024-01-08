const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log(`======================================`);
<<<<<<< HEAD
        console.log('Connected to MySQL database');
=======
        console.log(`Connected to MySQL database host: ${host}`);
>>>>>>> 5075b7f59ee39c7a65d506f57951546b49e55d7e
        console.log(`======================================`);
    }
});

module.exports = db;
<<<<<<< HEAD

=======
>>>>>>> 5075b7f59ee39c7a65d506f57951546b49e55d7e
