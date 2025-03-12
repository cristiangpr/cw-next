// app/page.tsx
'use client'
import React, { useState } from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Image from 'next/image'
import { FadeInSection } from '@/components/FadeInSection'

import { styled, useTheme } from '@mui/material/styles'
import { DemoModal } from '@/components/DemoModal'
import Diagram from '@/components/Diagram'
import FAQ from '@/components/FAQ'

const features = [
  {
    title: 'Balance Generative AI',
    description:
      'In an age where digital content is easily manipulated, trust and authenticity are paramount. By cryptographically hashing and signing file data at the moment of capture and using all available geolocation techniques, our solution guarantees that every piece of media is securely tracked and its integrity verified. Join us in revolutionizing the way digital media is safeguarded.',
    image: '/GAI.png'
  },
  {
    title: 'Fight Misinformation',
    description:
      'Trust in media is at an all-time low, journalists face significant challenges in proving the authenticity of their sources. By storing cryptographic hashes in on-chain smart contracts, Counterweight ensures that every piece of digital media is publicly verifiable, safeguarding its integrity from creation to publication. With this technology, journalists can confidently defend their work against misinformation and bolster their credibility. ',
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

  const theme = useTheme()

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
              size={{ xs: 12, md: 6 }}
              paddingTop={{ xs: 0 }}
              sx={{
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              <Typography variant="h4" gutterBottom color="textPrimary">
                A chain of provenance solution for digital media
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => setOpen(true)}
              >
                Request a Demo
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
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
                size={{ xs: 12, md: 6 }}
                sx={{
                  [theme.breakpoints.down('md')]: {
                    textAlign: 'center'
                  }
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ color: 'primary.main' }}
                  px={1}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  component={'p'}
                  color="textPrimary"
                  px={1}
                >
                  {feature.description}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
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
      <FadeInSection>
        <Diagram />
      </FadeInSection>
      <FadeInSection>
        <FAQ />
      </FadeInSection>

      <StyledContainer maxWidth="lg">
        <Grid container alignItems="center" spacing={4}>
          <Grid
            size={12}
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
              Request a Demo
            </Button>
          </Grid>
        </Grid>
      </StyledContainer>

      {/* Early Access Modal */}
      <DemoModal open={open} handleClose={() => setOpen(false)} />
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
