const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const validateProjectInput = require('../../validation/project');

const Project = require('../../models/Projects');

const User = require('../../models/User');

/* Get current user Project */

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const errors = {};

        Project.findOne({ user: req.user.id })
            .populate('user', ['handle', 'avatar'])
            .then(project => {
                if (!project) {
                    errors.noproject = 'There is no project for this user';
                    return res.status(404).json(errors);
                }
                res.json(project);
            })
            .catch(err => res.status(404).json(err));
    }
);

/* Get all projects */
router.get('/all', (req, res) => {
    const errors = {};

    Project.find()
        .populate('user', ['username','avatar'])
        .then(projects => {
            if (!projects) {
                errors.noproject = 'There are no projects';
                return res.status(404).json(errors);
            }

            res.json(projects);
        })
        .catch(err => res.status(404).json({ project: 'There are no projects' }));
});

/*Get Project by handle*/
router.get('/handle/:handle', (req, res) => {
    const errors = {};

    Project.findOne({ handle: req.params.handle })
        .populate('user', ['name', 'avatar'])
        .then(project => {
            if (!project) {
                errors.noproject = 'There is no project for this user';
                res.status(404).json(errors);
            }

            res.json(project);
        })
        .catch(err => res.status(404).json(err));
});

/*Create Project*/
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateProjectInput(req.body);

        // Check Validation
        if (!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
        }

        const projectFields = {};
        projectFields.user = req.user.id;
        if (req.body.handle) projectFields.handle = req.body.handle;
        if (req.body.website) projectFields.website = req.body.website;
        if (req.body.bio) projectFields.bio = req.body.bio;
        if (req.body.skills) projectFields.status = req.body.skills;
        if (req.body.githubusername)
            projectFields.githubusername = req.body.githubusername;
        
        if (typeof req.body.skills !== 'undefined') {
            projectFields.skills = req.body.skills.split(',');
        }

        Project.findOne({user: req.user.id }).then(project => {
            if (project) {
                
                Project.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: projectFields },
                    { new: true }
                ).then(project => res.json(project));
            } else {

                Project.findOne({ handle: projectFields.handle }).then(project => {
                    if (project) {
                        errors.handle = 'That project Name already exists';
                        res.status(400).json(errors);
                    }

                    new Project(projectFields).save().then(project => res.json(project));
                });
            }
        });
    }
);



/*Delete the project*/
router.delete(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Project.findOneAndRemove({ project: req.project.id }).then(() => {
                res.json({ success: true });
        });
    }
);

module.exports = router;
