import { DefaultSession, JWT as DefaultJWT } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      email: string
      name: string
      token: DefaultJWT // Use DefaultJWT here
    }
  }

  interface JWT extends DefaultJWT {
    id?: string
    email?: string
    name?: string
  }
}
