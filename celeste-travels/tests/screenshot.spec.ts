import { test, expect } from '@playwright/test';
import path from 'path';

const screenshotDir = path.join(process.cwd(), 'playwright-screenshots');

test('screenshot - dashboard light mode', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: `${screenshotDir}/dashboard-light.png`, fullPage: true });
  expect(true).toBe(true);
});

test('screenshot - dashboard dark mode', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: /switch to dark mode/i }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${screenshotDir}/dashboard-dark.png`, fullPage: true });
  expect(true).toBe(true);
});

test('screenshot - collapse and expand sidebar', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');

  // Verify sidebar expanded state
  await page.screenshot({ path: `${screenshotDir}/sidebar-expanded.png` });

  // Click collapse button in topbar
  await page.getByRole('button', { name: /collapse sidebar/i }).click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${screenshotDir}/sidebar-collapsed.png` });

  // Click expand button in topbar to verify toggle back
  await page.getByRole('button', { name: /expand sidebar/i }).click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${screenshotDir}/sidebar-reexpanded.png` });

  expect(true).toBe(true);
});

test('screenshot - login dark mode', async ({ page }) => {
  await page.goto('/login');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: /switch to dark mode/i }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${screenshotDir}/login-dark.png`, fullPage: true });
  expect(true).toBe(true);
});
