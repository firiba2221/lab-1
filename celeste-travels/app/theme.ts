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
        action: {
          hover: 'rgba(255,255,255,0.06)',
          selected: 'rgba(255,255,255,0.10)',
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), Roboto, sans-serif',
  },
  // Set global border radius to 4px — no pill/rounded shapes
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
        contained: {
          borderRadius: 4,
        },
        outlined: {
          borderRadius: 4,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: 6,
        },
      },
    },
  },
});

export default theme;
