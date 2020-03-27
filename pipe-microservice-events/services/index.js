const admin = require('firebase-admin');

const FirebaseNotificationService = require('./firebaseNotifications')

const NotificationService = FirebaseNotificationService( admin )

module.exports = {
  NotificationService
}
