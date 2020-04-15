const express = require('express');
const mysql = require('mysql')
dbRouter = express.Router();

db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'our_blog'

});

db.connect((err)=>{
    if (err) throw err
    console.log('connected to db')
})

dbRouter.get('/createdb',(req, res)=>{
    sql = 'CREATE DATABASE our_blog';
    db.query(sql, (err, result)=>{
        if(err) throw err
        res.send('database created....')
        console.log(result)
    })
    
})
dbRouter.get('/createTable/:tableName', (req, res)=>{
    sql = `CREATE TABLE ${req.params.tableName} (id int auto_increment, author varchar(255), title varchar(255), body varchar(65536), date varchar(255), time varchar(255), images varchar(255), key(id))` 
    db.query(sql, (err, result)=>{
        if(err) throw err
        res.send(`${req.params.tableName} created....`)
        console.log(result)
    })
})


module.exports = dbRouter