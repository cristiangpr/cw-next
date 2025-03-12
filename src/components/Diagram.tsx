'use client'
import { Grid, Stack, Box, Typography, Paper } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import LockIcon from '@mui/icons-material/Lock'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import VerifiedIcon from '@mui/icons-material/Verified'

const steps = [
  {
    icon: <CameraAltIcon sx={{ color: 'secondary.main' }} fontSize="large" />,
    title: 'Capture Image',
    description:
      'User takes a photo or video using mobile or USB connected camera.'
  },
  {
    icon: <GpsFixedIcon sx={{ color: 'secondary.main' }} fontSize="large" />,
    title: 'Extract Metadata',
    description: 'Extract EXIF, GPS, and cell tower data'
  },
  {
    icon: <LockIcon sx={{ color: 'secondary.main' }} fontSize="large" />,
    title: 'Generate Hashes',
    description:
      'Compute and securely sign cryptographic hashes of image & metadata.'
  },
  {
    icon: <CloudUploadIcon sx={{ color: 'secondary.main' }} fontSize="large" />,
    title: 'Store on Blockchain',
    description: 'Record hashes in an immutable smart contract.'
  },
  {
    icon: <VerifiedIcon sx={{ color: 'secondary.main' }} fontSize="large" />,
    title: 'Verify via Clients',
    description:
      'Mobile app, browser extension, or social media clients verify authenticity in real time.'
  }
]

export default function Diagram() {
  return (
    <Box sx={{ py: 4, px: 8 }}>
      <Typography
        sx={{ color: 'primary.main' }}
        variant="h4"
        textAlign="center"
        gutterBottom
        padding={4}
      >
        How Counterweight Works
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: 'center', height: '100%' }}
            >
              <Stack alignItems="center" spacing={2}>
                {step.icon}
                <Typography sx={{ color: 'secondary.main' }} variant="h6">
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
