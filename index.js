
const mysql = require('mysql');

let connection;

function GetConnection() {

   if (!connection) {
        connection = mysql.createConnection({
            host: '',
            user: '',
            password: '',
            database: ''
        });
        console.log("Object Created")
    }

    console.log("Returning Object")

    return connection;
}


console.time('codezup')

const count = 100000
for (let index = 0; index < count; index++) {
    const res = GetConnection()
    res.query('INSERT INTO datatable SET ?', { payload: `index ke ${index}` })
}

connection.end()


console.timeEnd('codezup')


// tanpa singleton end execution: 102.656ms
