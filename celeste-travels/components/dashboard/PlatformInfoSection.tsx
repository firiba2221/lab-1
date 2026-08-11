'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import Logo from '@/components/Logo';
import { platformData, PlatformUpdate } from '@/data/platform';

// fallow-ignore-next-line complexity
function UpdateCard({ update }: { update: PlatformUpdate }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        borderRadius: 2,
      }}
    >
      <Stack spacing={2}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
            <Chip
              label={update.version}
              color="primary"
              size="small"
              sx={{ fontWeight: 700 }}
            />
            <Chip
              label={update.tag.toUpperCase()}
              color="success"
              variant="outlined"
              size="small"
              sx={{ fontSize: '0.7rem', fontWeight: 600 }}
            />
          </Stack>
          <Typography variant="caption" color="text.secondary">
            Released: {update.date}
          </Typography>
        </Stack>

        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary' }}>
          {update.title}
        </Typography>

        <Stack spacing={1}>
          {update.changes.map((change, idx) => (
            <Stack key={idx} direction="row" spacing={1.25} sx={{ alignItems: 'flex-start' }}>
              <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 16, mt: 0.3, flexShrink: 0 }} />
              <Typography variant="body2" color="text.secondary">
                {change}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}

// fallow-ignore-next-line complexity
export default function PlatformInfoSection() {
  return (
    <Stack spacing={3}>
      {/* Platform Banner / Summary Header */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Grid container spacing={3} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                <Logo size="medium" />
                <Chip
                  label={`Platform ${platformData.version}`}
                  color="primary"
                  size="small"
                  sx={{ fontWeight: 700 }}
                />
              </Stack>

              <Typography variant="body1" color="text.secondary">
                {platformData.description}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={0}
              sx={{
                p: 2.5,
                bgcolor: 'action.hover',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
              }}
            >
              <Stack spacing={1.5}>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: '0.05em' }}>
                  PLATFORM SPECIFICATIONS
                </Typography>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Company:
                  </Typography>
                  <MuiLink
                    href={platformData.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {platformData.companyName}
                    <LaunchIcon sx={{ fontSize: 14 }} />
                  </MuiLink>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Developer:
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {platformData.developer}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Platform Update Catalog / Changelog */}
      <Box>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
          <SystemUpdateAltIcon color="primary" />
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Platform Update Catalog
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {platformData.updates.map((update) => (
            <UpdateCard key={update.version} update={update} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
