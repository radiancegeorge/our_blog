const express = require('express');
const mysql = require('mysql')
dbRouter = express.Router();
// const cors = require('cors');



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
});
dbRouter.post('/createTable/', (req, res)=>{
    body = req.body;
    console.log(body.name, 'created...')
    sql = `CREATE TABLE ${body.name} (id int auto_increment, author varchar(255), title varchar(255), body varchar(65536), date varchar(255), time varchar(255), images varchar(255), key(id))` 
    db.query(sql, (err, result)=>{
        if(err) throw err
        res.send(`${body.name} created....`)
        console.log(result)
    })
});


dbRouter.get('/numberOfTb', (req, res)=>{
    sql = `show full tables`
    db.query(sql, (err, results)=>{
        if(err) throw err;
        // console.log(results)
        res.send(results);
    })
})

// for deleting categories

dbRouter.get('/deleteCategory/:tableName', (req, res)=>{
    sql = `drop table ${req.params.tableName}`;
    db.query(sql, (err, result)=>{
        if (err) throw err;
        res.send(`${req.params.tableName} deleted.....`)
    })
})

module.exports = dbRouter