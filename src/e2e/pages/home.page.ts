import { type Page, type Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly weatherCard: Locator;
  readonly locationName: Locator;
  readonly temperature: Locator;
  readonly humidity: Locator;
  readonly windSpeed: Locator;
  readonly errorMessage: Locator;
  readonly loadingIndicator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByTestId("city-input");
    this.searchButton = page.getByTestId("search-button");
    this.weatherCard = page.getByTestId("weather-card");
    this.locationName = page.getByTestId("location");
    this.temperature = page.getByTestId("temperature");
    this.humidity = page.getByTestId("humidity");
    this.windSpeed = page.getByTestId("wind");
    this.errorMessage = page.getByTestId("error");
    this.loadingIndicator = page.getByTestId("loading");
  }

  async goto() {
    await this.page.goto("http://localhost:5173/");
  }

  async searchLocation(location: string) {
    await this.searchInput.fill(location);
    await this.searchButton.click();
  }

  async waitForWeatherData() {
    await this.weatherCard.waitFor({ state: "visible" });
  }

  async waitForError() {
    await this.errorMessage.waitFor({ state: "visible" });
  }

  async getWeatherText() {
    return {
      location: await this.locationName.textContent(),
      temperature: await this.temperature.textContent(),
      humidity: await this.humidity.textContent(),
      windSpeed: await this.windSpeed.textContent(),
    };
  }
}
