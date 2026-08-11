'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2563EB',
        },
        background: {
          default: '#F8FAFC',
          paper: '#FFFFFF',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#3B82F6',
        },
        background: {
          default: '#0F172A',
          paper: '#1E293B',
        },
        divider: 'rgba(255,255,255,0.08)',
        text: {
          primary: '#F1F5F9',
          secondary: '#94A3B8',
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Roboto, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
