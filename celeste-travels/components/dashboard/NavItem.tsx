'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Collapse from '@mui/material/Collapse';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from '@/components/Link';
import { usePathname } from 'next/navigation';

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  children?: NavChild[];
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
function NavSubItemRow({ child, pathname }: { child: NavChild; pathname: string }) {
  const isSubActive = pathname === child.href;
  return (
    <Box
      component={Link}
      href={child.href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 0.8,
        px: 1.5,
        borderRadius: 1.5,
        textDecoration: 'none',
        color: isSubActive ? 'primary.main' : 'text.secondary',
        bgcolor: isSubActive ? 'action.selected' : 'transparent',
        fontWeight: isSubActive ? 600 : 400,
        fontSize: '0.825rem',
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
          bgcolor: isSubActive ? 'action.selected' : 'action.hover',
          color: isSubActive ? 'primary.main' : 'text.primary',
        },
      }}
    >
      {child.label}
    </Box>
  );
}

// fallow-ignore-next-line complexity
export default function NavItem({
  icon,
  label,
  href,
  children,
  collapsed = false,
}: NavItemProps) {
  const pathname = usePathname();
  const hasChildren = Boolean(children && children.length > 0);

  const isDirectActive = Boolean(href && pathname === href);
  const isChildActive = Boolean(children?.some((child) => pathname === child.href));
  const active = isDirectActive || isChildActive;

  const [open, setOpen] = useState(isChildActive);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(menuAnchor);

  const handleToggleExpand = (e: React.MouseEvent) => {
    if (hasChildren) {
      if (collapsed) {
        setMenuAnchor(e.currentTarget as HTMLElement);
      } else {
        setOpen((prev) => !prev);
      }
    }
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const styles = getNavItemStyles(active);
  const ComponentWrapper = !hasChildren && href ? Link : Box;

  const mainRow = (
    <Box
      component={ComponentWrapper}
      href={!hasChildren ? href : undefined}
      onClick={hasChildren ? handleToggleExpand : undefined}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justify: collapsed ? 'center' : 'space-between',
        gap: collapsed ? 0 : 1.5,
        width: collapsed ? 44 : '100%',
        height: collapsed ? 44 : 'auto',
        mx: collapsed ? 'auto' : 0,
        px: collapsed ? 0 : 1.75,
        py: collapsed ? 0 : 1.1,
        borderRadius: 2,
        textDecoration: 'none',
        color: styles.color,
        bgcolor: styles.bgcolor,
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'all 0.15s ease-in-out',
        '&:hover': {
          bgcolor: styles.hoverBg,
          color: styles.hoverColor,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit' }}>
          {icon}
        </Box>
        {!collapsed && (
          <Typography
            variant="body2"
            sx={{
              fontWeight: styles.fontWeight,
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {label}
          </Typography>
        )}
      </Box>

      {!collapsed && hasChildren && (
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
          {open ? <KeyboardArrowDownIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
        </Box>
      )}
    </Box>
  );

  if (collapsed) {
    return (
      <Box>
        <Tooltip title={label} placement="right" arrow>
          {mainRow}
        </Tooltip>

        {hasChildren && (
          <Menu
            anchorEl={menuAnchor}
            open={isMenuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  minWidth: 160,
                  borderRadius: 2.5,
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  ml: 1,
                },
              },
            }}
          >
            <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, textTransform: 'uppercase' }}>
                {label}
              </Typography>
            </Box>
            {children?.map((child) => (
              <MenuItem
                key={child.href}
                onClick={handleMenuClose}
                component={Link}
                href={child.href}
                selected={pathname === child.href}
                sx={{ py: 1, px: 2, borderRadius: 1.5, mx: 0.5, my: 0.25 }}
              >
                <ListItemText
                  primary={child.label}
                  slotProps={{ primary: { sx: { fontSize: '0.85rem', fontWeight: pathname === child.href ? 600 : 400 } } }}
                />
              </MenuItem>
            ))}
          </Menu>
        )}
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      {mainRow}

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box
            sx={{
              pl: 3.5,
              pt: 0.5,
              pb: 0.5,
              ml: 2,
              borderLeft: '1px solid',
              borderColor: 'divider',
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
            }}
          >
            {children?.map((child) => (
              <NavSubItemRow key={child.href} child={child} pathname={pathname} />
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
}
