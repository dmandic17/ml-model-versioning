

module.exports = (sequelize, DataTypes) => {

    const Project = sequelize.import('../models/Project')
    const Model = sequelize.define('Model', {
        name: {
            type: DataTypes.STRING
        },
        groupName: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        trainingTime:{
            type: DataTypes.TIME
        },
        inferenceTime:{
            type: DataTypes.TIME
        },
        metricsResults:{
            type: DataTypes.TEXT
        }

    })
   // const Hyperparameter = sequelize.import('../models/Hyperparameter')
    //Model.hasMany(Hyperparameter, {as: "Hyperparameters"})
    Model.belongsTo(Project, {as:'Project'})


    return Model
}