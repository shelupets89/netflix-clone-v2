import { IMG_URI_TMDB } from '../constants/api'

const getImgURI = (path: string): string => {
  return `${IMG_URI_TMDB}${path}` as string
}

export default getImgURI
