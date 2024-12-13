import { useEffect, useState } from "react";
import Main from "../layout/Main";
function Movie() {
  const [inputSearch, setInputSearch] = useState(""); // User input for search
  const [movies, setMovies] = useState([]); // Movies list
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility

  // Fetch Movies
  useEffect(() => {
    const fetchMovies = async () => {
      if (!inputSearch.trim()) {
        setMovies([]); // Clear movies if input is empty
        setShowDropdown(false);
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=861f8cc7&type=movie&s=${inputSearch}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search);
          setShowDropdown(true);
        } else {
          setMovies([]); // Clear movies if no results
          console.error(data.Error); // Log error message
          setShowDropdown(false);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setShowDropdown(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce fetching to prevent too many API calls
    const debounceFetch = setTimeout(fetchMovies, 500);

    return () => clearTimeout(debounceFetch);
  }, [inputSearch]);

  return (
    <Main>
      <div className="movie-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          onFocus={() => setShowDropdown(!!movies.length)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay to allow click
          className="border p-2 rounded w-full"
        />
        {isLoading && <p>Loading...</p>}
        {showDropdown && movies.length > 0 && (
          <ul className="dropdown bg-white border rounded mt-2 max-h-64 overflow-auto">
            {movies.map((movie) => (
              <li
                key={movie.imdbID}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setInputSearch(movie.Title); // Update input with selected movie
                  setShowDropdown(false); // Close dropdown
                }}
              >
                <div className="flex items-center">
                  {movie.Poster !== "N/A" && (
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="w-10 h-10 mr-3"
                    />
                  )}
                  <span>{movie.Title}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        {!isLoading && !movies.length && inputSearch.trim() && (
          <p className="mt-2 text-gray-500">No movies found.</p>
        )}
      </div>
    </Main>
  );
}

export default Movie;
