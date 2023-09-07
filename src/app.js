const express = require('express')

const app = express()

app.use(express.json())
// rotas e middlewares a partir desta linha abaixo

module.exports = app