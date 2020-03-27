'use strict'

const cfg = require('../config')
const messages = require('../common/messages')
const { DeviceType } = require('../common/enums')

const notificationRequest = (req, res, next) => {
  const { deviceId, title, body, deviceType } = req.body
  if ( !deviceId ) {
    return res.status(400).send(messages.DEVICE_IS_REQUIRED)
  }
  if ( !title ) {
    return res.status(400).send(messages.TITLE_IS_REQUIRED) 
  }
  if ( !body ) {
    return res.status(400).send(messages.BODY_IS_REQUIRED)
  }
  if ( !deviceType || !DeviceType.hasOwnProperty(deviceType)) {
    return res.status(400).send(messages.DEVICE_TYPE_IS_REQUIRED)  
  }

  next()
}

module.exports = {
  notificationRequest
}
