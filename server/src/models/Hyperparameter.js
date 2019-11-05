const {Hyperparameter} = require('../models')

module.exports = (sequelize, DataTypes) => {
    const Hyperparameter = sequelize.define('Hyperparameter', {
        type: {
            type: DataTypes.STRING,
            unique: true
        },
        description: {
            type: DataTypes.STRING
        },
        layerNumber: {
            type: DataTypes.TEXT
        }
    })

    return Hyperparameter
}