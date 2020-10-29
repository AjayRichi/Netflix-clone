import React from 'react';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests'
import Row from './Row'

function Movies() {
        return (
            <div className="app">
                <Nav></Nav>
                <Banner url={requests.fetchOriginals}/>
                <Row title="Netflix Originals" url={requests.fetchOriginals} originals={true}/>
                <Row title="Trending Now" url={requests.fetchTrending}/>
                <Row title="Top Rated" url={requests.fetchTopRated}/>
                <Row title="Action" url={requests.fetchActionMovies}/>
                <Row title="Comedy" url={requests.fetchComedyMovies}/>
                <Row title="Animation" url={requests.fetchAnimations}/>
                <Row title="Horror" url={requests.fetchHorrorMovies}/>
                <Row title="Romance" url={requests.fetchRomanceMovies}/>
                <Row title="Documentaries" url={requests.fetchDocumentaries}/>
            </div>

        )
}
export default Movies;
