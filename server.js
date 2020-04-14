const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = process.env.PORT || 7000;
const app = express();
// app.use(cors());

app.use(express.static(`${__dirname}/public`));
app.set('views engine', 'ejs')




app.listen(port,()=>{
    console.log(`listening on port :: ${port}`)
})

