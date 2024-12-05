import { useEffect, useState } from 'react'
import { useSession, getSession, GetSessionParams } from 'next-auth/react'
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Alert
} from '@mui/material'

export default function AdminDashboard() {
  const { data: session } = useSession()
  const [registrations, setRegistrations] = useState([])
  const [error, setError] = useState<Record<string, string>>({})

  useEffect(() => {
    if (session?.user) {
      fetch('/api/registrations')
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch registrations')
          return res.json()
        })
        .then(setRegistrations)
        .catch(setError)
    }
  }, [session])

  if (!session) {
    return (
      <Container>
        <Alert severity="error">You need to sign in to access this page.</Alert>
      </Container>
    )
  }

  if (session?.user) {
    return (
      <Container>
        <Alert severity="error">
          You are not authorized to view this page.
        </Alert>
      </Container>
    )
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      {error ? (
        <Alert severity="error">{error.message}</Alert>
      ) : (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Registered At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registrations.map((reg: Record<string, string>, index) => (
                <TableRow key={index}>
                  <TableCell>{reg.email}</TableCell>
                  <TableCell>{reg.message || 'N/A'}</TableCell>
                  <TableCell>
                    {new Date(reg.created_at).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  )
}

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context)

  if (!session || session.user) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
