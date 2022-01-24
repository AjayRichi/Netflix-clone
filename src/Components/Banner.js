import React,{ useEffect, useState} from 'react';
import axios from 'axios'
import './Banner.css'

function Banner({url}) {
    const [movie,setMovie]=useState([]);
    const baseUrl="https://api.themoviedb.org/3"
    const imageUrl="https://image.tmdb.org/t/p/original"
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(baseUrl+url);
            setMovie(request.data.results[Math.floor( Math.random()*request.data.results.length)]);
            return request;
        }
        fetchData()
    },[url]);

    const handleList =(movie)=>{
        if(document.querySelector('#listbtn').textContent === "Watchlist +" ){
            document.querySelector('#listbtn').textContent="Added"      
        }else{
            document.querySelector('#listbtn').textContent="Watchlist +" 
        }
    }

    function truncateString (string, maxLength = 220) {
        if (!string) return null;
        if (string.length <= maxLength) return string;
        return `${string.substring(0, maxLength)}...`;
      };
      

    return (
        <header className="banner" style={{backgroundImage:`url(${imageUrl}${movie?.backdrop_path})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className="banner_content">
                <span className="banner-title">{movie?.title||movie?.name||movie?.original_name}</span>
                <div className="banner-buttons">
                    <button className="banner-button" id='listbtn' onClick={()=>{handleList(movie)}}>Watchlist +</button>
                </div>
                <h1 className="banner_description">{truncateString(movie?.overview) }</h1>
            </div>
            <div className="banner-fadeBottom">
            </div>
        </header>
        )
}
export default Banner;
