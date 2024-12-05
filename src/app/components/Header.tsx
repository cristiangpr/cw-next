import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Grid2 } from '@mui/material'

export default function Header() {
  return (
    <Box>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Grid2 container direction={'row'} sx={{ marginLeft: '130px' }}>
            <Grid2>
              <Image
                src="/icon.png"
                alt="Product Hero"
                width={120}
                height={120}
              />
            </Grid2>
            <Grid2 sx={{ alignItems: 'center', justifyContent: 'center' }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  font: 'gemini',
                  fontWeight: '500px',
                  color: 'primary.main',
                  marginTop: '30px'
                }}
              >
                COUNTERWEIGHT
              </Typography>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
