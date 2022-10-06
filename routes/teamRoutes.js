const express = require('express')
const router = express.Router()

// Controller
const TeamController = require('../controllers/TeamController')

router.get('/createTeam', TeamController.createTeam)
router.post('/createTeamSave', TeamController.createTeamSave)

module.exports = router