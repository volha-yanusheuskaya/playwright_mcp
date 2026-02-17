import { test, expect } from '@playwright/test';

test('Client Work Page Verification', async ({ page }) => {
  // Step 1: Navigate to Epam homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Click on "Services" from the header menu
  const servicesLink = page.getByRole('link', { name: 'Services' });
  await servicesLink.click();

  // Step 3: Click on "Explore Our Client Work"
  const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
  await clientWorkLink.click();

  // Step 4: Verify "Client Work" text on the page
  const pageTitle = await page.locator('h1').textContent();
  expect(pageTitle).toBe('Client Work');
});