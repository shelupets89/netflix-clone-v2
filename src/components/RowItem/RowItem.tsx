import React from 'react'
import Movie from '../../types/Movie'
import './RowItem.scss'

type Props = {
    movie: Movie
    isLargeRow: boolean
}

const RowItem = ({ movie, isLargeRow }: Props) => {
    return (
        <img className={`rowItem__poster ${isLargeRow && 'rowItem__posterLarge'}`} src={isLargeRow ? movie.backdrop_path : movie.poster_path} alt={movie.original_name} />
    )
}

export default RowItem