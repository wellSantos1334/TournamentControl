const express = require('express')
const PORT = process.env.PORT || 3232
const conn = require('./db/conn')
const app = express()

// Import models
const Tournament = require('./models/Tournament')

// Import routes
const tournamentRoutes = require('./routes/tournamentRoutes')

// Config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))


// Routes
app.get('/', (req, res) => {

})
app.use('/tournament', tournamentRoutes )

// Server

conn.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando: http://localhost:${PORT}`)
    })
}).catch((err) => {
    console.log('Erro ao conectar com o servidor: '+err)
})



