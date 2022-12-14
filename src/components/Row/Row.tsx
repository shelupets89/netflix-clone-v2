/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import Genres from '../../enums/Genres'
import TitleKeys from '../../enums/TitleKeys'
import useTranslation from '../../hooks/useCustomTranslation'
import Movie from '../../types/Movie'
import RowItem from '../RowItem'
import './Row.scss'

type Props = {
  title: string
  fetchUri: string
  fetchParams: {
    api_key: string
    with_networks?: number
    language?: string
    with_genres?: Genres
  }
}

const Row = ({ title, fetchUri, fetchParams }: Props) => {
  const { t } = useTranslation('row')
  const [movies, setMovies] = useState<Movie[]>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUri, {
          params: fetchParams,
        })
        const dataMovies = request.data.results
        setMovies(dataMovies)
        return request
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='row'>
      <h2 className='row__title'>{t(title)}</h2>
      <div className='row__posters'>
        {movies
          ?.filter(
            (movie) => movie.backdrop_path !== '' || movie.poster_path !== '',
          )
          .map((movie: Movie) => (
            <RowItem
              key={movie.id}
              movie={movie}
              isLargeRow={title === TitleKeys.originals}
            />
          ))}
      </div>
    </div>
  )
}

export default Row
