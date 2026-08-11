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
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Link from '@/components/Link';

export default function RegisterPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justify: 'center',
        bgcolor: 'grey.50',
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          }}
        >
          {/* Header */}
          <Stack spacing={1.5} sx={{ alignItems: 'center', textAlign: 'center', mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
              }}
            >
              <FlightTakeoffIcon fontSize="medium" />
            </Box>
            <Typography variant="h5" component="h1" sx={{ fontWeight: 700 }}>
              Create an Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join Celeste Travels to unlock exclusive journeys
            </Typography>
          </Stack>

          {/* Social Sign-up */}
          <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              startIcon={<GoogleIcon fontSize="small" />}
              sx={{ py: 1, textTransform: 'none', borderColor: 'divider' }}
            >
              Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="inherit"
              startIcon={<GitHubIcon fontSize="small" />}
              sx={{ py: 1, textTransform: 'none', borderColor: 'divider' }}
            >
              GitHub
            </Button>
          </Stack>

          <Divider sx={{ my: 2.5, color: 'text.secondary', fontSize: '0.8rem' }}>
            OR SIGN UP WITH EMAIL
          </Divider>

          {/* Form */}
          <Stack spacing={2}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Alex Morgan"
              fullWidth
              variant="outlined"
              size="medium"
            />
            <TextField
              label="Email Address"
              type="email"
              placeholder="alex@example.com"
              fullWidth
              variant="outlined"
              size="medium"
            />
            <TextField
              label="Password"
              type="password"
              placeholder="At least 8 characters"
              fullWidth
              variant="outlined"
              size="medium"
            />
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Repeat password"
              fullWidth
              variant="outlined"
              size="medium"
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Typography variant="body2" color="text.secondary">
                  I agree to the{' '}
                  <MuiLink color="primary" underline="hover" href="#">
                    Terms of Service
                  </MuiLink>{' '}
                  and{' '}
                  <MuiLink color="primary" underline="hover" href="#">
                    Privacy Policy
                  </MuiLink>
                </Typography>
              }
            />

            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={<PersonAddIcon />}
              sx={{ py: 1.2, fontWeight: 600, textTransform: 'none', borderRadius: 2, mt: 1 }}
            >
              Create Account
            </Button>
          </Stack>

          {/* Footer */}
          <Box sx={{ mt: 3.5, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{' '}
              <MuiLink
                component={Link}
                href="/login"
                color="primary"
                underline="hover"
                sx={{ fontWeight: 600 }}
              >
                Sign in
              </MuiLink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
