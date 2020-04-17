const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 7000;
const app = express();
const dbrouter = require('./router/createDatabase');
const postsRouter = require('./router/posts');

const database = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'our_blog'
});

database.connect((err)=>{
    if(err) throw err
})

app.use(cors());

app.use(express.json())

app.use('/posts', postsRouter)

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.use('/', dbrouter)


// index highlights

app.get('/', (req, res)=>{
    sql = `show full tables`;
    database.query(sql, (err , results)=>{
        const mainData = []
        if(err) throw err;
        results.forEach(category =>{
            // console.log(category);
            // const mainData = [];
            sql = `select * from ${category.Tables_in_our_blog}`;
            database.query(sql, (err, results)=>{
                if (err) throw err;
                const data = results.filter( result =>{
                    if(results.indexOf(result) < 3) return result
                });
                mainData.push({data, category: category.Tables_in_our_blog});
                console.log(category.Tables_in_our_blog)
                if(mainData.length === 4){
                    console.log(mainData)
                    res.render('index', {mainData})
                }
            })
        });
        
    });
    
    
});

app.use(express.static(`${__dirname}/public`));


app.get('/admin', (req, res)=>{
    res.sendfile('./public/cms.html')
});



app.listen(port,()=>{
    console.log(`listening on port :: ${port}`)
})

