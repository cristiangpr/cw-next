'use client'
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  palette: {
    secondary: { main: '#004add' },
    primary: { main: '#4F8BB2' },
    background: { default: '#151f28', paper: '#2E3840' },
    text: { primary: '#ECEDEE' }
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
