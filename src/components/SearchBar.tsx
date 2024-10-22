import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form
      data-testid="form"
      onSubmit={handleSubmit}
      className="flex justify-center gap-2"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name..."
        className="px-4 py-2 rounded-lg w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        data-testid="city-input"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        data-testid="search-button"
      >
        Search
      </button>
    </form>
  );
}
