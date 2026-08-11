import { test, expect } from '@playwright/test';

test.describe('Celeste Travels Dashboard & Auth UI Tests', () => {
  test('Landing page renders correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Celeste Travels' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Go to Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Go to Register' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Dashboard' })).toBeVisible();
  });

  test('Login and Register pages render correctly', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
    await expect(page.getByLabel('Email Address')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();

    await page.goto('/register');
    await expect(page.getByRole('heading', { name: 'Create an account' })).toBeVisible();
    await expect(page.getByLabel('Full Name')).toBeVisible();
  });

  test('Dashboard navigation and interactivity', async ({ page, isMobile }) => {
    await page.goto('/dashboard');
    await expect(page.getByText('Dashboard Overview Panel')).toBeVisible();

    if (isMobile) {
      const menuBtn = page.getByRole('button', { name: 'open mobile drawer' });
      await expect(menuBtn).toBeVisible();
      await menuBtn.click();
      await expect(page.locator('.MuiDrawer-paper')).toBeVisible();
      await expect(page.getByText('Celeste Travels')).toBeVisible();
    } else {
      const sidebar = page.locator('aside');
      await expect(sidebar).toBeVisible();
      await expect(page.getByText('Celeste Travels')).toBeVisible();

      // Navigate to Page 01
      await page.getByRole('link', { name: 'Page 01' }).click();
      await expect(page).toHaveURL('/dashboard/page-01');

      // Test collapse button
      const collapseBtn = page.getByRole('button', { name: 'Collapse sidebar' });
      await collapseBtn.click();
      await expect(page.getByText('Celeste Travels')).not.toBeVisible();

      // Test expand button
      const expandBtn = page.getByRole('button', { name: 'Expand sidebar' });
      await expandBtn.click();
      await expect(page.getByText('Celeste Travels')).toBeVisible();
    }
  });

  test('Profile menu and Notification popover work correctly', async ({ page, isMobile }) => {
    await page.goto('/dashboard');

    if (isMobile) {
      const menuBtn = page.getByRole('button', { name: 'open mobile drawer' });
      await menuBtn.click();
      await expect(page.locator('.MuiDrawer-paper')).toBeVisible();
    }

    // Profile options menu test
    const profileBtn = page.getByRole('button', { name: 'user options' });
    await profileBtn.click();
    await expect(page.getByRole('menuitem', { name: 'View Profile' })).toBeVisible();
    await expect(page.getByRole('menuitem', { name: 'Logout' })).toBeVisible();

    // Close profile menu
    await page.keyboard.press('Escape');

    if (isMobile) {
      // Close drawer backdrop
      await page.keyboard.press('Escape');
    }

    // Test notification bell popover
    const notifBtn = page.getByRole('button', { name: 'notifications' });
    await notifBtn.click();
    await expect(page.getByText('Notifications')).toBeVisible();
    await expect(page.getByText('Flight BK-9021 Confirmed')).toBeVisible();
  });
});
