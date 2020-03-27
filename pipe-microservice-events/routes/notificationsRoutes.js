'use strict'

const express = require('express')

const { notificationRequest } = require('../middlewares/notification')
const { NotificationApiHandler } = require('../controllers')

const api = express.Router()
api.post('/notifications', [ notificationRequest ], NotificationApiHandler.sendNotification)

module.exports = api
