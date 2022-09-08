const db = require('../db/conn')

const Tournament = db.sequelize.define('tournaments', {
    name: {
        type: db.Sequelize.STRING,
        required: true
    },
    prize1: {
        type: db.Sequelize.FLOAT
    },
    prize2: {
        type: db.Sequelize.FLOAT
    },
    prize3: {
        type: db.Sequelize.FLOAT
    },
    prize4: {
        type: db.Sequelize.FLOAT
    },
    prize5: {
        type: db.Sequelize.FLOAT
    },
    prize6: {
        type: db.Sequelize.FLOAT
    },
    prize7: {
        type: db.Sequelize.FLOAT
    },
    prize8: {
        type: db.Sequelize.FLOAT
    },
    prize9: {
        type: db.Sequelize.FLOAT
    },
    prize10: {
        type: db.Sequelize.FLOAT
    },
    prize11: {
        type: db.Sequelize.FLOAT
    },
    prize12: {
        type: db.Sequelize.FLOAT
    },
    prize13: {
        type: db.Sequelize.FLOAT
    },
    prize14: {
        type: db.Sequelize.FLOAT
    },
    prize15: {
        type: db.Sequelize.FLOAT
    },
    prize16: {
        type: db.Sequelize.FLOAT
    },
    prize17: {
        type: db.Sequelize.FLOAT
    },
    prize18: {
        type: db.Sequelize.FLOAT
    },
    prize19: {
        type: db.Sequelize.FLOAT
    },
    prize20: {
        type: db.Sequelize.FLOAT
    },
    prize21: {
        type: db.Sequelize.FLOAT
    },
    prize22: {
        type: db.Sequelize.FLOAT
    },
    prize23: {
        type: db.Sequelize.FLOAT
    },
    prize24: {
        type: db.Sequelize.FLOAT
    },
    totalAmount: {
        type: db.Sequelize.FLOAT
    }
})

module.exports = Tournament
