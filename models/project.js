// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

const projectSchema = new Schema({
    title: {
        type: String, 
        required: true,
    }, 
    description: {
        type: String, 
        required: true
    },
    skills: [
        {
            type: String, // Storing skill names as strings
            required: true,
        },
    ],
    githubLink: {
        type: String,
    },
    liveDemoLink: {
        type: String,
    },
    image: {
        type: String,
        default: "https://placehold.co/400",  
    },
}); 

// helper methods
// projectSchema.methods.getTechnologiesUsed = function(){

//     return `${this.title} uses ${this.technologies}`
// }


const Project = mongoose.model('Project', projectSchema)
module.exports = Project
