import React from 'react';

import Rate from './Rate';

function Search({ setNameSearch, ratingSearch, setRatingSearch }) {
    return (
        <section className='searchbox'>
            <input className='searchbox-wrap'
                type="text"
                placeholder="Type movie name to search"
                onChange={(e) => setNameSearch(e.target.value)}
            />
            <div className="rating-search">
                <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />
            </div>
        </section>
    )
}

export default Search
