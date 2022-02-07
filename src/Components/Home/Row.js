import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Movies.css";
import "./Selected.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { wishlist, selectwishlist } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Rows({ title, url, originals }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setselectedMovie] = useState([]);
  const list = useSelector(selectwishlist);
  const dispatch = useDispatch();
  const mountedRef = useRef(true);
  const [buttonText, setbuttonText] = useState("Watchlist +");
  const [open, setOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://api.themoviedb.org/3";
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(baseUrl + url)
        .then((request) => {
          setMovies(request.data.results);
          return request;
        })
        .catch((e) => {
          throw e;
        });
    }
    fetchData();
    return () => {
      mountedRef.current = false;
    };
  }, [url]);

  const handleList = (movie) => {
    if (document.querySelector("#listbutton").textContent === "Watchlist +") {
      setbuttonText("Added");
    } else {
      setbuttonText("Watchlist +");
    }
    let moviename = "";
    if (originals) {
      moviename = movie.name;
    } else {
      moviename = movie.title;
    }
    dispatch(
      wishlist({
        wishlist: {
          movie: moviename,
          done: document.querySelector("#listbutton").textContent,
          image: imageUrl + movie.poster_path,
        },
      })
    );
  };

  const handleClick = (movie) => {
    setselectedMovie(movie);
    if (selectedMovie === movie) {
      setOpen(false);
      setselectedMovie([]);
    } else {
      let count = 0;
      list.forEach((item) => {
        if (
          item.movie === (movie?.title || movie?.name || movie?.original_name)
        ) {
          if (item.done === "Watchlist +") {
            setbuttonText("Added");
          } else {
            setbuttonText("Watchlist +");
          }
          count += 1;
        }
      });
      if (count === 0) {
        setbuttonText("Watchlist +");
      }
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlparams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlparams.get("v"));
        })
        .catch((e) => {
          setTrailerUrl("");
        });
      setOpen(true);
    }
  };

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 0,
      loop: 1,
    },
  };

  return (
    <div>
      <div className="row">
        <span className="title">{title}</span>
        <div className="row-posters">
          {movies.map((movie) => {
            return (
              <img
                onClick={() => handleClick(movie)}
                className={`poster ${originals && "poster-originals"}`}
                key={movie.id}
                src={`${imageUrl}${
                  originals ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              ></img>
            );
          })}
        </div>
        {open ? (
          <div className="selectedMovie">
            <div
              className="selectedMovie-image"
              style={{
                backgroundImage: `url(${imageUrl}${selectedMovie?.backdrop_path})`,
              }}
            >
              <div className="selectedMovie-content">
                <div className="left">
                  <span className="selectedMovie-title">
                    {selectedMovie?.title ||
                      selectedMovie?.name ||
                      selectedMovie?.original_name}
                    (
                    {selectedMovie?.first_air_date?.slice(0, 4) ||
                      selectedMovie?.release_date.slice(0, 4)}
                    )
                  </span>
                  <div className="selectedMovie-buttons">
                    <button
                      id="listbutton"
                      className="selectedMovie-button"
                      onClick={() => handleList(selectedMovie)}
                    >
                      {buttonText}
                    </button>
                  </div>
                  <h1 className="selectedMovie-description">
                    {selectedMovie?.overview}
                  </h1>
                </div>
                <div>
                  <div className="right">
                    <YouTube
                      className="youtube"
                      videoId={trailerUrl}
                      opts={opts}
                    ></YouTube>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Rows;
