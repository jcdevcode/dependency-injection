'use strict'

const app = require('./app')
const config = require('./config')

if (!module.parent) {
  app.listen(config.app.port, () => {
    console.log(' =======================================================')
    console.log('')
    console.log('   PIPE MICROSERVICE EVENTS, LISTEN ON PORT: ' + config.app.port)
    console.log('   WITH CONTEXT: ' + config.app.context)
    console.log('')
    console.log(' =======================================================')
  })
}

module.exports = app
