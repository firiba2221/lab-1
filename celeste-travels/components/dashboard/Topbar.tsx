'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Link from '@/components/Link';
import { usePathname } from 'next/navigation';

const PAGE_TITLES: Record<string, string> = {
  '/dashboard': 'Home',
  '/dashboard/page-01': 'Page 01',
  '/dashboard/page-02': 'Page 02',
  '/dashboard/page-03': 'Page 03',
  '/dashboard/settings': 'Settings',
};

const mockNotifications = [
  {
    id: 1,
    icon: <FlightTakeoffIcon fontSize="small" />,
    title: 'Flight BK-9021 Confirmed',
    subtitle: 'Your flight to Tokyo, Japan has been booked.',
    time: '10m ago',
    unread: true,
    color: 'primary.main',
    bgColor: 'primary.50',
  },
  {
    id: 2,
    icon: <HotelIcon fontSize="small" />,
    title: 'Hotel Reservation Updated',
    subtitle: 'Grand Hotel Paris updated your check-in time.',
    time: '2h ago',
    unread: true,
    color: 'warning.main',
    bgColor: 'warning.50',
  },
  {
    id: 3,
    icon: <LocalOfferIcon fontSize="small" />,
    title: '20% Discount Available',
    subtitle: 'Exclusive deal on round trips to Reykjavik.',
    time: '1d ago',
    unread: false,
    color: 'success.main',
    bgColor: 'success.50',
  },
];

interface NotificationPopoverProps {
  id?: string;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  onClose: () => void;
  unreadCount: number;
  onMarkAllRead: () => void;
}

function NotificationPopover({
  id,
  open,
  anchorEl,
  onClose,
  unreadCount,
  onMarkAllRead,
}: NotificationPopoverProps) {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            width: 340,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
            mt: 1.5,
            overflow: 'hidden',
          },
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          px: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid',
          borderColor: 'divider',
          gap: 2,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary' }}>
          Notifications
        </Typography>
        {unreadCount > 0 && (
          <Button
            size="small"
            onClick={onMarkAllRead}
            sx={{ textTransform: 'none', fontSize: '0.75rem', fontWeight: 600, p: 0, minWidth: 'auto' }}
          >
            Mark all read
          </Button>
        )}
      </Box>

      <List disablePadding>
        {mockNotifications.map((notif, idx) => (
          <ListItem
            key={notif.id}
            sx={{
              px: 2.5,
              py: 1.5,
              borderBottom: idx < mockNotifications.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
              bgcolor: notif.unread && unreadCount > 0 ? 'action.hover' : 'transparent',
              '&:hover': { bgcolor: 'action.selected' },
              cursor: 'pointer',
            }}
          >
            <ListItemAvatar sx={{ minWidth: 44 }}>
              <Avatar sx={{ width: 34, height: 34, bgcolor: notif.bgColor, color: notif.color }}>
                {notif.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.825rem' }}>
                    {notif.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                    {notif.time}
                  </Typography>
                </Stack>
              }
              secondary={
                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem', display: 'block', mt: 0.25 }}>
                  {notif.subtitle}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Popover>
  );
}

interface TopbarProps {
  onOpenMobile?: () => void;
  /** Desktop: sidebar collapsed state — drives the toggle icon direction */
  sidebarCollapsed?: boolean;
  /** Desktop: callback to toggle sidebar collapse */
  onToggleSidebar?: () => void;
}

// fallow-ignore-next-line complexity
export default function Topbar({ onOpenMobile, sidebarCollapsed = false, onToggleSidebar }: TopbarProps) {
  const pathname = usePathname();
  const pageTitle = PAGE_TITLES[pathname] ?? 'Home';

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [unreadCount, setUnreadCount] = useState(2);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMarkAllRead = () => {
    setUnreadCount(0);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notification-popover' : undefined;

  return (
    <Box
      component="header"
      sx={{
        height: 64,
        px: { xs: 2, sm: 3 },
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
      }}
    >
      <Stack direction="row" sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Left side: collapse toggle (desktop) | hamburger (mobile) | breadcrumbs */}
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>

          {/* Desktop sidebar collapse/expand button — now lives in topbar */}
          {onToggleSidebar && (
            <Tooltip title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
              <IconButton
                aria-label={sidebarCollapsed ? 'expand sidebar' : 'collapse sidebar'}
                onClick={onToggleSidebar}
                size="small"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  p: 0.8,
                  color: 'text.secondary',
                  '&:hover': { color: 'text.primary', bgcolor: 'action.hover' },
                }}
              >
                {sidebarCollapsed
                  ? <ChevronRightIcon fontSize="small" />
                  : <ChevronLeftIcon fontSize="small" />
                }
              </IconButton>
            </Tooltip>
          )}

          {/* Mobile hamburger menu */}
          {onOpenMobile && (
            <IconButton
              aria-label="open mobile drawer"
              onClick={onOpenMobile}
              size="small"
              sx={{
                display: { xs: 'flex', md: 'none' },
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: 0.8,
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          )}

          <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Typography
              component={Link}
              href="/dashboard"
              sx={{
                fontSize: '0.875rem',
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Dashboard
            </Typography>
            <Typography color="text.primary" sx={{ fontSize: '0.875rem', fontWeight: 600 }}>
              {pageTitle}
            </Typography>
          </Breadcrumbs>
        </Stack>

        {/* Right side: Notification button */}
        <IconButton
          aria-describedby={id}
          onClick={handleOpen}
          size="small"
          aria-label="notifications"
          sx={{
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            p: 0.9,
            position: 'relative',
          }}
        >
          <NotificationsNoneIcon fontSize="small" />
          {unreadCount > 0 && (
            <Box
              sx={{
                position: 'absolute',
                top: 6,
                right: 6,
                width: 6,
                height: 6,
                bgcolor: 'error.main',
                borderRadius: '50%',
              }}
            />
          )}
        </IconButton>

        <NotificationPopover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          unreadCount={unreadCount}
          onMarkAllRead={handleMarkAllRead}
        />
      </Stack>
    </Box>
  );
}
