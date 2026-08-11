import { test, expect } from '@playwright/test';
import path from 'path';

const screenshotDir = path.join(process.cwd(), 'playwright-screenshots');

test('screenshot - home page logo and version', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: `${screenshotDir}/home-page.png`, fullPage: true });
  expect(true).toBe(true);
});

test('screenshot - developer panel open', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Click developer panel floating button
  await page.getByRole('button', { name: /open developer panel/i }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${screenshotDir}/dev-panel-open.png`, fullPage: true });
  expect(true).toBe(true);
});

test('screenshot - dashboard light mode', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: `${screenshotDir}/dashboard-light.png`, fullPage: true });
  expect(true).toBe(true);
});

test('screenshot - collapse and expand sidebar', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');

  await page.screenshot({ path: `${screenshotDir}/sidebar-expanded.png` });

  await page.getByRole('button', { name: /collapse sidebar/i }).click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${screenshotDir}/sidebar-collapsed.png` });

  expect(true).toBe(true);
});
