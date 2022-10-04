const Tournament = require('../models/Tournament')
const path = require('path')
module.exports = class TournamentController {
    static createTournament(req, res) {
        res.sendFile(process.cwd() + '/views/tournament/createTournament.html')
    }

    static async createTournamentSave(req, res) {
        const tournamentData = {
            name: req.body.name,
            prize1: req.body.prize1,
            prize2: req.body.prize2,
            prize3: req.body.prize3,
            prize4: req.body.prize4,
            prize5: req.body.prize5,
            prize6: req.body.prize6,
            prize7: req.body.prize7,
            prize8: req.body.prize8,
            prize9: req.body.prize9,
            prize10: req.body.prize10,
            prize11: req.body.prize11,
            prize12: req.body.prize12,
            prize13: req.body.prize13,
            prize14: req.body.prize14,
            prize15: req.body.prize15,
            prize16: req.body.prize16,
            prize17: req.body.prize17,
            prize18: req.body.prize18,
            prize19: req.body.prize19,
            prize20: req.body.prize20,
            prize21: req.body.prize21,
            prize22: req.body.prize22,
            prize23: req.body.prize23,
            prize24: req.body.prize24,
            totalAmount: req.body.totalAmount
        }

        await Tournament.create(tournamentData)
        res.redirect('/tournament/createTournament')
    }









}