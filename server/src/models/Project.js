module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        owner:{
            type: DataTypes.STRING
        }
    })

    const Model = sequelize.import('../models/Model')
    Project.hasMany(Model, {as:'Models'})

    return Project
}