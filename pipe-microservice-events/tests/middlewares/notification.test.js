const { notificationRequest } = require('../../middlewares/notification')

describe('Test for: notification.js', () => {
  it('When device id is not present, then return BAD REQUEST.', () => {
    const req = {
      body: {}
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    const next = {}
    notificationRequest(req, res, next)
    expect(res.status.mock.calls).toEqual([
      [400]
    ])
  })

  it('When title is not present, then return BAD REQUEST.', () => {
    const req = {
      body: { deviceId: 'cSUvWZzjZ44:APA91bFDb93aP0jVWeGAIk'}
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    const next = {}
    notificationRequest(req, res, next)
    expect(res.status.mock.calls).toEqual([
      [400]
    ])
  })

  it('When body is not present, then return BAD REQUEST.', () => {
    const req = {
      body: { 
        deviceId: 'cSUvWZzjZ44:APA91bFDb93aP0jVWeGAIk',
        title: 'This is the title of notification'
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    const next = {}
    notificationRequest(req, res, next)
    expect(res.status.mock.calls).toEqual([
      [400]
    ])
  })

  it('When device type is not present, then return BAD REQUEST.', () => {
    const req = {
      body: { 
        deviceId: 'cSUvWZzjZ44:APA91bFDb93aP0jVWeGAIk',
        title: 'This is the title of notification',
        body: 'This is a notification.'
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    const next = {}
    notificationRequest(req, res, next)
    expect(res.status.mock.calls).toEqual([
      [400]
    ])
  })

  it('When device type is not valid, then return BAD REQUEST.', () => {
    const req = {
      body: { 
        deviceId: 'cSUvWZzjZ44:APA91bFDb93aP0jVWeGAIk',
        title: 'This is the title of notification',
        body: 'This is a notification.',
        deviceType: 'UNKNOW'
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    }
    const next = {}
    notificationRequest(req, res, next)
    expect(res.status.mock.calls).toEqual([
      [400]
    ])
  })

  it('When request are correct, then call to the next middleware.', () => {
    const req = {
      body: { 
        deviceId: 'cSUvWZzjZ44:APA91bFDb93aP0jVWeGAIk',
        title: 'This is the title of notification',
        body: 'This is a notification.',
        deviceType: 'ANDROID'
      }
    }
    const res = {}
    const next = jest.fn()

    notificationRequest(req, res, next)
    expect(next.mock.calls).toEqual([[]])
  })
})