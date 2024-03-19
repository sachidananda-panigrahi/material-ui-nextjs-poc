'use server'

import { cookies } from 'next/headers'

const oneDay = 24 * 60 * 60 * 1000

async function create(data) {
  cookies().set('SESSION', process.env.SESSION, {
    expires: Date.now() + oneDay,
  })
}
