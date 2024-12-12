require('dotenv').config()
const express = require('express')
const app = express()

//controllers
app.use('/projects', require('./controller/projects'))

//Create a Homepage route
app.get('/', function(req,res){
    //This gest sent to the client
    res.send('hello world')
})

//Wildcard Route 
app.get('*', function(req,res){
    res.status(404).send('404 page')
})

//listen for connections
app.listen(process.env.PORT,  function() {
    console.log(`I am listening on port ${process.env.PORT}`)
})