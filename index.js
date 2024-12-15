require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//CONTROLLERS
app.use('/projects', require('./controllers/projects_controller'))
app.use('/skills', require('./controllers/skills_controller'))
// app.use('/certs', require('./controllers/certs_controller'))

//Create a Homepage route
app.get('/', function (req, res) {
    //This gest sent to the client
    res.send('hello world')
})

//Wildcard Route 
app.get('*', function (req, res) {
    res.render('error404')
})

//listen for connections
app.listen(process.env.PORT, function () {
    console.log(`I am listening on port ${process.env.PORT}`)
})