// sendPushNotification.js
const webPush = require('web-push');

// Replace with your actual VAPID keys
const vapidKeys = {
  publicKey: 'BHiKKmeGnSYaMiiaaNtNRRZlBzDTEGw66ILt192tu4PRYNIAm-fV5sgk7WQoXvjjxPOim3KEyt9mZUXyOoQRxTk',
  privateKey: 'wa4h49vnpMlIJNTJ_UBF5lpenHOlpoOmUUo3sCv8VEo'
};
// Example subscription object (this should come from your database)
const subscriptions = [ ]; // Store user subscriptions here

// Configure web-push with your VAPID keys
webPush.setVapidDetails(
  'mailto:your-email@example.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);


// Send a push notification to all subscriptions
subscriptions.forEach(subscription => {
  const payload = JSON.stringify({ title: 'Hello', body: 'This is a test notification' });

  webPush.sendNotification(subscription, payload)
    .then(result => console.log('Notification sent', result))
    .catch(err => console.error('Error sending notification', err));
});
