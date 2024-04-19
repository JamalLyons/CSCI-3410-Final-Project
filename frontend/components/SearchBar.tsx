"use client";

import { useSearch } from "@/hooks/useSearch";
import React, { FC, useState } from "react";
import DisplaySearchResults from "./DisplaySearchResults";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState<"name" | "breed">("name");
  const [ageFilter, setAgeFilter] = useState<number | null>(null);
  const { dogs, loading, error, fetchDogs, resetDogs } = useSearch();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      const queryParams: Record<string, any> = { [searchType]: searchTerm };
      // Check if the ageFilter exist for the search
      if (ageFilter !== null) {
        // Sometimes the ageFilter does not exist on the next request
        if (!isNaN(ageFilter)) {
          queryParams["ageFilter"] = ageFilter;
        }
      }
      fetchDogs(`search/${searchType}`, queryParams);
    }
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-700 bg-gray-900 text-white"
            placeholder={`Search by ${searchType === "name" ? "name" : "breed"}...`}
          />
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value as "name" | "breed")}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-700 bg-gray-900 text-white"
          >
            <option value="name">Name</option>
            <option value="breed">Breed</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={ageFilter || ""}
            onChange={(e) => setAgeFilter(parseInt(e.target.value))}
            className="px-4 py-2 border border-gray-500 rounded-md focus:outline-none focus:border-blue-700 bg-gray-900 text-white"
            placeholder="Age Filter"
          />
        </div>
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Search
        </button>
        <button
          disabled={dogs.length === 0}
          onClick={() => {
            setSearchTerm("");
            setAgeFilter(null);
            resetDogs();
          }}
          className={
            dogs.length === 0
              ? "hidden"
              : "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
          }
        >
          Reset
        </button>
        {/* Render loading indicator if loading */}
        {loading && <div className="text-blue-500">Loading...</div>}
        {/* Render error message if error */}
        {error && <div className="text-red-500">Error: {error}</div>}
      </div>
      {/* Render dog results */}
      {dogs && <DisplaySearchResults dogs={dogs} />}
    </>
  );
};

export default SearchBar;
