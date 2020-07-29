const API_KEY = "e60fdb10dc40ce34fbe239ea4e7e9641";

export default {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&certification_country=IN&region=IN`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
