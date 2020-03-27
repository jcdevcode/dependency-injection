const { NotificationService } = require('../services')

const NotificationController = require('./notificationController')

const NotificationApiHandler = NotificationController(NotificationService)

module.exports = {
  NotificationApiHandler
}
