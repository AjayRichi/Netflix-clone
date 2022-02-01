import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css";
import "./Selected.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Rows({ title, url, originals }) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setselectedMovie] = useState([]);
  const [open, setOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [urlCheck, seturlCheck] = useState(false);
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
          console.log(e);
          throw e;
        });
    }
    fetchData();
  }, [url]);

  const handlePlay = (selectedMovie) => {
    if (document.querySelector("#playbtn").textContent === "Play") {
      seturlCheck(true);
      document.querySelector("#playbtn").textContent = "Close";
    } else {
      setOpen(false);
    }
  };

  const handleList = (movie) => {
    if (document.querySelector("#listbutton").textContent === "Watchlist +") {
      document.querySelector("#listbutton").textContent = "Added";
    } else {
      document.querySelector("#listbutton").textContent = "Watchlist +";
    }
  };

  const handleClick = (movie) => {
    setselectedMovie(movie);
    if (selectedMovie === movie) {
      setOpen(false);
      setselectedMovie([]);
    } else {
      seturlCheck(false);
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlparams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlparams.get("v"));
          document.querySelector("#playbtn").textContent = "Play";
        })
        .catch((e) => {
          document.querySelector("#playbtn").textContent = "Close";
          seturlCheck(false);
          setTrailerUrl("");
        });
      setOpen(true);
    }
  };

  const opts = {
    height: "200",
    width: "250",
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
                      id="playbtn"
                      className="selectedMovie-button"
                      onClick={() => handlePlay(selectedMovie)}
                    >
                      Play
                    </button>
                    <button
                      id="listbutton"
                      className="selectedMovie-button"
                      onClick={() => handleList(selectedMovie)}
                    >
                      Watchlist +
                    </button>
                  </div>
                  <h1 className="selectedMovie-description">
                    {selectedMovie?.overview}
                  </h1>
                </div>
                <div>
                  {urlCheck ? (
                    <div className="right">
                      <YouTube
                        className="youtube"
                        videoId={trailerUrl}
                        opts={opts}
                      ></YouTube>
                    </div>
                  ) : null}
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
