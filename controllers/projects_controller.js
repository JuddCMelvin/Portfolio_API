const express = require('express')
const projects = express.Router()
const Project = require('../models/project.js')

projects.get('/', function(req,res){
    res.render('Index', 
        {
        projects: Project
        }
    )
    // res.send(Project)
})

projects.get('/:arrayIndex', (req,res) => {
    res.send(Project[req.params.arrayIndex])
})

module.exports = projects