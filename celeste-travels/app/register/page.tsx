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

export default function RegisterPage() {
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
              Create an account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join Celeste Travels for personalized trip recommendations
            </Typography>
          </Stack>

          {/* Social Sign-up */}
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
              or sign up with email
            </Typography>
          </Divider>

          {/* Register Form */}
          <Stack component="form" spacing={2.5} noValidate>
            <TextField
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              variant="outlined"
              size="small"

            />
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              autoComplete="new-password"
              variant="outlined"
              size="small"

            />

            <FormControlLabel
              control={<Checkbox value="agree" color="primary" size="small" />}
              label={
                <Typography variant="body2" color="text.secondary">
                  I agree to the{' '}
                  <MuiLink underline="hover" color="primary" sx={{ cursor: 'pointer' }}>
                    Terms of Service
                  </MuiLink>{' '}
                  and{' '}
                  <MuiLink underline="hover" color="primary" sx={{ cursor: 'pointer' }}>
                    Privacy Policy
                  </MuiLink>
                </Typography>
              }
            />

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
              Create Account
            </Button>
          </Stack>

          {/* Footer */}
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{' '}
              <MuiLink component={Link} href="/login" underline="hover" color="primary" sx={{ fontWeight: 600 }}>
                Sign in
              </MuiLink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
