const Project = require('../models/project');
const Bug = require('../models/bug');

module.exports.create = async function (req, res) {
    try {
        let project = await Project.findById(req.params.id);
        if (project) {
            let bug = await Bug.create({
                title: req.body.title,
                description: req.body.description,
                reported_by: req.body.reportedBy,
                due_date: req.body.dueDate,
                status: req.body.status,
                severity: req.body.severity,
                labels: req.body.labels,
            });
            project.bugs.push(bug);
            if (!(typeof (req.body.labels) === 'string')) {
                for (let label of req.body.labels) {
                    let isPresent = project.labels.find((obj) => obj == label);
                    if (!isPresent) {
                        project.labels.push(label);
                    }
                }
            } else {
                project.labels.push(req.body.labels);
            }
            await project.save();
            return res.redirect('back');
        } else {
            console.log("Project not found!");
            return res.redirect('back');
        }
    } catch (error) {
        console.log('Error in creating thebug, code=>', error);
        return;
    }
};
