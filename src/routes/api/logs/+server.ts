import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import prisma from '$lib/prisma'

export const GET: RequestHandler = async ({ url, locals }) => {
  if (locals.user?.role !== 'ADMIN') {
    return json({ error: 'Unauthorized' }, { status: 403 })
  }

  const page = parseInt(url.searchParams.get('page') || '1')
  const limit = parseInt(url.searchParams.get('limit') || '10')
  const eventType = url.searchParams.get('eventType')
  const userId = url.searchParams.get('userId')

  const where = {
    ...(eventType && { eventType }),
    ...(userId && { userId: parseInt(userId) })
  }

  const [logs, total] = await Promise.all([
    prisma.log.findMany({
      where,
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: { user: { select: { email: true } } }
    }),
    prisma.log.count({ where })
  ])

  return json({ logs, total })
}