const express = require('express');
const mysql = require('mysql');
dbRouter = express.Router();




db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'our_blog'

});

db.connect((err) => {
    if (err) throw err
    console.log('posts db online')
})


// new post
dbRouter.post('/newpost', (req, res) => {
    data = req.body
    mainData = {
        author: data.author,
        title: data.title,
        body: data.body,
        date: data.date,
        time: data.time
    };
    sql = `insert into ${data.category} set ?`;
    db.query(sql, mainData, (err, result)=>{
        if(err) throw err;
        // console.log(result);
        res.sendStatus(200)
    })
    // console.log(mainData)
})

module.exports = dbRouter
