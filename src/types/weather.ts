interface WeatherData {
  location: Location;
  current: Current;
}

interface Location {
  name: string;
  country: string;
}

interface Current {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  humidity: number;
  wind_kph: number;
}

export default WeatherData;
