'use client'

import { useState } from 'react'
import { Button } from '@mui/material'
import { DemoModal } from './DemoModal'

type TriggerProps = {
  label: string
}

export default function ModalTrigger({ label }: TriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant="contained"
        sx={{ minWidth: '200', backgroundColor: 'secondary.main' }}
        onClick={() => setIsOpen(true)}
      >
        {label}
      </Button>

      <DemoModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
