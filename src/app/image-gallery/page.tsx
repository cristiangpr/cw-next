import { Box, Container } from '@mui/material'
import Image from 'next/image'
import Grid from '@mui/material/Grid2'

async function getImageUrls() {
  const response = await fetch(
    'https://www.counterweight-app.com//api/image-urls',
    {
      cache: 'no-store'
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch image URLs')
  }

  return response.json()
}

export default async function ImageGallery() {
  const urls = await getImageUrls()

  return (
    <Box flexGrow={1}>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          {urls &&
            urls.map((url: string, index: number) => (
              <Grid
                container
                justifyContent="center"
                key={url}
                size={5}
                zIndex={10}
                paddingY={5}
              >
                <Image
                  unoptimized={true}
                  height={0}
                  width={0}
                  key={index}
                  src={url}
                  alt={`image-${index}`}
                  style={{ width: '75%', height: 'auto' }}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}
