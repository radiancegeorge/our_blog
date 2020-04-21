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
        const mainData = [];
        if(err) throw err;
        // console.log(results)
        const lessThanFourCategories = results.filter(categories =>{
            if(results.indexOf(categories) < 4){
                return categories
            }
        });
        // console.log(`:: cate ${lessThanFourCategories}`);

        
        lessThanFourCategories.forEach(element => {
            sql = `SELECT * FROM ${element.Tables_in_our_blog} ORDER BY id DESC`;
            database.query(sql, (err, result)=>{
                if(err) throw err;
                // console.log(result.length);
                const lessThanThreeUpdates = result.filter( updates =>{
                    if(result.indexOf(updates) < 3){
                        return updates;
                    }
                });
                const data = {
                    lessThanThreeUpdates,
                    category: element.Tables_in_our_blog
                }
                mainData.push(data)
            })

            
        })
        
        setTimeout(() => {
            mainData.forEach( data=>{
                data.lessThanThreeUpdates.forEach(item =>{
                    console.log(item)
                })
            })
            res.render('index', {mainData})
        }, 2000);
    });
    
    
});

app.use(express.static(`${__dirname}/public`));


app.get('/admin', (req, res)=>{
    res.sendfile('./public/cms.html')
});



app.listen(port,()=>{
    console.log(`listening on port :: ${port}`)
})

