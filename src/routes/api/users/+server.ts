import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import prisma from '$lib/prisma'
import bcrypt from 'bcrypt'

export const GET: RequestHandler = async ({ locals }) => {
  if (locals.user?.role !== 'ADMIN') {
    return json({ error: 'Unauthorized' }, { status: 403 })
  }

  const users = await prisma.user.findMany({
    select: { id: true, email: true, role: true, createdAt: true, lastLogin: true }
  })

  return json(users)
}

export const POST: RequestHandler = async ({ request, locals }) => {
  if (locals.user?.role !== 'ADMIN') {
    return json({ error: 'Unauthorized' }, { status: 403 })
  }

  const { email, password, role } = await request.json()

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { email, password: hashedPassword, role }
  })

  return json({ success: true, user: { id: user.id, email: user.email, role: user.role } })
}