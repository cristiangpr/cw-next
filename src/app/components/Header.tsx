import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Container, Grid2 } from '@mui/material'

export default function Header() {
  return (
    <Box>
      <Container maxWidth="lg">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar disableGutters>
            <Grid2
              container
              alignItems="center"
              justifyContent="center"
              marginLeft={{ xs: 1, md: '-25px' }}
              paddingTop={{ xs: 1, sm: 0 }}
            >
              {/* Icon */}
              <Grid2 sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Image
                  src="/icon.png"
                  alt="Product Hero"
                  width={120}
                  height={120}
                  priority
                />
              </Grid2>

              {/* Title */}
              <Grid2>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 500,
                    color: 'primary.main',

                    paddingBottom: 2
                  }}
                >
                  COUNTERWEIGHT
                </Typography>
              </Grid2>
            </Grid2>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  )
}
