const db = require('../db/conn')
const Team = require('./Team')
const Tournament = require('./Tournament')

const Team_Tournament = db.sequelize.define('team_tournament', {

})

Team_Tournament.belongsTo(Team)
Team_Tournament.belongsTo(Tournament)
Team.hasMany(Team_Tournament)
Tournament.hasMany(Team_Tournament)

module.exports = Team_Tournament