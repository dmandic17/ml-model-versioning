const {Project} = require('../models')

module.exports = {
    async newProject (req, res) {
        try {
            console.log('sdjas')
            const project = await Project.create(req.body)
            res.send(project)
        } catch (err) {
            res.status(500).send({
                error: 'Duplicate name of the project.'
            })

        }
    },
        async getProjects (req, res) {
            try {
                const email = req.query.email
                const projects = await Project.findAll({
                    where: {
                        owner: email
                    }
                })
                //console.log(req.user.email)
                res.send(projects)

            }
            catch (err) {
                console.log(err)
                res.status(500).send({
                    error: 'Could not get.'
                })

            }
        }
    }