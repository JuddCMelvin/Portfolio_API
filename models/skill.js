const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'https://placehold.co/100', // Placeholder image URL
    },
});

module.exports = mongoose.model('Skill', skillSchema);
