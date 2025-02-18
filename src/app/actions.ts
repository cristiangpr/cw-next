'use server'

import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL || '')

// Generic function for logging errors
function logError(functionName: string, error: unknown) {
  console.error(`[${functionName}] Error:`, error)
}

// Ensure table exists before inserting
async function ensureTableExists(tableQuery: string, functionName: string) {
  try {
    await sql(tableQuery) // ✅ Execute as a direct string
    console.log(`[${functionName}] Table ensured.`)
  } catch (error) {
    console.error(`[${functionName} ERROR]:`, error)
    throw new Error(`[${functionName}] Failed to create table.`)
  }
}

// Save user email and message
export async function create(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const email = formData.get('email')
    const message = formData.get('message')

    if (!email) {
      throw new Error('Email is required') // ❗ Throw instead of returning
    }

    await ensureTableExists(
      `CREATE TABLE IF NOT EXISTS early_access_emails (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        message TEXT
      )`,
      'create'
    )

    await sql`
      INSERT INTO early_access_emails (email, message) 
      VALUES (${email}, ${message})
      ON CONFLICT (email) DO NOTHING
    `

    console.log('[create] Email saved:', email)
    return { success: true }
  } catch (error) {
    logError('create', error)
    throw error // ❗ Propagate to API route
  }
}

// Save image URL
export async function saveUrl(
  url: string
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!url) {
      throw new Error('URL is required') // ❗ Throw instead of returning
    }

    await ensureTableExists(
      `CREATE TABLE IF NOT EXISTS image_urls (
        id SERIAL PRIMARY KEY,
        url TEXT UNIQUE NOT NULL
      )`,
      'saveUrl'
    )

    await sql`
      INSERT INTO image_urls (url) 
      VALUES (${url})
      ON CONFLICT (url) DO NOTHING
    `

    console.log('[saveUrl] URL saved:', url)
    return { success: true }
  } catch (error) {
    logError('saveUrl', error)
    throw error // ❗ Propagate to API route
  }
}
