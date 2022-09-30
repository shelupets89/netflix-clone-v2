import axios from 'axios'
import { BASE_URI_TMDB } from '../constants/api'

const instance = axios.create({
  baseURL: BASE_URI_TMDB,
})

export default instance
