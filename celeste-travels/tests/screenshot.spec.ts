import { test, expect } from '@playwright/test';
import path from 'path';

const screenshotDir = path.join(process.cwd(), 'playwright-screenshots');

test('audit 1 - desktop expanded sidebar navigation', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: `${screenshotDir}/audit-1-desktop-expanded.png` });

  // Click Page 01 nav item to expand accordion
  await page.locator('aside').getByText('Page 01').first().click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${screenshotDir}/audit-1-desktop-page01-expanded.png` });

  expect(true).toBe(true);
});

test('audit 2 - desktop collapsed sidebar navigation', async ({ page }) => {
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');

  // Click collapse button in topbar
  await page.getByRole('button', { name: /collapse sidebar/i }).click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${screenshotDir}/audit-2-desktop-collapsed.png` });

  // Click 2nd nav icon in collapsed sidebar
  const icons = page.locator('aside svg');
  if (await icons.count() >= 2) {
    await icons.nth(1).click({ force: true });
  }
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${screenshotDir}/audit-2-desktop-collapsed-popover.png` });

  expect(true).toBe(true);
});

test('audit 3 - mobile drawer view', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');

  await page.screenshot({ path: `${screenshotDir}/audit-3-mobile-topbar.png` });

  // Open mobile drawer
  await page.getByRole('button', { name: /open mobile drawer/i }).click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${screenshotDir}/audit-3-mobile-drawer-open.png` });

  expect(true).toBe(true);
});
