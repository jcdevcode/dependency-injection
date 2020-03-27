'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const handleError = require('./middlewares/handleError')

const notificationsRoutes = require('./routes/notificationsRoutes')
const config = require('./config')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/**
 * Routes app
 */
app.use(config.app.context, notificationsRoutes)

/*
 * Middleware for handle errors
 */
app.use(handleError)

module.exports = app
