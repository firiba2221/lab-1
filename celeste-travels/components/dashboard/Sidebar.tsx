'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { usePathname } from 'next/navigation';

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import BarChartIcon from '@mui/icons-material/BarChartOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import NavItem from './NavItem';
import UserProfile from './UserProfile';

interface SidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  isMobile?: boolean;
}

// fallow-ignore-next-line complexity
function SidebarHeader({
  collapsed,
  isMobile,
  onToggleCollapse,
}: {
  collapsed: boolean;
  isMobile: boolean;
  onToggleCollapse?: () => void;
}) {
  return (
    <Stack
      direction="row"
      spacing={1.5}
      sx={{
        alignItems: 'center',
        justify: collapsed ? 'center' : 'space-between',
        mb: 4,
        px: collapsed ? 0 : 0.5,
      }}
    >
      <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            flexShrink: 0,
          }}
        >
          <FlightTakeoffIcon fontSize="small" />
        </Box>
        {!collapsed && (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: '1.05rem',
              color: 'text.primary',
              whiteSpace: 'nowrap',
            }}
          >
            Celeste Travels
          </Typography>
        )}
      </Stack>

      {!isMobile && onToggleCollapse && (
        <Tooltip title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} placement="right">
          <IconButton size="small" onClick={onToggleCollapse} sx={{ color: 'text.secondary' }}>
            {collapsed ? <ChevronRightIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />}
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
}

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: <DashboardIcon fontSize="small" /> },
  { label: 'Page 01', href: '/dashboard/page-01', icon: <ArticleIcon fontSize="small" /> },
  { label: 'Page 02', href: '/dashboard/page-02', icon: <ExploreIcon fontSize="small" /> },
  { label: 'Page 03', href: '/dashboard/page-03', icon: <BarChartIcon fontSize="small" /> },
  { label: 'Settings', href: '/dashboard/settings', icon: <SettingsIcon fontSize="small" /> },
];

// fallow-ignore-next-line complexity
export default function Sidebar({
  collapsed = false,
  onToggleCollapse,
  isMobile = false,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <Box
      component="aside"
      sx={{
        width: collapsed ? 72 : 260,
        flexShrink: 0,
        bgcolor: 'background.paper',
        borderRight: isMobile ? 'none' : '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        p: collapsed ? 1.5 : 2.5,
        position: isMobile ? 'static' : 'sticky',
        top: 0,
        height: '100vh',
        boxSizing: 'border-box',
        zIndex: 10,
        transition: 'width 0.2s cubic-bezier(0.4, 0, 0.2, 1), padding 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Box>
        <SidebarHeader
          collapsed={collapsed}
          isMobile={isMobile}
          onToggleCollapse={onToggleCollapse}
        />

        {!collapsed && (
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              fontSize: '0.7rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              px: 1,
              mb: 1.5,
              display: 'block',
            }}
          >
            Navigation
          </Typography>
        )}

        <Stack spacing={0.5}>
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              active={pathname === item.href}
              collapsed={collapsed}
            />
          ))}
        </Stack>
      </Box>

      <UserProfile collapsed={collapsed} />
    </Box>
  );
}
