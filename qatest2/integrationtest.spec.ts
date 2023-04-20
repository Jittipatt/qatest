import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 12 Pro Max'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.theguardian.com/international');
  await page.waitForTimeout(5000);
  await page.frameLocator('iframe[title="The Guardian consent message"]').getByRole('button', { name: 'Yes, I’m happy' }).click();
  await page.waitForTimeout(5000);
  await page.locator('#bannerandheader').getByRole('link', { name: 'Sport' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Close this banner' }).click();
  await page.waitForTimeout(5000);
  await page.locator('#bannerandheader').getByRole('link', { name: 'Tennis' }).click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot();
});