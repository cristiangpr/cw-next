/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Alert,
  Button
} from '@mui/material'

import { redirect } from 'next/navigation'
import { deleteUrls } from '../actions'

export default function AdminDashboard() {
  const { data: session } = useSession()
  const [registrations, setRegistrations] = useState<Record<string, any>[]>([])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (session?.user.token) {
      console.log('session', session)
      const fetchData = async () => {
        try {
          const res = await fetch('/api/early-access', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${session?.user.token}`
            }
          })
          const response = JSON.parse(await res.json())

          setRegistrations(response)
        } catch (error: any) {
          setError(error)
        }
      }
      fetchData()
      console.log(registrations)
    }
  }, [])

  if (!session) {
    redirect('api/auth/signin')
  }
  const handleDelete = async () => {
    await deleteUrls()
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      {error ? (
        <Alert severity="error">{error?.message}</Alert>
      ) : registrations.length > 0 ? (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registrations.map((reg, index) => (
                <TableRow key={index}>
                  <TableCell>{reg.email}</TableCell>
                  <TableCell>{reg.message || 'N/A'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        <Typography>No registrations found</Typography>
      )}
      <Button onClick={handleDelete}>Delete image ulrs</Button>
    </Container>
  )
}
