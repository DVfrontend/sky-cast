import React, { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={submit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition bg-white/30 backdrop-blur-sm"
      />

      <button className="flex items-center gap-2 px-4 py-2 text-white rounded-full bg-black transition cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M9.5 17A7.5 7.5 0 1 1 17 9.5 7.5 7.5 0 0 1 9.5 17z"
          />
        </svg>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
