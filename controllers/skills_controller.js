const express = require('express')
const skills = express.Router()
const Skill = require('../models/skill.js')

skills.get('/', (req,res) => {
    Skill.find()
        .then(foundSkills => {
            res.render('skills/Index', {
                skills: foundSkills, 
                title: 'Skills Index Page',
            })
        })
})

// NEW
skills.get('/new', (req,res) => {
    res.render('skills/new')
})

//SHOW
skills.get('/:id', (req,res) => {
    Skill.findById(req.params.id)
        .then(foundSkill => {
            res.render('skills/show', {
                skill: foundSkill, 
            })
        })
        .catch(err => {
            res.render('error404')
        })
})

// EDIT
skills.get('/:id/edit', (req, res) => {
    Skill.findById(req.params.id)
        .then(foundSkill => {
            res.render('skills/edit', {
                skill: foundSkill
            })
        })
})

//CREATE 
skills.post('/', (req,res) => {
    if (!req.body.image) {
        req.body.image = 'https://placehold.co/100'
    }
    Skill.create(req.body)
    .then(() => {
        console.log('Skill successfully created');
        res.redirect('/skills');
    })
    .catch(err => {
        console.error('Error creating skill:', err);
        res.status(500).send('Error creating skill');
    });
});

// UPDATE
skills.put('/:id', (req,res) => {
    if(!req.body.image){
        req.body.image = "https://placehold.co/100" 
    }
    Skill.findByIdAndUpdate(req.params.id, req.body, { new: true}) 
        .then(updatedSkill => {
            console.log(updatedSkill)
            res.redirect(`/skills/${req.params.id}`)
        })
})

// DELETE
skills.delete('/:id', (req,res) => {
    Skill.findByIdAndDelete(req.params.id) 
        .then(deletedSkill => { 
            res.status(303).redirect('/skills')
        })
})

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

