const {Model} = require('../models')
const {Project} = require('../models')
const Sequelize = require('sequelize');
const op = Sequelize.Op;
module.exports = {
    async newModel (req, res) {
        try {
            console.log('hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
            console.log(req.body.ProjectId)
            const prj = await Project.findOne({
                where:{
                    id: req.body.ProjectId
                }
            })
            const x=prj.id
            console.log(x)
            console.log(x !== undefined)
            if( x !== undefined) {
                const model = await Model.create({
                    "name": req.body.name,
                    "groupName": req.body.groupName,
                    "description": req.body.description,
                    "trainingTime": req.body.trainingTime,
                    "inferenceTime": req.body.inferenceTime,
                    "metricsResults": req.body.metricsResults,
                    "ProjectId": x
                })
                res.send(model)
            }
            res.send({message: "wrong project"})


        } catch (err) {
            res.status(500).send({
                error: 'Cannot create a model.'
            })

        }
    },
    async getModels (req, res) {
        try {
            const prjId = req.query.ProjectId
            console.log(prjId)
            const models = await Model.findAll({
                where: {
                    ProjectId: prjId
                }
            })
            res.send(models)

        }
        catch (err) {
            res.status(500).send({
                error: 'Could not get.'
            })

        }
    },
    async deleteModel(req,res) {
        try{
            const id = req.params.id
            console.log(id)
            await Model.destroy({
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
    async updateModel(req,res) {
        try{
            await Model.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            const prj = await Model.findOne({
                where:{
                    id: req.params.id
                }
            })
            res.send(prj)
        }catch{
            res.status(500).send({
                error: 'Could not update a model.'
            })
        }
    },
    async showModel(req,res) {
        try{
            const model = await Model.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.send(model)
        }catch{
            res.status(500).send({
                error: 'Could not find a model.'
            })
        }
    },
    async search(req, res) {
    try{

        //popraviiii na usera
        console.log(req.query)
        console.log(req.params)
        const date = new Date(req.params.date)
        const endDate = new Date()
        console.log(date)
        console.log(endDate)
        const models = await Model.findAll({
            where: {
                updatedAt: {
                    [op.between]:[date,endDate]
                }
            },
            order: [
                ['updatedAt', 'DESC']
            ]
        })
        res.send(models)
    }catch{
        res.status(500).send({
            error: 'Could not get all.'
        })
    }
}
}