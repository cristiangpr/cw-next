import { Stack, Box, Typography, Paper } from '@mui/material'
import Grid from '@mui/material/Grid2'

const steps = [
  {
    title: 'Who is Counterweight for?',
    description:
      'The mobile app is designed to be used by professional photographers, news agencies, content creators, insurance adjusters and customers, and law enforcement officers and  to certify images and video. The browser extension and social media plugins are meant to ne used by interested parties and the general public to verify them.'
  },
  {
    title: 'How does it guarantee authenticity?',
    description:
      'By implementing robust cryptographic methods to ensure that media can only be certified through a physical camera and by verifying location at time of capture.'
  },
  {
    title: 'Why is blockchain necessary?',
    description:
      'Blockchain or decentralized ledger technology is necessary to ensure immutability and transparency, guaranteeing that records are verifiable and trustable by anyone.'
  }
]

export default function FAQ() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        sx={{ color: 'primary.main' }}
        variant="h4"
        align="center"
        gutterBottom
        padding={8}
      >
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {steps.map((step, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: 'center',
                height: '100%'
              }}
            >
              <Stack alignItems="center" spacing={2}>
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
