const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('..\\config\\config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)
console.log(fs
    .readdirSync(__dirname))

fs
    .readdirSync(__dirname).forEach(file => {
    if(file !== "index.js"){
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db