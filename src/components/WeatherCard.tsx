import WeatherData from "../types/weather";

interface WeatherCardProps {
  weather: WeatherData;
}

export function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div
      className="bg-white rounded-lg p-6 shadow-lg"
      data-testid="weather-card"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4" data-testid="location">
          {weather.location.name}, {weather.location.country}
        </h2>

        <div className="flex items-center justify-center">
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className="w-16 h-16"
          />
          <span className="text-4xl ml-4" data-testid="temperature">
            {weather.current.temp_c}°C
          </span>
        </div>

        <p className="text-gray-600 mt-2">{weather.current.condition.text}</p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-500">Humidity</p>
            <p className="font-semibold" data-testid="humidity">
              {weather.current.humidity}%
            </p>
          </div>
          <div>
            <p className="text-gray-500">Wind</p>
            <p className="font-semibold" data-testid="wind">
              {weather.current.wind_kph} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
