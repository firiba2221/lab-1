'use client';

import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface ContentPanelProps {
  title: string;
  description: string;
}

export default function ContentPanel({ title, description }: ContentPanelProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 6,
        border: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: 320, sm: 440 },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 460 }}>
        {description}
      </Typography>
    </Paper>
  );
}
