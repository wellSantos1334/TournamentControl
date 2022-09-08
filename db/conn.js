const Sequelize = require('sequelize')

const sequelize = new Sequelize('camp', 'root', 'Well@134', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}