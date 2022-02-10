const API=process.env.REACT_APP_API_KEY

const requests={
    fetchTrending:`/trending/all/week?api_key=${API}&language=en-US`,
    fetchOriginals:`/discover/tv?api_key=${API}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API}&with_genres=99`,
    fetchAnimations:`/discover/movie?api_key=${API}&with_genres=16`,
    fetchSearch:`/search/movie?api_key=${API}&query=Jack+Reacher`

}

export default requests