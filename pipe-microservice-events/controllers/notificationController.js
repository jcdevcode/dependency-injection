
function NotificationController ( notificationService ) {

  /**
   * Send notification.
   * 
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  async function sendNotification(req, res, next) {
    try {
      const { deviceId, title, body, data } = req.body
      notificationService.sendPushNotification(deviceId, title, body, data)
      throw new Error('Some error')
      return res.status(201).send()
    } catch (e) {
      next(e)
    }
  }

  return {
    sendNotification
  }

}

module.exports = NotificationController