const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 7000;
const app = express();
const dbrouter = require('./router/createDatabase');

app.use(cors());

app.use(express.json())

// new post
app.post('/newpost', (req, res) => {
    console.log(req.body);
    res.end()
})

app.use(express.static(`${__dirname}/public`));

app.set('views engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use('/', dbrouter)





app.listen(port,()=>{
    console.log(`listening on port :: ${port}`)
})

