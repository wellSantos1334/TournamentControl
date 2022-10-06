const Team = require('../models/Team')

module.exports = class TeamController {
    static async createTeam(req, res) {
        const Teams = await Team.findAll({order: [['id', 'DESC']], raw: true})
        console.log(Teams)
        res.render('team/createTeam', {Teams})
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