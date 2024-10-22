import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/home.page";
import {
  performWeatherSearch,
  simulateApiError,
  simulateDataFetch,
  simulateLoadingState,
} from "./helpers";

test.describe("Weather Search", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test("shows weather information for a valid location", async ({ page }) => {
    await simulateDataFetch(page);

    await performWeatherSearch(homePage, "London");

    const weatherText = await homePage.getWeatherText();
    expect(weatherText.location).toContain("London, UK");
    expect(weatherText.temperature).toContain("18°C");
    expect(weatherText.humidity).toContain("72%");
    expect(weatherText.windSpeed).toContain("15 km/h");
  });

  test("shows loading state while fetching data", async ({ page }) => {
    await simulateLoadingState(page);

    await homePage.searchLocation("London");
    await expect(homePage.loadingIndicator).toBeVisible();
    await homePage.waitForWeatherData();
  });

  test("shows error message for failed API calls", async ({ page }) => {
    await simulateApiError(page, 404, {
      error: { message: "Location not found" },
    });

    await homePage.searchLocation("NonexistentCity");
    await homePage.waitForError();
    await expect(homePage.errorMessage).toBeVisible();
    await expect(homePage.errorMessage).toHaveText("Location not found");
  });

  test("validates empty search input", async () => {
    await homePage.searchButton.click();
    await expect(homePage.weatherCard).not.toBeVisible();
  });
});
