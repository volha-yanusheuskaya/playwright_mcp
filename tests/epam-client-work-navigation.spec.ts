import { test, expect } from '@playwright/test';

test.describe('EPAM Website Navigation', () => {
  test('should navigate to Services, explore Client Work, and verify page content', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page.getByRole('link', { name: 'Services' }).nth(1).click();

    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page.getByRole('heading', { name: 'Client Work', level: 1 })).toBeVisible();

    await page.close();
  });
});
