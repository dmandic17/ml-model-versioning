const {Project} = require('../models')

module.exports = {
    async newProject (req, res) {
        try {
            const email = req.body.owner
            const name = req.body.name
            const projec = await Project.findOne({
                where: {
                    owner: email,
                    name: name
                }
            })
            const project = null
            if (!projec) this.project = await Project.create(req.body)
            else throw onerror
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
                console.log(req.query.email)
                const projects = await Project.findAll({
                    where: {
                        owner: email
                    }
                })
                //console.log(req.user.email)
                res.send(projects)

            }
            catch (err) {
                res.status(500).send({
                    error: 'Could not get.'
                })

            }
        },
        async deleteProject(req,res) {
        try{
            const id = req.params.id
            console.log(id)
            await Project.destroy({
                where:{
                    id: id
                }
            })
        }catch{
            res.status(500).send({
                error: 'Could not delete.'
            })
        }
        },
        async updateProject(req,res) {
            try{
                await Project.update(req.body, {
                    where: {
                        id: req.params.id
                    }
                })
            }catch{
                res.status(500).send({
                    error: 'Could not update a project.'
                })
            }
        },
    async show(req,res) {
        try{
            const prj = await Project.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.send(prj)
        }catch{
            res.status(500).send({
                error: 'Could not find a project.'
            })
        }
    }
    }