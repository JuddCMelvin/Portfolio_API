const express = require('express')
const projects = express.Router()
const Project = require('../models/project.js')

projects.get('/', (req,res) => {
    Project.find()
        .then(foundProjects => {
            res.render('Index', {
                projects: foundProjects, 
                title: 'Index Page'
            })
        })
})

// NEW
projects.get('/new', (req,res) => {
    res.render('projects/new')
})

//SHOW
projects.get('/:id', (req,res) => {
    Project.findById(req.params.id)
        .then(foundProject => {
            res.render('projects/show', {
                project: foundProject, 
            })
        })
        .catch(err => {
            res.render('error404')
        })
})

// EDIT
projects.get('/:id/edit', (req, res) => {
    Project.findById(req.params.id)
        .then(foundProject => {
            res.render('projects/edit', {
                project: foundProject
            })
        })
})

//CREATE 
projects.post('/', (req,res) => {
    if (!req.body.image) {
        req.body.image = 'https://placehold.co/400'
    }
    console.log(req.body)
    Project.create(req.body)
    res.redirect('/projects')
})

// UPDATE
projects.put('/:id', (req,res) => {
    if(!req.body.description){
        req.body.description = 'Coming Soon'
    }
    if(!req.body.image){
        req.body.image = "https://placehold.co/400" 
    }
    Project.findByIdAndUpdate(req.params.id, req.body, { new: true}) 
        .then(updatedProject => {
            console.log(updatedProject)
            res.redirect(`/projects/${req.params.id}`)
        })
})

// DELETE
projects.delete('/:id', (req,res) => {
    Project.findByIdAndDelete(req.params.id) 
        .then(deletedProject => { 
            res.status(303).redirect('/projects')
        })
})

module.exports = projects

