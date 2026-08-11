'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@/components/Link';

interface UserProfileProps {
  collapsed?: boolean;
}

const USER_NAME = 'Riley Carter';
const USER_EMAIL = 'riley@email.com';
const USER_INITIALS = 'RC';

export default function UserProfile({ collapsed = false }: UserProfileProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const avatarNode = (
    <Avatar
      alt={USER_NAME}
      sx={{
        width: 36,
        height: 36,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.04em',
        flexShrink: 0,
      }}
    >
      {USER_INITIALS}
    </Avatar>
  );

  return (
    <Box>
      {collapsed ? (
        /* Collapsed: centered initials avatar */
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip title={`${USER_NAME} — ${USER_EMAIL}`} placement="right" arrow>
            <IconButton onClick={handleClick} size="small" sx={{ p: 0 }}>
              {avatarNode}
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        /* Expanded: initials avatar + name/email + options button */
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', minWidth: 0 }}>
            {avatarNode}
            <Box sx={{ minWidth: 0 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 600,
                  fontSize: '0.825rem',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {USER_NAME}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontSize: '0.725rem',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'block',
                }}
              >
                {USER_EMAIL}
              </Typography>
            </Box>
          </Stack>
          <IconButton size="small" aria-label="user options" onClick={handleClick} sx={{ flexShrink: 0 }}>
            <MoreVertIcon fontSize="small" color="action" />
          </IconButton>
        </Stack>
      )}

      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: collapsed ? 'left' : 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              width: 170,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              mt: -1,
            },
          },
        }}
      >
        <MenuItem onClick={handleClose} component={Link} href="/dashboard/settings">
          <ListItemIcon>
            <PersonOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            View Profile
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/login">
          <ListItemIcon>
            <LogoutIcon fontSize="small" color="error" />
          </ListItemIcon>
          <Typography variant="body2" color="error" sx={{ fontWeight: 500 }}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
