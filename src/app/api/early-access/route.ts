/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server'

import { getToken } from 'next-auth/jwt'
import { neon } from '@neondatabase/serverless'

// Admin authentication middleware
async function checkAdminAccess(req: NextRequest) {
  const token = await getToken({ req })
  console.log('name', token)
  return token?.name === 'Admin'
}

// Protected admin route to list registered emails
export async function GET(request: NextRequest) {
  console.log('request', request)
  try {
    // Check admin authentication
    const isAdmin = await checkAdminAccess(request)
    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 403 }
      )
    }
    const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')

    const arr = await sql`
      SELECT email, message
      FROM early_access_emails 
      
    `
    const rows = JSON.stringify(arr)
    console.log('rows', rows)
    return NextResponse.json(rows)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
