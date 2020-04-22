const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 7000;
const app = express();
const dbrouter = require('./router/createDatabase');
const postsRouter = require('./router/posts');
const detailsRouter = require('./router/detailsPage');
const highlightRouter = require('./router/highlights')


app.use(cors());

app.use(express.json())

app.use('/posts', postsRouter)

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }));


app.use('/', dbrouter)

app.use('/article', detailsRouter);

// index highlights

app.use('/',highlightRouter)

app.use(express.static('./public'));
// app.use(express.static(__dirname + '/public/assets/css'));

app.get('/admin', (req, res)=>{
    res.render('cms')
});


app.listen(port,()=>{
    console.log(`listening on port :: ${port}`)
})

