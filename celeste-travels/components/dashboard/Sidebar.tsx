'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { usePathname } from 'next/navigation';

import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import BarChartIcon from '@mui/icons-material/BarChartOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';

import Logo from '@/components/Logo';
import NavItem from './NavItem';
import UserProfile from './UserProfile';

interface SidebarProps {
  collapsed?: boolean;
  isMobile?: boolean;
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
  isMobile = false,
}: SidebarProps) {
  const pathname = usePathname();
  const sidebarWidth = collapsed ? 72 : 260;

  return (
    <Box
      component="aside"
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        transition: 'width 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Header: Logo only — centered when collapsed */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start',
          px: collapsed ? 0 : 2.5,
          height: 64,
          borderBottom: '1px solid',
          borderColor: 'divider',
          flexShrink: 0,
          width: '100%',
        }}
      >
        <Logo size="medium" showText={!collapsed} href="/dashboard" />
      </Box>

      {/* Navigation items */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          px: collapsed ? 0 : 2.5,
          pt: 2.5,
          pb: 1,
          width: '100%',
        }}
      >
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

        <Stack spacing={0.5} sx={{ width: '100%', alignItems: collapsed ? 'center' : 'stretch' }}>
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

      {/* User Profile footer — centered when collapsed */}
      <Box
        sx={{
          flexShrink: 0,
          px: collapsed ? 0 : 2.5,
          py: 2,
          width: '100%',
        }}
      >
        <UserProfile collapsed={collapsed} />
      </Box>
    </Box>
  );
}
