const Team = require('../models/Team')

module.exports = class TeamController {
    static createTeam(req, res) {
        res.render('team/createTeam')
    }

    static async createTeamSave(req, res) {
        const newTeam = {
            name: req.body.name
        }

        try {
            await Team.create(newTeam)
            res.redirect('/team/createTeam')
        } catch (err) {
            console.log('Failed to create a new team: ' + err)
        }
    }


    
}