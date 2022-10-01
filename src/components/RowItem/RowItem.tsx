import React from 'react'
import Movie from '../../types/Movie'
import './RowItem.scss'

type Props = {
  movie: Movie
  isLargeRow: boolean
}

const RowItem = ({ movie, isLargeRow }: Props) => {
  const posterSrc = movie.poster_path
  const backdropSrc = movie.backdrop_path
  const imgSrc = isLargeRow ? posterSrc : backdropSrc

  return (
    <img
      className={`rowItem__poster ${isLargeRow && 'rowItem__posterLarge'}`}
      src={imgSrc}
      alt={movie.original_name}
    />
  )
}

export default RowItem
