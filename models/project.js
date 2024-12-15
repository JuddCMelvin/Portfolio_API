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
    technologies: {
        type: [String], 
        required: true
    },
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

//helper methods
// projectSchema.methods.getTechnologiesUsed = function() {
//     if(this.technologies){
//         this.technologies.map(technology => {
//             technology = technology + ' '
//             return technology
//         })
//     }
// }
const Project = mongoose.model('Project', projectSchema)
module.exports = Project
