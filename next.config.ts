import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',

        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              img-src 'self' data: blob: https://whoxklpbplbypyzeenpy.supabase.co;
              media-src 'self' data: blob:;
              connect-src *;
              frame-src *;
            `.replace(/\s{2,}/g, ' ') // Removes extra spaces
          }
        ]
      }
    ]
  },
  images: {
    domains: ['whoxklpbplbypyzeenpy.supabase.co'] // Add your Supabase domain here
  }
}

export default nextConfig
