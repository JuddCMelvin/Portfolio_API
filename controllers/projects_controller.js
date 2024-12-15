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

projects.get('/data/seed', (req, res) => {
    Project.insertMany(
        [
            {
                title: "Portfolio API",
                description: "A RESTful API for managing portfolio projects.",
                technologies: ["Node.js", "Express", "JavaScript"],
                githubLink: "https://github.com/yourusername/portfolio-api",
                liveDemoLink: "https://portfolio-api-demo.com",
                image: "https://placehold.co/400",
            },
            {
                title: "Task Manager App",
                description: "A simple task management app to track daily tasks.",
                technologies: ["React", "Node.js", "MongoDB", "Express"],
                githubLink: "https://github.com/yourusername/task-manager-app",
                liveDemoLink: "https://task-manager-demo.com",
                image: "https://placehold.co/400",
            },
            {
                title: "Weather Dashboard",
                description: "An application to get real-time weather updates for any city.",
                technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
                githubLink: "https://github.com/yourusername/weather-dashboard",
                liveDemoLink: "https://weather-dashboard-demo.com",
                image: "https://placehold.co/400",
            },
            {
                title: "Blog Platform",
                description: "A platform for creating, reading, updating, and deleting blog posts.",
                technologies: ["React", "Node.js", "Express", "MongoDB"],
                githubLink: "https://github.com/yourusername/blog-platform",
                liveDemoLink: "https://blog-platform-demo.com",
                image: "https://placehold.co/400",
            },
            {
                title: "E-commerce Store",
                description: "An online store for buying and selling products.",
                technologies: ["Next.js", "Stripe API", "Tailwind CSS"],
                githubLink: "https://github.com/yourusername/ecommerce-store",
                liveDemoLink: "https://ecommerce-store-demo.com",
                image: "https://placehold.co/400",
            },
            {
                title: "Chat Application",
                description: "A real-time chat application with WebSocket support.",
                technologies: ["Node.js", "Socket.io", "React"],
                githubLink: "https://github.com/yourusername/chat-application",
                liveDemoLink: "https://chat-application-demo.com",
                image: "https://placehold.co/400",
            },
            {
                title: "Recipe Finder",
                description: "An app to search for recipes and save your favorites.",
                technologies: ["React", "Firebase", "Spoonacular API"],
                githubLink: "https://github.com/yourusername/recipe-finder",
                liveDemoLink: "https://recipe-finder-demo.com",
                image: "https://placehold.co/400",
            },
        ]
    ).then(createdProjects => {
            res.redirect('/projects')
        })
})


module.exports = projects

