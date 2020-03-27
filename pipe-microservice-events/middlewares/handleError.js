'use strict'

const cfg = require('../config')
const messages = require('../common/messages')

const handleError = (err, req, res, next) => {
  console.log(err)
  return res.status(500).send(messages.INTERNAL_ERROR)
}

module.exports = handleError
