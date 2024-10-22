export const mockWeatherResponse = {
  location: {
    name: "London",
    country: "UK",
    region: "City of London",
  },
  current: {
    temp_c: 18,
    temp_f: 64.4,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
    },
    humidity: 72,
    wind_kph: 15,
    feelslike_c: 17,
  },
  forecast: {
    forecastday: [
      {
        date: "2024-02-20",
        day: {
          maxtemp_c: 20,
          mintemp_c: 12,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
          },
        },
      },
    ],
  },
};
