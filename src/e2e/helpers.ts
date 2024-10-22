import { Page } from "@playwright/test";
import { HomePage } from "./pages/home.page";
import { ErrorResponse } from "@/types/response";
import { mockWeatherResponse } from "./__mock__/weather";

export async function performWeatherSearch(
  homePage: HomePage,
  location: string
) {
  await homePage.searchLocation(location);
  await homePage.waitForWeatherData();
}

export async function simulateLoadingState(page: Page) {
  await page.route("**/current.json*", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await route.fulfill({ json: mockWeatherResponse });
  });
}

export async function simulateApiError(
  page: Page,
  status: number,
  response: ErrorResponse
) {
  await page.route("**/current.json*", async (route) => {
    await route.fulfill({ status, json: response });
  });
}

export async function simulateDataFetch(page: Page) {
  await page.route("**/current.json*", async (route) => {
    await route.fulfill({ json: mockWeatherResponse });
  });
}
