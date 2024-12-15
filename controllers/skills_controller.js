const express = require('express')
const skills = express.Router()
const Skill = require('../models/skill.js')

skills.get('/', (req,res) => {
    Skill.find()
        .then(foundSkills => {
            res.render('skills/Index', {
                skills: foundSkills, 
                title: 'Skills Index Page'
            })
        })
})

// // NEW
// skills.get('/new', (req,res) => {
//     res.render('skills/new')
// })

// //SHOW
// skills.get('/:id', (req,res) => {
//     Project.findById(req.params.id)
//         .then(foundProject => {
//             res.render('skills/show', {
//                 project: foundProject, 
//             })
//         })
//         .catch(err => {
//             res.render('error404')
//         })
// })

// // EDIT
// skills.get('/:id/edit', (req, res) => {
//     Project.findById(req.params.id)
//         .then(foundProject => {
//             res.render('skills/edit', {
//                 project: foundProject
//             })
//         })
// })

// //CREATE 
// skills.post('/', (req,res) => {
//     if (!req.body.image) {
//         req.body.image = 'https://placehold.co/400'
//     }
//     console.log(req.body)
//     Project.create(req.body)
//     res.redirect('/skills')
// })

// // UPDATE
// skills.put('/:id', (req,res) => {
//     if(!req.body.description){
//         req.body.description = 'Coming Soon'
//     }
//     if(!req.body.image){
//         req.body.image = "https://placehold.co/400" 
//     }
//     Project.findByIdAndUpdate(req.params.id, req.body, { new: true}) 
//         .then(updatedProject => {
//             console.log(updatedProject)
//             res.redirect(`/skills/${req.params.id}`)
//         })
// })

// // DELETE
// skills.delete('/:id', (req,res) => {
//     Project.findByIdAndDelete(req.params.id) 
//         .then(deletedProject => { 
//             res.status(303).redirect('/skills')
//         })
// })

skills.get('/data/seed', (req, res) => {
    Skill.insertMany(
        [
            {
                name: "HTML",
                image: "https://placehold.co/100",
                description: "HyperText Markup Language for structuring web content.",
            },
            {
                name: "CSS",
                image: "https://placehold.co/100",
                description: "Stylesheet language used for describing the presentation of a web page.",
            },
            {
                name: "JavaScript",
                image: "https://placehold.co/100",
                description: "Programming language that enables interactive web pages.",
            },
            {
                name: "Node.js",
                image: "https://placehold.co/100",
                description: "JavaScript runtime built on Chrome's V8 engine for server-side scripting.",
            },
            {
                name: "React",
                image: "https://placehold.co/100",
                description: "JavaScript library for building user interfaces.",
            },
        ]
    ).then(createdskills => {
            res.redirect('/skills')
        })
})


module.exports = skills

