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
            if (!projec) {
                const project = await Project.create(req.body)
                res.send(project)
            }
            else throw onerror
        } catch (err) {
            res.status(400).send({
                error: 'Duplicate name of the project.'
            })

            }
        },
        async getProjects (req, res) {
            try {
                const email = req.query.email
                //console.log(req.query.email)
                const projects = await Project.findAll({
                    where: {
                        owner: email
                    }
                })
                //console.log(req.user.email)
                //console.log(projects)
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
            res.send({ id: id})
        }catch{
            res.status(500).send({
                error: 'Could not delete.'
            })
        }
        },
        async updateProject(req,res) {
            try{
                console.log(req.body)
                await Project.update(req.body, {
                    where: {
                        id: req.params.id
                    }
                })
                const prj = await Project.findOne({
                    where:{
                        id: req.params.id
                    }
                })
                res.send(prj)
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