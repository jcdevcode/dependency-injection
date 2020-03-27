const NotificationController = require('../../controllers/notificationController')

describe('Test for: notificationController.js', () => {
  it('When parameters are correct, then send push notifications and return CREATED response. ', () => {
    const notificationService = {
      sendPushNotification: jest.fn()
    }
    const NotificationApi = NotificationController(notificationService)
    const req = { body :{
      deviceId: '', 
      title: '', 
      body: '', 
      data: {}
    }}
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    const next = {}
    NotificationApi.sendNotification(req, res, next)
    expect(res.status.mock.calls).toEqual([[201]])
  })

 
})