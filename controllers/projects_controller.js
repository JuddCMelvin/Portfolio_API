const express = require('express')
const projects = express.Router()
const Project = require('../models/project.js')

projects.get('/', (req,res) => {
    res.render('Index', 
        {
        projects: Project, 
        title: 'Index Page'
        }
    )
    // res.send(Project)
})

//SHOW
projects.get('/:arrayIndex', (req,res) => {
    res.render ('showProject', {
        project: Project[req.params.arrayIndex]
    })
    // res.send(Project[req.params.arrayIndex])
})

module.exports = projects