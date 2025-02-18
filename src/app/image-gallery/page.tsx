'use client'
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'

const ImageGallery = () => {
  const [urls, setUrls] = useState<string[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImageUrls = async () => {
      const response = await fetch('/api/image-urls')
      const data = await response.json()
      console.log(data)
      setUrls(data)
      setLoading(false)
    }
    fetchImageUrls()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <Box flexGrow={1}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2} justifyContent={'center'}>
          {urls &&
            urls.map((url, index) => (
              <Grid container justifyContent={'center'} key={url} size={5}>
                <Image
                  unoptimized={true}
                  height={400}
                  width={250}
                  key={index}
                  src={url}
                  alt={`image-${index}`}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ImageGallery
