'use server'

import { neon } from '@neondatabase/serverless'

export async function create(formData: FormData) {
  console.log(process.env.DATABASE_URL)
  const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')
  const email = formData.get('email')
  const message = formData.get('message')
  // Enhanced validation schema

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
  console.log('insert')
}
