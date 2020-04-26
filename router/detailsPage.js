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
    const category = req.params.category;
    const id = req.params.id;
    sql = `select * from ${category} where id = ${id}`;
    detailsDb.query(sql, (err, result)=>{
        if(!err){
            data = result[0];
            res.render('details', {data, category})
        }else{throw err}
    })
});




module.exports = detailsRouter