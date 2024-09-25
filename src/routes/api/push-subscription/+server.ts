// src/routes/api/push-subscription/+server.ts
import { json } from '@sveltejs/kit';

// In-memory store for subscriptions (use a database in production)
let subscriptions = [];

export async function POST({ request }) {
  const subscription = await request.json();

  // Save the subscription (you should store this in a real database)
  subscriptions.push(subscription);

  return json({ message: 'Subscription saved successfully' });
}
