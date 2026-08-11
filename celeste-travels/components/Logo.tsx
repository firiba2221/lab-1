'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@/components/Link';
import { SxProps, Theme } from '@mui/material/styles';

export interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'horizontal' | 'vertical';
  showText?: boolean;
  textColor?: string;
  iconSize?: number;
  fontSize?: string | number;
  href?: string;
  sx?: SxProps<Theme>;
}

const SIZE_CONFIGS = {
  small: { icon: 26, fontSize: '0.95rem', spacing: 1 },
  medium: { icon: 34, fontSize: '1.15rem', spacing: 1.25 },
  large: { icon: 44, fontSize: '1.4rem', spacing: 1.5 },
};

// fallow-ignore-next-line complexity
export default function Logo({
  size = 'medium',
  variant = 'horizontal',
  showText = true,
  textColor = 'text.primary',
  iconSize,
  fontSize,
  href,
  sx,
}: LogoProps) {
  const config = SIZE_CONFIGS[size];
  const finalIconSize = iconSize ?? config.icon;
  const finalFontSize = fontSize ?? config.fontSize;

  const content = (
    <Stack
      direction={variant === 'horizontal' ? 'row' : 'column'}
      spacing={showText ? config.spacing : 0}
      sx={{
        alignItems: 'center',
        justify: 'center',
        display: 'inline-flex',
        textDecoration: 'none',
        ...sx,
      }}
    >
      <Box
        component="img"
        src="/logo-icon.svg"
        alt="Celeste Logo"
        sx={{
          width: finalIconSize,
          height: finalIconSize,
          objectFit: 'contain',
          flexShrink: 0,
        }}
      />
      {showText && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            letterSpacing: '0.08em',
            color: textColor,
            fontSize: finalFontSize,
            lineHeight: 1,
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
          }}
        >
          CELESTE
        </Typography>
      )}
    </Stack>
  );

  if (href) {
    return (
      <Box component={Link} href={href} sx={{ textDecoration: 'none', display: 'inline-flex' }}>
        {content}
      </Box>
    );
  }

  return content;
}
