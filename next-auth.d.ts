import { DefaultSession, DefaultJWT } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      token: JWT
    } & DefaultSession['user']
  }

  interface JWT extends DefaultJWT {
    id?: string
    email?: string
    name?: string
  }
}
