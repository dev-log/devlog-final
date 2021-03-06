const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Project Schema
const ProjectSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },

    website: {
        type: String
    },
    skills: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    coverImg: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Project = mongoose.model('project', ProjectSchema);
