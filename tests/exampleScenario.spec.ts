import { test, expect } from "@playwright/test";

test("Example Scenario", async ({ page }) => {
  await page.goto("https://www.epam.com/");
  await page.getByRole("link", { name: "Services" }).nth(1).click();
  await page.getByRole("link", { name: "Explore Our Client Work" }).click();
  await expect(page.getByText("Client Work")).toBeVisible();
});