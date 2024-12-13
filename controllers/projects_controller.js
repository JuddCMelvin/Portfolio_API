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
})

// NEW
projects.get('/new', (req, res) => {
    res.render('projects/new')
})

//SHOW
projects.get('/:arrayIndex', (req,res) => {
    if(Project[req.params.arrayIndex]) {
        res.render('projects/show', {
            project: Project[req.params.arrayIndex],
            index: req.params.arrayIndex,
        })
    } else {
        res.render('error404')
    }
})

//CREATE 
projects.post('/', (req,res) => {
    if (!req.body.image) {
        req.body.image = 'https://placehold.co/400'
    }
    console.log(req.body)
    Project.push(req.body)
    res.redirect('/projects')
})

// DELETE
projects.delete('/:indexArray', (req, res) => {
    Project.splice(req.params.indexArray, 1)
    res.status(303).redirect('/projects')
})

module.exports = projects