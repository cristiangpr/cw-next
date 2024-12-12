import NextAuth, { AuthOptions, JWT } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (
          credentials?.email === 'admin@example.com' &&
          credentials.password === process.env.PASSWORD
        ) {
          return { id: '1', name: 'Admin', email: 'admin@example.com' }
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      // Include user details in the JWT
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      // Pass the JWT fields to the session
      session.user = {
        id: token.id as string,
        email: token.email as string,
        name: token.name as string,
        token: token as JWT
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
