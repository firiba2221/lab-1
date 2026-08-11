'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Link from '@/components/Link';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  collapsed?: boolean;
}

function getNavItemStyles(active?: boolean) {
  if (active) {
    return {
      color: 'primary.main',
      bgcolor: 'action.selected',
      fontWeight: 600,
      hoverBg: 'action.selected',
      hoverColor: 'primary.main',
    };
  }
  return {
    color: 'text.secondary',
    bgcolor: 'transparent',
    fontWeight: 500,
    hoverBg: 'action.hover',
    hoverColor: 'text.primary',
  };
}

// fallow-ignore-next-line complexity
export default function NavItem({
  icon,
  label,
  href,
  active,
  collapsed = false,
}: NavItemProps) {
  const styles = getNavItemStyles(active);

  const content = (
    <Box
      component={Link}
      href={href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justify: collapsed ? 'center' : 'flex-start',
        gap: collapsed ? 0 : 1.5,
        px: collapsed ? 1 : 2,
        py: 1.2,
        borderRadius: 1.25,
        textDecoration: 'none',
        color: styles.color,
        bgcolor: styles.bgcolor,
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
          bgcolor: styles.hoverBg,
          color: styles.hoverColor,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
        {icon}
      </Box>
      {!collapsed && (
        <Typography
          variant="body2"
          sx={{
            fontWeight: styles.fontWeight,
            fontSize: '0.875rem',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </Typography>
      )}
    </Box>
  );

  if (collapsed) {
    return (
      <Tooltip title={label} placement="right" arrow>
        {content}
      </Tooltip>
    );
  }

  return content;
}
