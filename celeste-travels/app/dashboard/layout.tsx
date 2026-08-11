'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });

  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleDesktopCollapse = () => {
    setDesktopCollapsed((prev) => !prev);
  };

  const handleOpenMobile = () => {
    setMobileOpen(true);
  };

  const handleCloseMobile = () => {
    setMobileOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', bgcolor: 'grey.50', minHeight: '100vh' }}>
      {/* Responsive Sidebar */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleCloseMobile}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
          }}
        >
          <Sidebar isMobile />
        </Drawer>
      ) : (
        <Sidebar
          collapsed={desktopCollapsed}
          onToggleCollapse={handleToggleDesktopCollapse}
        />
      )}

      {/* Main Container Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Topbar Component */}
        <Topbar onOpenMobile={handleOpenMobile} />

        {/* Content Panel Area */}
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 4 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
