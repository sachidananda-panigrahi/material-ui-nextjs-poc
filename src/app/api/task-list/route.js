import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')

  console.log('API called with pagenumber...', page)
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  myHeaders.append('Cookie', `SESSION=${process.env.SESSION}`)

  const raw = JSON.stringify({
    search: {
      limit: 20,
      offset: page * 20,
      query: {},
      transformers: [
        {
          type: 'input',
          transformTag: 'Me',
          transformFunction: 'UserIdTransformer',
          fields: 'processor.fullName',
        },
        {
          type: 'input',
          transformTag: 'Me',
          transformFunction: 'UserIdTransformer',
          fields: 'approver.fullName',
        },
        {
          type: 'input',
          transformTag: 'Me',
          transformFunction: 'UserIdTransformer',
          fields: 'reviewer.fullName',
        },
        {
          type: 'input',
          transformTag: 'Me',
          transformFunction: 'UserIdTransformer',
          fields: 'currentAssignee.fullName',
        },
        {
          type: 'input',
          transformTag: 'Me',
          transformFunction: 'UserIdTransformer',
          fields: 'l2approver.fullName',
        },
        {
          type: 'input',
          transformTag: 'Me',
          transformFunction: 'UserIdTransformer',
          fields: 'l3approver.fullName',
        },
      ],
    },
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  const res = await fetch(
    `${process.env.BASE_API_URL}/pms/task/close/_search`,
    requestOptions
  ).catch(error => console.error(error))

  const data = await res.json()

  return NextResponse.json({ ...data }, { status: 200 })
}
