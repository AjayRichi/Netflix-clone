const API="2f6793e28e1ed5f6bbfca9c9fa74472d"

const requests={
    fetchTrending:`/trending/all/week?api_key=${API}&language=en-US`,
    fetchOriginals:`/discover/tv?api_key=${API}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API}&with_genres=99`,

}

export default requests