import { test, expect } from '@playwright/test';

test('Example Scenario', async ({ page }) => {
  // Step 1: Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Select 'Services' from the header menu
  await page.goto('https://www.epam.com/services');

  // Step 3: Click the 'Explore Our Client Work' link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 4: Verify that the "Client Work" text is visible on the page
  const clientWorkVisible = await page.locator('h1:has-text("Client Work")').isVisible();
  expect(clientWorkVisible).toBeTruthy();

  // Closing the browser happens automatically in Playwright
});