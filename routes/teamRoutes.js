const express = require('express')
const router = express.Router()

// Controller
const TeamController = require('../controllers/TeamController')

router.get('/createTeam', TeamController.createTeam)
router.post('/createTeamSave', TeamController.createTeamSave)
router.get('/editTeam/:id', TeamController.editTeam)
router.post('/editTeamSave', TeamController.editTeamSave)

module.exports = router