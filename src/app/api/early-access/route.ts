import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getToken } from 'next-auth/jwt'

// Enhanced validation schema
const EarlyAccessSchema = z.object({
  email: z.string().email('Invalid email address'),
  message: z.string().max(500, 'Message too long')
})

// Admin authentication middleware
async function checkAdminAccess(req: NextRequest) {
  const token = await getToken({ req })
  return token?.role === 'admin'
}

export async function POST(request: NextRequest) {
  try {
    const { email, message } = EarlyAccessSchema.parse(await request.json())

    // Create table if not exists (first-time setup)
    await sql`
      CREATE TABLE IF NOT EXISTS early_access_emails (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        message TEXT,
        created_at TIMESTAMP WITH DEFAULT CURRENT_TIMESTAMP
      )
    `

    // Insert email and optional message, handling duplicates
    await sql`
      INSERT INTO early_access_emails (email, message) 
      VALUES (${email}, ${message})
      ON CONFLICT (email) DO NOTHING
    `

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully registered for early access'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Early access registration error:', error)
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof z.ZodError
            ? 'Invalid email format'
            : 'Registration failed'
      },
      { status: 500 }
    )
  }
}

// Protected admin route to list registered emails
export async function GET(request: NextRequest) {
  try {
    // Check admin authentication
    const isAdmin = await checkAdminAccess(request)
    if (!isAdmin) {
      return NextResponse.json(
        { error: 'Unauthorized access' },
        { status: 403 }
      )
    }

    const { rows } = await sql`
      SELECT email, message, created_at 
      FROM early_access_emails 
      ORDER BY created_at DESC
    `
    return NextResponse.json(rows)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch emails' },
      { status: 500 }
    )
  }
}
