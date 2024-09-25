// Import web-push using ES module syntax
import webPush from 'web-push';

// Generate VAPID keys
const vapidKeys = webPush.generateVAPIDKeys();

console.log('Public Key:', vapidKeys.publicKey);
console.log('Private Key:', vapidKeys.privateKey);