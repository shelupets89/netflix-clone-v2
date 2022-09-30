/* eslint-disable camelcase */
const API_KEY = process.env.REACT_APP_TMDB_KEY

const language = 'en-US'
const api_key = API_KEY

enum Genres {
    action = 28,
    comedy = 35,
    horror = 27,
    romance = 10749,
    documentaries = 99
}

const requests = {
    fetchTrending: {
        path: '/trending/all/week',
        params: { api_key, language },
    },
    fetchNetflixOriginals: {
        path: '/discover/tv',
        params: { api_key, with_networks: 213, language },
    },
    fetchTopRated: {
        path: '/movie/top_rated',
        params: { api_key, language },
    },
    fetchActionMovies: {
        path: '/discover/movie',
        params: { api_key, with_genres: Genres.action, language },
    },
    fetchComedyMovies: {
        path: '/discover/movie',
        params: { api_key, with_genres: Genres.comedy, language },
    },
    fetchHorrorMovies: {
        path: '/discover/movie',
        params: { api_key, with_genres: Genres.horror, language },
    },
    fetchRomanceMovies: {
        path: '/discover/movie',
        params: { api_key, with_genres: Genres.romance, language },
    },
    fetchDocumentariesMovies: {
        path: '/discover/movie',
        params: { api_key, with_genres: Genres.documentaries, language },
    },
}

export default requests
