'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';

interface DarkModeToggleProps {
  size?: 'small' | 'medium' | 'large';
}

// fallow-ignore-next-line complexity
export default function DarkModeToggle({ size = 'small' }: DarkModeToggleProps) {
  const { mode, setMode } = useColorScheme();

  // Not yet hydrated — render nothing to avoid mismatch
  if (!mode) return null;

  const isDark = mode === 'dark';

  const handleToggle = () => {
    setMode(isDark ? 'light' : 'dark');
  };

  return (
    <Tooltip title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        aria-label={isDark ? 'switch to light mode' : 'switch to dark mode'}
        onClick={handleToggle}
        size={size}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          p: 0.9,
          color: 'text.secondary',
          bgcolor: 'background.paper',
          '&:hover': {
            color: 'text.primary',
            bgcolor: 'action.hover',
          },
        }}
      >
        {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
