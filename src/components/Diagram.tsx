import { Stack, Box, Typography, Paper } from '@mui/material'
import Grid from '@mui/material/Grid2'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import LockIcon from '@mui/icons-material/Lock'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import VerifiedIcon from '@mui/icons-material/Verified'

const steps = [
  {
    icon: <CameraAltIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Capture Image',
    description:
      'User takes a photo or video using mobile or USB connected camera.'
  },
  {
    icon: <GpsFixedIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Verify Location',
    description: 'Extract EXIF, GPS, and cell tower data and verify with AI'
  },
  {
    icon: <LockIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Generate C2PA Manifest',
    description:
      'Compute and securely sign cryptographic hashes of media & metadata and generate manifest'
  },
  {
    icon: <CloudUploadIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Store on Blockchain',
    description: 'Record manifest in an immutable smart contract.'
  },
  {
    icon: <VerifiedIcon sx={{ color: 'primary.main' }} fontSize="large" />,
    title: 'Verify via Clients',
    description:
      'Mobile app, browser extension, or social media clients verify authenticity in real time.'
  }
]

export default function Diagram() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        sx={{ color: 'primary.main' }}
        variant="h4"
        textAlign="center"
        gutterBottom
        padding={8}
      >
        How Counterweight Works
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Paper
              elevation={3}
              sx={{ p: 3, textAlign: 'center', height: '100%' }}
            >
              <Stack alignItems="center" spacing={2}>
                {step.icon}
                <Typography sx={{ color: 'primary.main' }} variant="h6">
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
