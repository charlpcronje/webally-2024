import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import prisma from '$lib/prisma';
import bcrypt from 'bcrypt';

export const POST: RequestHandler = async ({ request }) => {
  const { email, password } = await request.json()

  const user = await prisma.user.findUnique({ where: { email } })

  if (user && await bcrypt.compare(password, user.password)) {
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() }
    })

    await prisma.log.create({
      data: {
        eventType: 'LOGIN_SUCCESS',
        userId: user.id,
        data: {
          ip: request.headers.get('x-forwarded-for') || 'unknown',
          userAgent: request.headers.get('user-agent') || 'unknown'
        }
      }
    });

    const headers = new Headers();
    headers.append('Set-Cookie', `session=${JSON.stringify({ id: user.id, email: user.email, role: user.role })}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`);




    return json(
        { success: true, user: { id: user.id, email: user.email, role: user.role } },
        { headers }
    );
  } else {
    await prisma.log.create({
      data: {
        eventType: 'LOGIN_ATTEMPT',
        data: {
          email,
          ip: request.headers.get('x-forwarded-for') || 'unknown',
          userAgent: request.headers.get('user-agent') || 'unknown'
        }
      }
    })

    return json({ success: false, error: 'Invalid email or password' }, { status: 401 })
  }
}