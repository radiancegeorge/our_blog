const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 7000;
const app = express();
const dbrouter = require('./router/createDatabase')
// app.use(cors());


// app.get('/', (req, res) => {
//     res.send('home page')
// })
app.use(express.static(`${__dirname}/public`));

app.set('views engine', 'ejs')

app.use('/', dbrouter)




app.listen(port,()=>{
    console.log(`listening on port :: ${port}`)
})

