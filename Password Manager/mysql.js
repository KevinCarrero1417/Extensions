const mysql = require('mysql')

const conection = mysql.createConnection({
    host: '34.121.23.198',
    user: 'admin',
    password: 'admin',
    database: 'pruebaenlace'

})

conection.connect((err) => {
    if(err) throw err
    console.log('ya connecto')
})