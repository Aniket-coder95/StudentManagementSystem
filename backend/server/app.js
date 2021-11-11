const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
const app  =  express();
const bcrypt = require('bcrypt')


var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(cors());
//link router
app.use(require('./router/route'));




app.listen(7000,  ()=>{
    console.log('server is running on port 7000');
});

