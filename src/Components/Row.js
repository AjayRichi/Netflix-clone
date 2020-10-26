import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Movies.css'
import './Selected.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Rows({ title, url, originals }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setselectedMovie] = useState([])
    const [open, setOpen] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState("")
    const baseUrl = "https://api.themoviedb.org/3"
    const imageUrl = "https://image.tmdb.org/t/p/original"
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(baseUrl + url);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [url]);

    const handleClick = (movie) => {

        setselectedMovie(movie)
        if (selectedMovie === movie) {
            setOpen(false)
            setselectedMovie([])
        } else {
            setOpen(true)
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then(url => {
                    const urlparams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlparams.get('v'))
                }).catch(error => console.log(error))
        }
    }

    const opts = {
        height: "200",
        width: "70%",
        playerVars: {
            autoPlay: 1,

        }
    }

    return (
        <div>

            <div className="row">
                <span className="title">{title}</span>
                <div className="row-posters">
                    {movies.map((movie) => {
                        return (
                            <img onClick={() => handleClick(movie)} className={`poster ${originals && 'poster-originals'}`} key={movie.id} src={`${imageUrl}${originals ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                        )
                    })}
                </div>
                {open ?

                    <div className="selectedMovie">
                        <header className="selectedMovie-image" style={{ backgroundImage: `url(${imageUrl}${selectedMovie?.backdrop_path})`, backgroundSize: "cover", backgroundPosition: "right" }}>
                            <div className="selectedMovie-content">
                                <h1 className="selectedMovie-title">{selectedMovie?.title || selectedMovie?.name || selectedMovie?.original_name}({(selectedMovie?.first_air_date?.slice(0, 4) || selectedMovie?.release_date.slice(0, 4))})</h1>
                                
                        <div className="trailer"><YouTube videoId={trailerUrl} opts={opts}></YouTube></div>

                            </div>
                            
                        </header>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
export default Rows;
