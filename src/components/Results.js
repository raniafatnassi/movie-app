import React from 'react'
import MovieCard from './MovieCard'

const Results = ({ moviesList, nameSearch, ratingSearch }) => {
    return (
        <div className='result'>
            {moviesList
                .filter(
            (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
            <MovieCard key={i} movie={el} />
        ))}
        </div>
    )
}

export default Results
