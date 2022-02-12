import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Banner.css";
import { wishlist, selectwishlist } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Banner({ url }) {
  const list = useSelector(selectwishlist);
  const [movie, setMovie] = useState([]);
  const [buttonText, setbuttonText] = useState("Watchlist +");
  const mountedRef = useRef(true);
  const dispatch = useDispatch();
  const baseUrl = "https://api.themoviedb.org/3";
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(baseUrl + url);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (err) {
        setMovie([]);
      }
    }
    fetchData();
    return () => {
      mountedRef.current = false;
    };
  }, [url]);

  useEffect(() => {
    list.forEach((item) => {
      if (item.movie === movie.name) {
        if (item.done === "Watchlist +") {
          setbuttonText("Added");
        } else {
          setbuttonText("Watchlist +");
        }
      }
    });
    return () => {
      mountedRef.current = false;
    };
  }, [list, movie]);

  const handleList = (movie) => {
    if (document.querySelector("#listbtn").textContent === "Watchlist +") {
      setbuttonText("Added");
    } else {
      setbuttonText("Watchlist +");
    }
    dispatch(
      wishlist({
        wishlist: {
          movie: movie.name,
          done: document.querySelector("#listbtn").textContent,
          image: imageUrl + movie.poster_path,
        },
      })
    );
  };

  function truncateString(string, maxLength = 220) {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imageUrl}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner_content">
        <span className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </span>
        <div className="banner-buttons">
          <button
            className="banner-button"
            id="listbtn"
            onClick={() => {
              handleList(movie);
            }}
          >
            {buttonText}
          </button>
        </div>
        <h1 className="banner_description">
          {truncateString(movie?.overview)}
        </h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}
export default Banner;
