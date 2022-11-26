const express = require('express')
const PORT = process.env.PORT || 3232
const conn = require('./db/conn')
const exphbs = require('express-handlebars')

const app = express()


// import models
const Tournament = require('./models/Tournament')
const Team = require('./models/Team')
const Team_Tournament = require('./models/team_tournament')


// import routes
const tournamentRoutes = require('./routes/tournamentRoutes')
const teamRoutes = require('./routes/teamRoutes')

// template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.json('Página inicial')
})
app.use('/tournament', tournamentRoutes )
app.use('/team', teamRoutes)

// server
conn.sequelize.sync().then(() => {
        // conn.sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando: http://localhost:${PORT}`)
    })
}).catch((err) => {
    console.log('Erro ao conectar com o servidor: '+err)
})



