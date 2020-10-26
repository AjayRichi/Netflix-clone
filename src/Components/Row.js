import React,{ useEffect, useState} from 'react';
import axios from 'axios'
import './Movies.css'
import './Selected.css'

function Rows({title,url,originals}){
    const [movies,setMovies]=useState([]);
    const [selectedMovie,setselectedMovie]=useState([])
    const [open,setOpen]=useState(false)
    const baseUrl="https://api.themoviedb.org/3"
    const imageUrl="https://image.tmdb.org/t/p/original"
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(baseUrl+url);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    },[url]);

    const handleClick=(movie)=>{
        setselectedMovie(movie)
        if(selectedMovie===movie){
            setOpen(false)
            setselectedMovie([])
        }else setOpen(true)
    }
    
  return(
        <div className="row">
            <span className="title">{title}</span>
            <div className="row-posters">
                {movies.map((movie)=>{
                    return(
                        <img onClick={()=>handleClick(movie)} className={`poster ${originals && 'poster-originals'}`} key={movie.id} src={`${imageUrl}${originals?movie.poster_path:movie.backdrop_path}`} alt={movie.name}></img>
                    )
                })}
            </div>
            {open?
            
            <div className="selectedMovie">
                <header className="selectedMovie-image" style={{backgroundImage:`url(${imageUrl}${selectedMovie?.backdrop_path})`,backgroundSize:"cover",backgroundPosition:"right"}}>
            <div className="selectedMovie-content">
                <h1 className="selectedMovie-title">{selectedMovie?.title||selectedMovie?.name||selectedMovie?.original_name}({(selectedMovie?.first_air_date?.slice(0,4)||selectedMovie?.release_date.slice(0,4)) })</h1>
                <span className="rating">{(selectedMovie?.vote_average) }<span>&#9734;</span></span>
                <div className="selectedMovie-buttons">
                    <button className="selectedMovie-button">Play</button>
                    <button className="selectedMovie-button">My List</button>
                </div>
                <h1 className="selectedMovie-description">{(selectedMovie?.overview) }</h1>
            </div>
           
        </header>
            </div>
            :null
            }
        </div>
    )

}
export default Rows;
