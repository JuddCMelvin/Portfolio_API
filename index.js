require('dotenv').config()
const express = require('express')
const app = express()

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine())

//CONTROLLERS
app.use('/projects', require('./controllers/projects_controller'))

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