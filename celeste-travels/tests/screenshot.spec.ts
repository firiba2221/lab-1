import { test, expect } from '@playwright/test';
import path from 'path';

const screenshotDir = path.join(process.cwd(), 'playwright-screenshots');

test('font verification - check Roboto font family on root and dashboard', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // Verify body computed font-family contains Roboto
  const bodyFont = await page.evaluate(() => window.getComputedStyle(document.body).fontFamily);
  console.log('Root body computed fontFamily:', bodyFont);
  expect(bodyFont.toLowerCase()).toContain('roboto');

  // Verify home page text computed font-family
  const textFont = await page.evaluate(() => {
    const el = document.querySelector('p, h1, h2, h3, h4, h5, h6, span');
    return el ? window.getComputedStyle(el).fontFamily : '';
  });
  console.log('Root typography computed fontFamily:', textFont);
  expect(textFont.toLowerCase()).toContain('roboto');

  await page.screenshot({ path: `${screenshotDir}/font-check-home.png`, fullPage: true });

  // Verify dashboard page font family
  await page.goto('/dashboard');
  await page.waitForLoadState('networkidle');

  const dashboardBodyFont = await page.evaluate(() => window.getComputedStyle(document.body).fontFamily);
  console.log('Dashboard body computed fontFamily:', dashboardBodyFont);
  expect(dashboardBodyFont.toLowerCase()).toContain('roboto');

  const headingFont = await page.evaluate(() => {
    const h = document.querySelector('h5, h6, p');
    return h ? window.getComputedStyle(h).fontFamily : '';
  });
  console.log('Dashboard heading computed fontFamily:', headingFont);
  expect(headingFont.toLowerCase()).toContain('roboto');

  await page.screenshot({ path: `${screenshotDir}/font-check-dashboard.png`, fullPage: true });
});

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
