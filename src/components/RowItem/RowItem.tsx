import React from 'react'
import Movie from '../../types/Movie'
import './RowItem.scss'

type Props = {
    movie: Movie
    isLargeRow: boolean
}

const RowItem = ({ movie, isLargeRow }: Props) => {
    return (
        <img src={isLargeRow ? movie.backdrop_path : movie.poster_path} alt={movie.original_name} />
    )
}

export default RowItem