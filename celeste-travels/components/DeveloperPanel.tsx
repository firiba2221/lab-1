'use client';

import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MuiLink from '@mui/material/Link';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@/components/Link';
import { platformData } from '@/data/platform';

// fallow-ignore-next-line complexity
export default function DeveloperPanel() {
  const showPanelEnv = process.env.NEXT_PUBLIC_SHOW_DEV_PANEL === 'true';
  const [open, setOpen] = useState(false);

  // Position state for draggable floating button (x, y coordinates from top-left)
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{ startX: number; startY: number; posX: number; posY: number }>({
    startX: 0,
    startY: 0,
    posX: 0,
    posY: 0,
  });

  if (!showPanelEnv) {
    return null;
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    // Only drag on primary pointer button
    if (e.button !== 0) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const currentPosX = position ? position.x : rect.left;
    const currentPosY = position ? position.y : rect.top;

    dragStartRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: currentPosX,
      posY: currentPosY,
    };

    isDraggingRef.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;

    const deltaX = e.clientX - dragStartRef.current.startX;
    const deltaY = e.clientY - dragStartRef.current.startY;

    // If moved more than 4px, treat as drag
    if (Math.hypot(deltaX, deltaY) > 4) {
      isDraggingRef.current = true;
    }

    if (isDraggingRef.current) {
      const buttonSize = 40; // compact Fab size
      const maxLeft = window.innerWidth - buttonSize - 12;
      const maxTop = window.innerHeight - buttonSize - 12;

      const newX = Math.min(Math.max(12, dragStartRef.current.posX + deltaX), maxLeft);
      const newY = Math.min(Math.max(12, dragStartRef.current.posY + deltaY), maxTop);

      setPosition({ x: newX, y: newY });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    // If not dragged, open panel
    if (!isDraggingRef.current) {
      setOpen(true);
    }
    isDraggingRef.current = false;
  };

  const handleClose = () => setOpen(false);

  // Position styles: custom coordinates when dragged, default bottom-right fixed when untouched
  const fabPositionStyle = position
    ? {
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        bottom: 'auto',
        right: 'auto',
      }
    : {
        position: 'fixed',
        bottom: 24,
        right: 24,
      };

  return (
    <>
      {/* Draggable Small Floating Developer Panel Button */}
      <Tooltip title="Developer Panel (Drag to move)" placement="left">
        <Fab
          color="primary"
          aria-label="open developer panel"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          size="small"
          sx={{
            ...fabPositionStyle,
            zIndex: 1200,
            touchAction: 'none',
            cursor: 'grab',
            '&:active': { cursor: 'grabbing' },
            boxShadow: '0 6px 20px rgba(37, 99, 235, 0.35)',
            width: 40,
            height: 40,
            minHeight: 40,
          }}
        >
          <CodeIcon fontSize="small" />
        </Fab>
      </Tooltip>

      {/* Developer Drawer Panel */}
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: { xs: 320, sm: 380 },
              p: 3,
              bgcolor: 'background.paper',
            },
          },
        }}
      >
        {/* Drawer Header */}
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <CodeIcon color="primary" />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Developer Panel
            </Typography>
          </Stack>
          <IconButton size="small" onClick={handleClose} aria-label="close developer panel">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Stack spacing={2.5}>
          {/* Environment Status Badge */}
          <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, display: 'block', mb: 1 }}>
              ENVIRONMENT STATUS
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              <Chip
                label={`ENV: ${process.env.NODE_ENV ?? 'development'}`}
                size="small"
                color="primary"
                variant="outlined"
              />
              <Chip
                label="DEV_PANEL: ACTIVE"
                size="small"
                color="success"
              />
            </Stack>
          </Box>

          <Divider />

          {/* Platform Info */}
          <Box spacing={1.5} component={Stack}>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
              PLATFORM DETAILS
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Version:
              </Typography>
              <Chip label={platformData.version} size="small" color="primary" />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Developer:
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {platformData.developer}
              </Typography>
            </Box>

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
          </Box>

          <Divider />

          {/* Quick Route Shortcuts */}
          <Box spacing={1.5} component={Stack}>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
              QUICK NAVIGATION SHORTCUTS
            </Typography>

            <Stack spacing={1}>
              <Button
                component={Link}
                href="/"
                onClick={handleClose}
                variant="outlined"
                startIcon={<HomeIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                Home Page (/)
              </Button>
              <Button
                component={Link}
                href="/login"
                onClick={handleClose}
                variant="outlined"
                startIcon={<LoginIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                Login Page (/login)
              </Button>
              <Button
                component={Link}
                href="/register"
                onClick={handleClose}
                variant="outlined"
                startIcon={<PersonAddIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                Register Page (/register)
              </Button>
              <Button
                component={Link}
                href="/dashboard"
                onClick={handleClose}
                variant="contained"
                startIcon={<DashboardIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start' }}
              >
                Dashboard (/dashboard)
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </>
  );
}
