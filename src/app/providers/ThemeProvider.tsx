'use client'
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
    primary: { main: '#004add' },
    secondary: { main: '#38b6ff' },
    background: { default: '#151f28', paper: '#151f28' },
    text: { primary: '#ECEDEE' }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif'
  }
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MaterialThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  )
}
