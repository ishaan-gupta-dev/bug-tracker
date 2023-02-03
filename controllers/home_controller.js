const Project = require('../models/project');

module.exports.home = async function (req, res) {
    try {
        let projects = await Project.find({}).sort('-createdAt'); // find all the project in DB and sort them according to date created
        return res.render('home_page', {
            title: 'Bug Tracker | Home', // passing title to views
            urlQuery: req.originalUrl, // passing URL to views
            projects, // pass the projects to views
        });
    } catch {
        console.log('Error in home page, code=>', err);
        return;
    }
};
