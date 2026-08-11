'use client';
import { createTheme } from '@mui/material/styles';

const FONT_ROBOTO = 'Roboto, var(--font-geist-sans), sans-serif';

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
          default: '#0A0A0A',
          paper: '#141414',
        },
        divider: '#262626',
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
        },
        action: {
          hover: 'rgba(255, 255, 255, 0.05)',
          selected: 'rgba(255, 255, 255, 0.09)',
        },
      },
    },
  },
  typography: {
    fontFamily: FONT_ROBOTO,
    h1: { fontFamily: FONT_ROBOTO },
    h2: { fontFamily: FONT_ROBOTO },
    h3: { fontFamily: FONT_ROBOTO },
    h4: { fontFamily: FONT_ROBOTO },
    h5: { fontFamily: FONT_ROBOTO },
    h6: { fontFamily: FONT_ROBOTO },
    subtitle1: { fontFamily: FONT_ROBOTO },
    subtitle2: { fontFamily: FONT_ROBOTO },
    body1: { fontFamily: FONT_ROBOTO },
    body2: { fontFamily: FONT_ROBOTO },
    button: { fontFamily: FONT_ROBOTO },
    caption: { fontFamily: FONT_ROBOTO },
    overline: { fontFamily: FONT_ROBOTO },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
