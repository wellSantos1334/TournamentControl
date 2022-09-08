const express = require('express')
const router = express.Router()
const TournamentController = require('../controllers/TournamentController')

router.get('/createTournament', TournamentController.createTournament)
router.post('/createTournamentSave', TournamentController.createTournamentSave)

module.exports = router