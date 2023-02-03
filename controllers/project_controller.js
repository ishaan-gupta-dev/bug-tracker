const Project = require('../models/project');
const Bug = require('../models/bug');

// creating the project
module.exports.create = async function (req, res) {
    try {
        Project.create({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author,
        });
        req.flash('success', "Project created!");
        return res.redirect('back');
    } catch (error) {
        console.log("Error in creating the post, code=>", error);
        return res.redirect('back');
    }
}

// find the project and display the bugs created in it
module.exports.projectBugsList = async function (req, res) {
    try {
        let project = await Project.findById(req.params.id).populate({
            path: "bugs",
        });
        if (project) {
            return res.render('project_bugs_list_page', {
                title: 'Project Bugs Page',
                urlQuery: req.originalUrl,
                project,
            })
        }
        return res.redirect('back');
    } catch (error) {
        console.log("Error in getting project details from DB, code=>", error);
        return res.redirect('back');
    }
};

module.exports.delete = async function (req, res) {
    try {
        let project = await Project.findById(req.params.id).populate({ // find the project
            path: "bugs",
        });
        for (let bug of project.bugs) {
            await Bug.findByIdAndDelete(bug._id.toString()); // find all the bugs in the project and delete them
        }
        project.remove(); // delete the project
        req.flash('success', 'Project deleted!');
        return res.redirect('back');
    } catch (error) {
        console.log('Error in deleteing the project, code =>', error);
        return res.redirect('back');
    }
}