// src/routes/api/vapid-key.ts
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
// Use your public VAPID key (generated earlier)
const publicVapidKey = 'BHiKKmeGnSYaMiiaaNtNRRZlBzDTEGw66ILt192tu4PRYNIAm-fV5sgk7WQoXvjjxPOim3KEyt9mZUXyOoQRxTk';

export const GET: RequestHandler = async () => {
    return json({ 
        status: 200,
        body: {
            vapidKey: publicVapidKey
        } 
    });
};
