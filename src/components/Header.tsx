import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Container } from '@mui/material'

export default function Header() {
  return (
    <Box>
      <Container maxWidth="lg">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar disableGutters>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent={{ xs: 'center', sm: 'left' }}
              width="100%" // Ensure it takes full width
            >
              {/* Icon */}
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Image
                  src="/icon.png"
                  alt="Product Hero"
                  width={130}
                  height={130}
                  priority
                />
              </Box>

              {/* Title */}
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
                    paddingBottom: { xs: 0, sm: 2 },
                    paddingTop: { xs: 4, sm: 0 }
                  }}
                >
                  COUNTERWEIGHT
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  )
}
