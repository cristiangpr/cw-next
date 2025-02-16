'use server'

import { neon } from '@neondatabase/serverless'

export async function create(formData: FormData): Promise<boolean> {
  console.log(process.env.DATABASE_URL)
  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')
  const email = formData.get('email')
  const message = formData.get('message')
  // Enhanced validation schema
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS early_access_emails (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        message TEXT
        
      )
    `
    console.log('table')
    // Insert email and optional message, handling duplicates
    await sql`
      INSERT INTO early_access_emails (email, message) 
      VALUES (${email}, ${message})
      ON CONFLICT (email) DO NOTHING
    `
  } catch (e) {
    console.log(e)
    return false
  }
  return true
}
export async function saveUrl(url: string): Promise<boolean> {
  console.log(process.env.DATABASE_URL)
  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS image_urls (
        id SERIAL PRIMARY KEY,
        url TEXT UNIQUE NOT NULL
    
        
      )
    `
    console.log('table')

    await sql`
      INSERT INTO image_urls (url) 
      VALUES (${url})
      ON CONFLICT (url) DO NOTHING
    `
  } catch (e) {
    console.log(e)
    return false
  }
  return true
}
