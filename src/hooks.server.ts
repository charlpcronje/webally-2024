import type { Handle } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith('/admin')) {
    await prisma.log.create({
      data: {
        eventType: 'PAGE_LOAD',
        userId: event.locals.user?.id,
        data: {
          url: event.url.pathname,
          ip: event.request.headers.get('x-forwarded-for') || 'unknown',
          userAgent: event.request.headers.get('user-agent') || 'unknown'
        }
      }
    })
  }

  return resolve(event)
}