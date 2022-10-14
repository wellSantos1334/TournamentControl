const Team = require('../models/Team')

module.exports = class TeamController {
    static async createTeam(req, res) {
        const Teams = await Team.findAll({ order: [['id', 'DESC']], raw: true })
        res.render('team/createTeam', { Teams })
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

    static async editTeam(req, res) {
        try {
            const teamData = await Team.findAll({ where: { id: req.params.id }, raw: true })
            res.render('team/editTeam', { teamData })
        } catch (err) {
            console.log("Error: " + err)
        }

    }

    static async editTeamSave(req, res) {
        try {
            const teamData = await Team.update({ name: req.body.name }, { where: { id: req.body.id } })
            res.redirect('createTeam')
        } catch (err) {
            console.log("Error: "+err)
        }
    }
}