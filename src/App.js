import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=5e52992e";

const App = () => {
  
  //API DATA
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
