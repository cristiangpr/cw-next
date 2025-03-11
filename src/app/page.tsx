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
  Modal,
  useMediaQuery
} from '@mui/material'
import Image from 'next/image'
import { FadeInSection } from '@/components/FadeInSection'
import { create } from './actions'
import { styled, useTheme } from '@mui/material/styles'

const features = [
  {
    title: 'Balance Generative AI',
    description:
      'In an age where digital content is easily manipulated, trust and authenticity are paramount. By cryptographically ahshing and signing file data at the moment of capture and using all avaliable geolocation techniques, our solution guarantees that every piece of media is securely tracked and its integrity verified. Join us in revolutionizing the way digital media is safeguarded.',
    image: '/GAI.png'
  },
  {
    title: 'Fight Misinformation',
    description:
      'Trust in media is at an all-time low, journalists face significant challenges in proving the authenticity of their sources. By storing cryptographic hashes in on-chain smart contracts, Counterweight ensures that every piece of digital media is publicaly verifiable, safeguarding its integrity from creation to publication. With this technology, journalists can confidently defend their work against misinformation and bolster their credibility. ',
    image: '/journo.png'
  },
  {
    title: 'Prevent Fraud',
    description:
      'Digital media fraud is a growing concern for insurance companies, leading to significant losses and trust issues. Our DLT-based chain of custody solution provides an unalterable record of digital assets, ensuring authenticity and transparency throughout the entire lifecycle. By adopting our system, insurers can dramatically reduce fraud risks and enhance client confidence',
    image: '/insurance.png'
  },
  {
    title: 'Certify Evidence',
    description:
      'Law enforcement agencies face significant challenges in ensuring the integrity of digital evidence, often risking tampering and chain of custody issues. Counterweight provides an immutable record that guarantees the authenticity and traceability of digital media from collection to courtroom. By implementing our system, agencies can enhance their investigative processes and bolster the credibility of their cases',
    image: '/popo.png'
  }
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const handleCreate = async (data: FormData) => {
    const response = await create(data)
    if (response) setSuccess(true)
  }
  const handleClose = () => {
    setOpen(false)
    setSuccess(false)
  }

  return (
    <StyledBox>
      {/* Hero Section */}

      <FadeInSection>
        <StyledContainer maxWidth="lg">
          <StyledHeroGrid
            container
            spacing={4}
            alignItems="center"
            sx={{
              [theme.breakpoints.down('md')]: {
                flexDirection: 'column-reverse'
              }
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                [theme.breakpoints.down('md')]: {
                  textAlign: 'center'
                }
              }}
            >
              <Typography variant="h4" gutterBottom color="textPrimary">
                A revolutionary chain of provenance solution for digital media
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
              <StyledImage
                src="/icon.png"
                alt="Product Hero"
                width={600}
                height={400}
              />
            </Grid>
          </StyledHeroGrid>
        </StyledContainer>
      </FadeInSection>

      {/* Feature Sections */}
      {features.map((feature, index) => (
        <FadeInSection key={feature.title} delay={(index + 1) * 0.2}>
          <StyledContainer maxWidth="lg">
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction={index % 2 === 0 ? 'row-reverse' : 'row'}
              sx={{
                [theme.breakpoints.down('sm')]: {
                  flexDirection: 'column-reverse'
                }
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  [theme.breakpoints.down('md')]: {
                    textAlign: 'center'
                  }
                }}
              >
                <Typography variant="h4" gutterBottom color="textPrimary">
                  {feature.title}
                </Typography>
                <Typography variant="body1" paragraph color="textPrimary">
                  {feature.description}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledImage
                  src={feature.image}
                  alt={feature.title}
                  width={800}
                  height={600}
                  sx={{
                    [theme.breakpoints.up('md')]: {
                      marginLeft:
                        index === 0 || index === 2
                          ? '-100px'
                          : index === 1
                          ? '-40px'
                          : ''
                    }
                  }}
                />
              </Grid>
            </Grid>
          </StyledContainer>
        </FadeInSection>
      ))}

      <StyledContainer maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center',
              aspectRatio: '16 / 9'
            }}
          >
            <Typography variant="h4" gutterBottom color="textPrimary">
              Counterweight in action
            </Typography>
            <iframe
              width={isSmall ? '80%' : '50%'}
              height={isSmall ? '80%' : '50%'}
              src="https://www.youtube.com/embed/k_HB0IM7Scc?si=4joRITxxc-sl7vR5"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: 'center'
            }}
          >
            {' '}
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setOpen(true)}
            >
              Get Early Access
            </Button>
          </Grid>
        </Grid>
      </StyledContainer>

      {/* Early Access Modal */}
      <StyledModal open={open} onClose={() => handleClose()}>
        <StyledModalContent>
          {success ? (
            <Typography gutterBottom align="center" color="textPrimary">
              Registration Succesful!
            </Typography>
          ) : (
            <Typography gutterBottom align="center" color="textPrimary">
              Enter your email and write a short message about your interest in
              Counterweight
            </Typography>
          )}
          <form action={handleCreate}>
            <StyledTextField
              fullWidth
              label="Email Address"
              variant="outlined"
              type="email"
              required
              name="email"
            />
            <StyledTextField
              fullWidth
              label="Message"
              variant="outlined"
              type="text"
              required
              name="message"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </form>
        </StyledModalContent>
      </StyledModal>
    </StyledBox>
  )
}
const StyledBox = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.default
}))
const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default
}))

const StyledHeroGrid = styled(Grid)(({ theme }) => ({
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    height: 'auto'
  }
}))

const StyledImage = styled(Image)({
  width: '100%',
  height: 'auto'
})

const StyledModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  width: '90%',
  maxWidth: 400
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main
    },
    '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    }
  },
  '& .MuiInputLabel-outlined': {
    color: theme.palette.secondary.main
  }
}))
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
