/* eslint-disable @typescript-eslint/no-explicit-any */
// /app/api/save-image-url/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { saveUrl } from '../../actions' // Adjust the path as needed
import { neon } from '@neondatabase/serverless'

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json()
    console.log(url)

    if (!url) {
      return NextResponse.json({ message: 'URL is required' }, { status: 400 })
    }

    const result = await saveUrl(url)

    if (result) {
      return NextResponse.json({ message: 'URL saved successfully', url: url })
    } else {
      return NextResponse.json(
        { message: 'Failed to save URL' },
        { status: 500 }
      )
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error occurred', error: error.message },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Check admin authentication

    const sql = neon(process.env.DATABASE_URL ? process.env.DATABASE_URL : '')

    const arr = await sql`
      SELECT url
      FROM image_urls 
      
    `
    const urls = arr.map((item) => item.url)
    return NextResponse.json(urls)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
