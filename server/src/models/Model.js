module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('Model', {
        name: {
            type: DataTypes.STRING,
            unique: true
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
    const Hyperparameter = sequelize.import('../models/Hyperparameter')
    Model.hasMany(Hyperparameter, {as: "Hyperparameters"})

    return Model
}