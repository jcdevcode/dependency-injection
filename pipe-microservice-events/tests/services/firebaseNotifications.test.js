const FirebaseNotificationService = require('../../services/firebaseNotifications')

const data = {
  registrationToken: 'cSUvWZzjZ4',
  title: 'Ok Boy: Estamos cerca',
	body: 'La pipa esta por llegar.'
}

describe('Test for: firebaseLib.js', () => {
  it('When call function with correct parameters, then send notification.', () => {
    const credential = {
      applicationDefault: jest.fn().mockReturnThis()
    }
    const sendToDevice = jest.fn().mockReturnThis()
    var admin = {
      initializeApp: jest.fn().mockReturnThis(),
      credential,
      messaging: jest.fn().mockImplementation( () => {
        return {
          sendToDevice: jest.fn().mockResolvedValue({})
        }
      })
    }    
    admin.messaging.sendToDevice = sendToDevice
    const firebaseLibInstance = FirebaseNotificationService(admin)
    firebaseLibInstance.sendPushNotification( data.registrationToken, data.title, data.body)
    expect(admin.initializeApp.mock.calls).toEqual([[{credential}]])
    expect(admin.messaging.sendToDevice.mock.calls).toEqual([])
  })

  it('When an error ocurred, then log the error.', () => {
    const credential = {
      applicationDefault: jest.fn().mockReturnThis()
    }
    const sendToDevice = jest.fn().mockReturnThis()
    var admin = {
      initializeApp: jest.fn().mockReturnThis(),
      credential,
      messaging: jest.fn().mockImplementation(() => {
        throw new Error('This is a custom error, ignore it.');
      })
    }    
    admin.messaging.sendToDevice = sendToDevice
    const firebaseLibInstance = FirebaseNotificationService(admin)
    firebaseLibInstance.sendPushNotification( data.registrationToken, data.title, data.body)
    expect(admin.initializeApp.mock.calls).toEqual([[{credential}]])
    expect(admin.messaging.sendToDevice.mock.calls).toEqual([])
  })
})