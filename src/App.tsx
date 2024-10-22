import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherSearch } from "./components/WeatherSearch";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            ClimQa Weather App
          </h1>
          <WeatherSearch />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
