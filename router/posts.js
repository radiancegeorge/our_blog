const express = require('express');
const mysql = require('mysql');
dbRouter = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './public/assets/uploads');
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: storage
})


// for testing purposes
dbRouter.post('/test', upload.single('photo'), (req, res)=>{
    console.log(req.file)
    res.end()
})


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
dbRouter.post('/newpost',upload.single('file'), (req, res) => {
    const data = req.body
    const file = req.file
    console.log(file)
    mainData = {
        author: data.author,
        title: data.title,
        body: data.body,
        date: data.date,
        time: data.time,
        images: null
    };
    if(file != undefined) mainData.images = file.path;

    sql = `insert into ${data.categories} set ?`;
    db.query(sql, mainData, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.redirect('/admin')
    })
    console.log(mainData)
})

module.exports = dbRouter
