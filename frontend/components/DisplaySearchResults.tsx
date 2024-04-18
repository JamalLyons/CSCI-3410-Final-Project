import { Dog } from "@/types";
import React, { FC } from "react";

interface DisplaySearchResultsProps {
  dogs: Dog[];
}

const DisplaySearchResults: FC<DisplaySearchResultsProps> = ({ dogs }) => {
  return (
    <div className="mt-8">
      <ul className="mt-4">
        {dogs.length === 0 ? (
          <li className="mb-2">No results to display.</li>
        ) : (
          dogs.map((dog, index) => (
            <li key={index} className="mb-2 hover:text-blue-600">
              <span className="font-semibold">{dog.name}</span> - {dog.breed}
              {dog.age && ` - Age: ${dog.age}`} {/* Display age if available */}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default DisplaySearchResults;
