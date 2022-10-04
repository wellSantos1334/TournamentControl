const Tournament = require('../models/Tournament')
module.exports = class TournamentController {
    // Create Tournament
    static createTournament(req, res) {
        res.render('tournament/createTournament')
    }
    static async createTournamentSave(req, res) {
        const prize1 = parseFloat(req.body.prize1) || 0
        const prize2 = parseFloat(req.body.prize2) || 0
        const prize3 = parseFloat(req.body.prize3) || 0
        const prize4 = parseFloat(req.body.prize4) || 0
        const prize5 = parseFloat(req.body.prize5) || 0
        const prize6 = parseFloat(req.body.prize6) || 0
        const prize7 = parseFloat(req.body.prize7) || 0
        const prize8 = parseFloat(req.body.prize8) || 0
        const prize9 = parseFloat(req.body.prize9) || 0
        const prize10 = parseFloat(req.body.prize10) || 0
        const prize11 = parseFloat(req.body.prize11) || 0
        const prize12 = parseFloat(req.body.prize12) || 0
        const prize13 = parseFloat(req.body.prize13) || 0
        const prize14 = parseFloat(req.body.prize14) || 0
        const prize15 = parseFloat(req.body.prize15) || 0
        const prize16 = parseFloat(req.body.prize16) || 0
        const prize17 = parseFloat(req.body.prize17) || 0
        const prize18 = parseFloat(req.body.prize18) || 0
        const prize19 = parseFloat(req.body.prize19) || 0
        const prize20 = parseFloat(req.body.prize20) || 0
        const prize21 = parseFloat(req.body.prize21) || 0
        const prize22 = parseFloat(req.body.prize22) || 0
        const prize23 = parseFloat(req.body.prize23) || 0
        const prize24 = parseFloat(req.body.prize24) || 0
        const totalAmount = prize1 + prize2 + prize3 + prize4 + prize5 + prize6 + prize7 + prize8 + prize9 + prize10 + prize11 + prize12 + prize13 + prize14 + prize15 + prize16 + prize17 + prize18 + prize19 + prize20 + prize21 + prize22 + prize23 + prize24
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
            totalAmount: totalAmount
        }
        await Tournament.create(tournamentData)
        res.redirect('/tournament/createTournament')
    }

    // Find Tournament
    static async findTournament(req, res) {
        const tournamentData = await Tournament.findAll({ order: [['createdAt', 'DESC']], raw: true })
        res.render('tournament/findTournament', { tournamentData })
    }

    // Edit Tournament
    static async editTournament(req, res) {
        await Tournament.findOne({
            where: {
                id: req.params.id
            },
            raw: true
        }).then((data) => {
            res.render('tournament/editTournament', { data: data })
            // console.log(data)
        }).catch((err) => {
            console.log('Error: ' + err)
        })
    }

    static async editTournamentPost(req, res) {
        const prize1 = parseFloat(req.body.prize1) || 0
        const prize2 = parseFloat(req.body.prize2) || 0
        const prize3 = parseFloat(req.body.prize3) || 0
        const prize4 = parseFloat(req.body.prize4) || 0
        const prize5 = parseFloat(req.body.prize5) || 0
        const prize6 = parseFloat(req.body.prize6) || 0
        const prize7 = parseFloat(req.body.prize7) || 0
        const prize8 = parseFloat(req.body.prize8) || 0
        const prize9 = parseFloat(req.body.prize9) || 0
        const prize10 = parseFloat(req.body.prize10) || 0
        const prize11 = parseFloat(req.body.prize11) || 0
        const prize12 = parseFloat(req.body.prize12) || 0
        const prize13 = parseFloat(req.body.prize13) || 0
        const prize14 = parseFloat(req.body.prize14) || 0
        const prize15 = parseFloat(req.body.prize15) || 0
        const prize16 = parseFloat(req.body.prize16) || 0
        const prize17 = parseFloat(req.body.prize17) || 0
        const prize18 = parseFloat(req.body.prize18) || 0
        const prize19 = parseFloat(req.body.prize19) || 0
        const prize20 = parseFloat(req.body.prize20) || 0
        const prize21 = parseFloat(req.body.prize21) || 0
        const prize22 = parseFloat(req.body.prize22) || 0
        const prize23 = parseFloat(req.body.prize23) || 0
        const prize24 = parseFloat(req.body.prize24) || 0
        const totalAmount = prize1 + prize2 + prize3 + prize4 + prize5 + prize6 + prize7 + prize8 + prize9 + prize10 + prize11 + prize12 + prize13 + prize14 + prize15 + prize16 + prize17 + prize18 + prize19 + prize20 + prize21 + prize22 + prize23 + prize24

        console.log(totalAmount)

        Tournament.update({
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
            totalAmount: totalAmount
        },
            {
                where: {
                    id: req.body.id,

                }
            }).then(() => {
                res.redirect('/tournament/findTournament')
            }).catch((err) => {
                console.log(err)
            })
    }

    // Delete Tournament

    static async deleteTournament(req, res) {
        const id = req.body.id

        try {
            await Tournament.destroy({ where: { id: id } })

            res.redirect('/tournament/findTournament')
        } catch (err) {
            console.log(err)
        }
    }
}