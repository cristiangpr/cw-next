import * as React from 'react'

import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'

import { Grid2 } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Grid2
        container
        direction={'row'}
        sx={{ marginLeft: '130px' }}
        height={200}
      >
        <Grid2 sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              font: 'gemini',
              fontWeight: '500px',
              color: 'text.primary',
              marginTop: '50px',
              padding: '20px'
            }}
          >
            COUNTERWEIGHT
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  )
}
