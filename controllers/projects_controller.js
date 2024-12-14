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
    // else {
    //     res.render('error404')
    // }
})

// EDIT
projects.get('/:id/edit', (req,res) => {
    // let id = Number(req.params.indexArray)

    res.render('projects/edit', {
        project: Project[req.params.id],
        index: req.params.indexArray
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
projects.put('/:arrayIndex', (req,res) => {
    if(!req.body.description){
        req.body.description = 'Coming Soon'
    }
    if(!req.body.image){
        req.body.image = "https://placehold.co/400" 
    }
    Project[req.params.arrayIndex] = req.body
    res.redirect(`/projects/${req.params.arrayIndex}`)
    console.log('successfully edited')
})

// EDIT
projects.get('/:indexArray/edit', (req,res) => {
    // let id = Number(req.params.indexArray)

    res.render('projects/edit', {
        project: Project[req.params.indexArray],
        index: req.params.indexArray
    })
})

// DELETE
projects.delete('/:indexArray', (req,res) => {
    Project.splice(req.params.indexArray, 1)
    res.status(303).redirect('/projects')
})

module.exports = projects