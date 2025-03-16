import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Image from 'next/image'
import { FadeInSection } from '@/components/FadeInSection'

import Diagram from '@/components/Diagram'
import FAQ from '@/components/FAQ'
import Trigger from '@/components/Trigger'

const features = [
  {
    title: 'Balance Generative AI',
    description:
      'In an age where digital content is easily manipulated, trust and authenticity are paramount. By implementing th C2PA (Coalition for Content Provenance and Authenticity) standard and combining GPS, cell tower data and AI geolocation, our solution guarantees that every piece of media is securely tracked and its integrity verified. Join us in revolutionizing the way digital media is safeguarded.',
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
  return (
    <Box sx={{ flex: 1, backgroundColor: 'background.default' }}>
      {/* Hero Section */}
      <Container
        sx={{
          paddingY: 8,
          paddingX: 0,
          backgroundColor: 'background.default'
        }}
        maxWidth="lg"
      >
        <FadeInSection>
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              flexDirection: { sm: 'column-reverse', md: 'row' }
            }}
          >
            <Grid
              size={{ xs: 12, md: 6 }}
              paddingTop={{ xs: 0 }}
              sx={{
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              <Typography variant="h4" gutterBottom color="textPrimary">
                Immutable provenance certification for digital media.
              </Typography>
              <Trigger label="Request a Demo" />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Image
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                src="/icon.png"
                alt="Product Hero"
                width={600}
                height={400}
              />
            </Grid>
          </Grid>
        </FadeInSection>

        {/* Feature Sections */}
        {features.map((feature, index) => (
          <FadeInSection key={feature.title} delay={(index + 1) * 0.2}>
            <Grid
              container
              spacing={4}
              sx={{
                flexDirection: {
                  sm: 'column-reverse',
                  md: index % 2 === 0 ? 'row-reverse' : 'row'
                },
                alignItems: 'center'
              }}
            >
              <Grid
                size={{ xs: 12, md: 6 }}
                sx={{
                  textAlign: { xs: 'center', md: 'left' }
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
                <Box
                  sx={{
                    ml: {
                      xs: 0,
                      lg: index === 0 ? '-120px' : index === 2 ? '-100px' : 0
                    }
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={600}
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </FadeInSection>
        ))}
        <FadeInSection>
          <Diagram />
        </FadeInSection>
        <FadeInSection>
          <FAQ />
        </FadeInSection>

        <Grid container alignItems="center" spacing={4}>
          <Grid
            size={12}
            sx={{
              textAlign: 'center'
            }}
          >
            {' '}
            <Trigger label="Request a Demo" />
          </Grid>
        </Grid>
      </Container>

      {/* Early Access Modal */}
    </Box>
  )
}
