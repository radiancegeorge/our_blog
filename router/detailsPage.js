const express = require('express');
const mysql = require('mysql');
const detailsRouter = express.Router();

const detailsDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'our_blog'
});

detailsDb.connect((err)=>{
    if(!err) console.log('details Online:::');
    else{
        throw err
    }
});
// detailsRouter.use( express.static('../public'))
detailsRouter.get('/:category/:id', (req, res) => {
    
    res.render('details', {data: 'hello'});
});




module.exports = detailsRouter