import React from 'react'

const MovieCard = ({ movie } ) => {
    return (
        <div className="result">
			<img src={movie.image} />
			<h3>{movie.title}</h3>
            <h3>Rating: {movie.rating}</h3>
    <h3>Released in: {movie.year}</h3>
		</div>
    )
}

export default MovieCard


