const mysql = require('mysql');
const conn = {
    name:'localhost',
    user: 'root',
    password:'',
    database: 'crud'
};

let db = mysql.createConnection({multipleStatements:true});
db = mysql.createConnection(conn);

db.connect((err)=>{
    if(err){
        console.log('err');
    }else{
        console.log('db is get connected');
    }

});

module.exports = db;


