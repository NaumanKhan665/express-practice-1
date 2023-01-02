const exp = require('constants');
const express=require('express');
const path=require('path');



const app=express();
const PORT=5001;





app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/persons',require('./Routers/Api/members'))
//setting static route 
app.use(express.static(path.join(__dirname,'public'),{extensions:'html'}))

//creating a server 
app.listen(PORT,function(){

     console.log('server is running on port, ',+PORT)

});