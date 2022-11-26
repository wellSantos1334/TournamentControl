const express = require('express')
const router = express.Router()
const TournamentController = require('../controllers/TournamentController')
const Tournament = require('../models/Tournament')

router.get('/createTournament', TournamentController.createTournament)
router.post('/createTournamentSave', TournamentController.createTournamentSave)
router.get('/findTournament', TournamentController.findTournament)
router.get('/editTournament/:id', TournamentController.editTournament)
router.post('/editTournament', TournamentController.editTournamentPost)
router.post('/deleteTournament', TournamentController.deleteTournament)
router.post('/checkTournament', TournamentController.checkTournament)
router.get('/checkTournamentGroup/:id', TournamentController.checkTournamentGroup)
router.get('/addTeamtoTournament/:id', TournamentController.addTeamtoTournament)

module.exports = router