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
  // Click the dark mode toggle
  await page.getByRole('button', { name: /switch to dark mode/i }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${screenshotDir}/dashboard-dark.png`, fullPage: true });
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
