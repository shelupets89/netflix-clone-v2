/* eslint-disable camelcase */

import Genres from '../enums/Genres'
import TitleKeys from '../enums/TitleKeys'

const API_KEY = process.env.REACT_APP_TMDB_KEY as string

const language = 'en-US'
const api_key = API_KEY

const requests = {
  fetchTrending: {
    path: '/trending/all/week',
    params: { api_key, language },
    titleKey: TitleKeys.trending,
  },
  fetchNetflixOriginals: {
    path: '/discover/tv',
    params: { api_key, with_networks: 213, language },
    titleKey: TitleKeys.originals,
  },
  fetchTopRated: {
    path: '/movie/top_rated',
    params: { api_key, language },
    titleKey: TitleKeys.top_rated,
  },
  fetchActionMovies: {
    path: '/discover/movie',
    params: { api_key, with_genres: Genres.action, language },
    titleKey: TitleKeys.action,
  },
  fetchComedyMovies: {
    path: '/discover/movie',
    params: { api_key, with_genres: Genres.comedy, language },
    titleKey: TitleKeys.comedy,
  },
  fetchHorrorMovies: {
    path: '/discover/movie',
    params: { api_key, with_genres: Genres.horror, language },
    titleKey: TitleKeys.horror,
  },
  fetchRomanceMovies: {
    path: '/discover/movie',
    params: { api_key, with_genres: Genres.romance, language },
    titleKey: TitleKeys.romance,
  },
  fetchDocumentariesMovies: {
    path: '/discover/movie',
    params: { api_key, with_genres: Genres.documentaries, language },
    titleKey: TitleKeys.documentaries,
  },
}

export default requests
