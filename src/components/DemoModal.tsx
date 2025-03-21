'use client'
import { styled } from '@mui/material/styles'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { Verified } from '@mui/icons-material'
import { create } from '@/app/actions'
import { useState } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
}

export const DemoModal = ({ open, onClose }: ModalProps) => {
  const [success, setSuccess] = useState<boolean>(false)
  const handleCreate = async (data: FormData) => {
    const response = await create(data)
    if (response) setSuccess(true)
  }
  const handleClose = () => {
    onClose()
    setSuccess(false)
  }
  return (
    <StyledModal open={open} onClose={handleClose}>
      <StyledModalContent>
        {success ? (
          <>
            <Box display="flex" justifyContent="center" width="100%" mb={1}>
              <Verified fontSize="large" sx={{ color: 'primary.main' }} />
            </Box>
            <Typography gutterBottom align="center" color="primary.main">
              Registration Successful!
            </Typography>
          </>
        ) : (
          <Typography gutterBottom align="center" color="textPrimary">
            Enter your email and write a short message about your interest in
            Counterweight
          </Typography>
        )}
        <form action={handleCreate}>
          <StyledTextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
            required
            name="email"
          />
          <StyledTextField
            fullWidth
            label="Message"
            variant="outlined"
            type="text"
            required
            name="message"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </StyledModalContent>
    </StyledModal>
  )
}

const StyledModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  width: '90%',
  maxWidth: 400
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main
    },
    '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main
    }
  },
  '& .MuiInputLabel-outlined': {
    color: theme.palette.primary.main
  }
}))
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
