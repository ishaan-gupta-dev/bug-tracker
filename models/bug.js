const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema(  // schema for project
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        reported_by: {
            type: String,
            required: true,
        },
        due_date: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        severity: {
            type: String,
            required: true,
        },
        labels: [
            {
                type: String,
                trim: true,
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;