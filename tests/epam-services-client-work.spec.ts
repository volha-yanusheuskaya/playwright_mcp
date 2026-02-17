import { test, expect } from '@playwright/test';

test('Navigate through EPAM website', async ({ page }) => {
  // Step 1: Navigate to homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu
  const servicesLink = page.locator('text=Services').first();
  expect(await servicesLink.isVisible()).toBeTruthy();

  // Step 3: Click on "Explore Our Client Work"
  await page.getByText('Explore Our Client Work').nth(1).click();

  // Step 4: Verify "Client Work" heading is visible
  const clientWorkText = page.getByRole('heading', { name: 'Client Work' });
  await expect(clientWorkText).toBeVisible();
});