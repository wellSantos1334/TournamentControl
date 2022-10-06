const db = require('../db/conn')

const Team = db.sequelize.define('teams', {
    name: {
        type: db.Sequelize.STRING,
    }
})

module.exports = Team