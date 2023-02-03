const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema( // schema for project 
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        bugs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Bug',
            },
        ],
        labels: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;