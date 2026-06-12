
import React, { useState } from "react";
import axios from "axios";
import "./MovieSelector.css";
function MovieSelector() {
    const [query, setQuery] = useState("");
     const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("all");
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    if (!query) return;

    try {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/movies?search=${query}&genre=${genre}`
      );

      console.log(res.data); // DEBUG
      setMovies(res.data);
    } catch (err) {
      console.log(err);
      alert("Backend not working or API key issue");
    } finally {
      setLoading(false);
    }
  };
  const getBgClass = () => {
    if (genre === "comedy") return "light";
    if (genre === "horror") return "dark";
    if (genre === "romance") return "romance";
    return "default";
  };

  

  return (
    <div className={`container ${getBgClass()}`}>
      <h1 className="title">🎬 MovieFlix</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="all">All</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p className="loading">Loading...</p>}

      <div className="netflix-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="netflix-card">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="overlay">
              <h3>{movie.Title}</h3>
            </div>
          </div>
        ))}
      </div>

      {!loading && movies.length === 0 && (
        <p className="empty">No movies found</p>
      )}
    </div>
  );
}



export default MovieSelector

