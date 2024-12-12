'use client'

import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false // Prevent automatic redirects
    })

    if (result?.error) {
      setError('Invalid email or password')
    } else {
      // Redirect to a protected route or dashboard
      redirect('/admin')
    }
  }

  return (
    <div>
      <h1>Sign In</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}
