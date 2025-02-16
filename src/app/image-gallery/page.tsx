'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ImageGallery = () => {
  const [urls, setUrls] = useState([])
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
    <div>
      {urls &&
        urls.map((url, index) => (
          <Image
            unoptimized={true}
            height={500}
            width={500}
            key={index}
            src={url}
            alt={`image-${index}`}
          />
        ))}
    </div>
  )
}

export default ImageGallery
