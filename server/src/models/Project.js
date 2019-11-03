module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.TEXT
        },
        owner:{
            type: DataTypes.STRING
        }
    })

    return Project
}