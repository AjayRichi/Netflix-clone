import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import monica from "./monica.gif";

function Search() {
  const navigate = useNavigate();
  const [show, handleshow] = useState(false);
  const API = process.env.REACT_APP_API_KEY;
  const [searchTerm, setSearchTerm] = useState("Friends");
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${searchTerm}`;
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const mountedRef = useRef(true);

  const handleBack = () => {
    window.history.back();
  };
  const handleNavigate = () => {
    navigate("/profile");
  };

  const handleChange = (e) => {
    setSearchTerm(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(url);
        setMovies(result.data.results.slice(0, 18));
      } catch (err) {
        setMovies([]);
      }
    }
    fetchData();
    return () => {
      mountedRef.current = false;
    };
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      mountedRef.current = false;
    };
  });

  return (
    <div className="searchScreen">
      <nav className={`nav ${show && "nav_black"}`}>
        <i
          className="fa fa-arrow-left left-icon"
          onClick={() => {
            handleBack();
          }}
        ></i>
        <form className="search_Container" onSubmit={handleSubmit}>
          <i className="fas fa-search searchIcon"></i>
          <input
            className="search_Input"
            type="text"
            placeholder="Search..."
            name="search"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
        </form>
        <img
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User-logo"
          onClick={() => {
            handleNavigate();
          }}
        />
      </nav>

      <div className="searchBody">
        {movies.length !== 0 ? (
          <div>
            {movies.map((movie) => {
              return (
                <img
                  key={movie.id}
                  className="profilePoster"
                  src={`${imageUrl + movie.poster_path}`}
                  alt={movie.title}
                />
              );
            })}
          </div>
        ) : (
          <div className="errorMessage">
            <img src={monica} alt="Oops. We haven't got that." />
            <p>Try searching for another movies,shows,genre...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
