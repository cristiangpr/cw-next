'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Box, BoxProps } from '@mui/material'

interface FadeInSectionProps extends BoxProps {
  children: React.ReactNode
  delay?: number
}

export function FadeInSection({
  children,
  delay = 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...boxProps
}: FadeInSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Box ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 50
        }}
        transition={{
          duration: 0.6,
          delay: delay
        }}
      >
        {children}
      </motion.div>
    </Box>
  )
}
