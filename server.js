const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 7000;
const app = express();
const dbrouter = require('./router/createDatabase');
const postsRouter = require('./router/posts');

app.use(cors());

app.use(express.json())

app.use('/posts', postsRouter)
app.use(express.static(`${__dirname}/public`));

app.set('views engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use('/', dbrouter)





app.listen(port,()=>{
    console.log(`listening on port :: ${port}`)
})

