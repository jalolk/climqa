import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/home.page";
import { simulateDataFetch } from "./helpers";

test.describe("Responsive Design", () => {
  test("adapts layout for mobile viewport", async ({ page }) => {
    const homePage = new HomePage(page);
    await simulateDataFetch(page);

    await homePage.goto();

    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Verify search bar is properly sized
    const searchInputBox = await homePage.searchInput.boundingBox();
    expect(searchInputBox?.width).toBeLessThan(300);

    // Verify weather card layout
    await homePage.searchLocation("London");
    await homePage.waitForWeatherData();

    const weatherCard = await homePage.weatherCard.boundingBox();
    expect(weatherCard?.width).toBeLessThan(375);
  });
});
