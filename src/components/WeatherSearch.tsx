import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { weatherApi } from "../services/api";
import { WeatherCard } from "./WeatherCard";
import { SearchBar } from "./SearchBar";

export function WeatherSearch() {
  const [city, setCity] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => weatherApi.getWeather(city),
    enabled: Boolean(city),
  });

  return (
    <div>
      <SearchBar onSearch={setCity} />

      <div className="mt-8">
        {isLoading && (
          <div className="text-white text-center" data-testid="loading">
            Loading...
          </div>
        )}

        {error instanceof Error && (
          <div className="text-red-100 text-center" data-testid="error">
            {error.message}
          </div>
        )}

        {data && (
          <>
            <WeatherCard weather={data} />
          </>
        )}
      </div>
    </div>
  );
}
