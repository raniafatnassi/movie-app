import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({ movies}) => {
    return (
        <section className="results">
			{movies.map(movie => (
				<MovieCard  movie={movie}/>
			))}
		</section>
    )
}

export default MovieList
