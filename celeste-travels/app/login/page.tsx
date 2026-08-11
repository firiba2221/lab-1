'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import MuiLink from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        py: 6,
        px: 2,
        position: 'relative',
      }}
    >
      {/* Dark mode toggle */}
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <DarkModeToggle />
      </Box>
      <Container maxWidth="xs">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          }}
        >
          {/* Header with Shared Logo */}
          <Stack spacing={1.5} sx={{ alignItems: 'center', textAlign: 'center', mb: 3 }}>
            <Logo size="medium" href="/" />
            <Typography variant="h5" component="h1" sx={{ fontWeight: 700, mt: 1 }}>
              Welcome back
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sign in to manage your travel itineraries
            </Typography>
          </Stack>

          {/* Social Sign-in */}
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{ textTransform: 'none', borderColor: 'divider', color: 'text.primary' }}
            >
              Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={{ textTransform: 'none', borderColor: 'divider', color: 'text.primary' }}
            >
              GitHub
            </Button>
          </Stack>

          <Divider sx={{ mb: 3 }}>
            <Typography variant="caption" color="text.secondary">
              or sign in with email
            </Typography>
          </Divider>

          {/* Login Form */}
          <Stack component="form" spacing={2.5} noValidate>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              size="small"

            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              size="small"

            />

            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" size="small" />}
                label={<Typography variant="body2">Remember me</Typography>}
              />
              <MuiLink underline="hover" color="primary" sx={{ fontSize: '0.825rem', fontWeight: 600, cursor: 'pointer' }}>
                Forgot password?
              </MuiLink>
            </Stack>

            <Button
              component={Link}
              href="/dashboard"
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.925rem',
              }}
            >
              Sign In
            </Button>
          </Stack>

          {/* Footer */}
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Don't have an account?{' '}
              <MuiLink component={Link} href="/register" underline="hover" color="primary" sx={{ fontWeight: 600 }}>
                Sign up
              </MuiLink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
