const options = { priority: 'high', timeToLive: 60 * 60 * 24 }

function FirebaseNotificationService(firebaseAdmin) {

  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.applicationDefault()
  })
  
  async function sendPushNotification(registrationToken, title, body, data) {
    try {
      var payload = {
        notification: { title, body },
        data: data || {}
      }
      firebaseAdmin.messaging().sendToDevice(registrationToken, payload, options)
        .then((response) => {
          console.log('Successfully sent message:', response)
        })
        .catch((error) => {
          console.log('Error sending message:', error)
        })
    } catch (e) {
      console.log(e)
    }
  }

  return {
    sendPushNotification
  }

}

module.exports = FirebaseNotificationService