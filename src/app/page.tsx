// app/page.tsx
'use client'
import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  Modal
} from '@mui/material'
import Image from 'next/image'
import { FadeInSection } from './components/FadeInSection'
import Header from './components/Header'
import Footer from './components/Footer'

const features = [
  {
    title: 'Balance Generative AI',
    description: 'Transform your workflow with cutting-edge technology.',
    image: '/GAI.png'
  },
  {
    title: 'Fight Misinformation',
    description: 'Easily connect with existing tools and systems.',
    image: '/journo.png'
  },
  {
    title: 'Prevent Fraud',
    description: 'Grow without limits, powered by robust infrastructure.',
    image: '/insurance.png'
  },
  {
    title: 'Certify Evidence',
    description: 'Grow without limits, powered by robust infrastructure.',
    image: '/popo.png'
  }
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        // Handle successful registration
        alert('Thank you for signing up!')
        setOpen(false)
      } else {
        // Handle error
        alert('Registration failed. Please try again.')
      }
    } catch (error) {
      console.error('Registration error:', error)
      alert('An unexpected error occurred')
    }
  }

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      {/* Hero Section */}
      <Header />
      <FadeInSection>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4} alignItems="center" height={600}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom color="text.primary">
                A revolutionary chain of custody solution for digital media
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => setOpen(true)}
              >
                Get Early Access
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="/icon.png"
                alt="Product Hero"
                width={600}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </FadeInSection>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <FadeInSection key={feature.title} delay={(index + 1) * 0.2}>
          <Container
            key={feature.title}
            maxWidth="lg"
            sx={{
              py: 8,
              backgroundColor: 'background.default'
            }}
          >
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction={index % 2 === 0 ? 'row-reverse' : 'row'}
              height={400}
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom color="text.primary">
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.primary" paragraph>
                  {feature.description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={600}
                  style={{
                    width: '100%',
                    height: 'auto',
                    marginLeft:
                      index === 0 || index === 2
                        ? '-100px'
                        : index === 1
                        ? '-40px'
                        : ''
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </FadeInSection>
      ))}

      {/* Early Access Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.paper',
            p: 4,
            borderRadius: 2,
            width: '90%',
            maxWidth: 400
          }}
        >
          <Typography variant="h5" color="text.primary" gutterBottom>
            Get Early Access
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </form>
        </Box>
      </Modal>
      <Footer />
    </Box>
  )
}
