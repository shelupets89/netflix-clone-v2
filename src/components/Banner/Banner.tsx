/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import requests from '../../api/requests'
import { IMG_URI_TMDB } from '../../constants/api'

import useTranslation from '../../hooks/useCustomTranslation'
import Movie from '../../types/Movie'
import elipsis from '../../utils/elipsis'
import './Banner.scss'

const Banner = () => {
  const { t } = useTranslation('banner')
  const [movie, setMovie] = useState<Movie>()
  const title = movie?.name || movie?.original_name
  const description = elipsis(movie?.overview, 150)
  const backgroundImage = `url(${movie?.poster_path})`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals.path, {
          params: requests.fetchNetflixOriginals.params,
        })
        const dataArr = request.data.results
        const randomIndex = Math.floor(Math.random() * dataArr.length - 1)
        const resMovie: Movie = dataArr.at(randomIndex) as Movie
        const poster_path = `${IMG_URI_TMDB}${resMovie.poster_path}` as string
        setMovie({ ...resMovie, poster_path })
        return request
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage,
      }}>
      <div className='banner__content'>
        <h1 className='banner__title'>{title}</h1>
        <div className='banner__buttons'>
          <button className='banner__btn'>{t('btn_play')}</button>
          <button className='banner__btn'>{t('btn_list')}</button>
        </div>
        <h1 className='banner__description'>{description}</h1>
      </div>

      <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner
