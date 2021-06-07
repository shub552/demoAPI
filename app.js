const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/user');

app.use(bodyParser.json());

app.use('/user',userRoutes);

//Connect to DB
mongoose.connect('mongodb://localhost:27017/testuser',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('Connect to DataBase');
})

//Ability to create Routes
app.get('/',(request,response)=>{
    response.send("we are on Home")
});




app.listen(3000);