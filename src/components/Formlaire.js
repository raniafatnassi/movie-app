import React, {useState} from 'react';

import movieData from '../movieData';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import MovieCard from './MovieCard';

let myMovies = movieData.map(el => <MovieCard title={el.title} image={el.image} year={el.year} rating={el.rating} />)



const Formulaire = ({ addNewMovie}) => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");
    const [isOpen, setisOpen] = useState(false);

    const handleClick = e => {
        let newMovie = {
            title,
            image, 
            year,
            rating
        };
        addNewMovie(e, newMovie);
        setisOpen(false);
        setTitle('');
        setImage('');
        setYear('');
        setRating('');
    };
    
    


    return (
    <div>
        <Button variant="light" size="lg" block onClick={() => setisOpen(true)}>Add a New Movie</Button>
        <Modal isOpen = {isOpen} onRequestClose={true}>
            <h1>Add a New Movie</h1>
            <section className='searchbox-wrap'>
                <input type='text'
                placeholder='Enter Movie Name'
                value={title}
                className='searchbox'
                required
                onChange={(e) => setTitle(e.target.value)}/>
            </section>
            <section className='searchbox-wrap'>
                <input type='text'
                placeholder='Enter Poster Link'
                value={image}
                required
                className='searchbox'
                onChange={(e) => setImage(e.target.value)}/>
            </section>
            <section className='searchbox-wrap'>
                <input type='number'
                placeholder='Enter Movie Realeasing Year'
                value={year}
                required
                className='searchbox'
                onChange={(e) => setYear(e.target.value)}/>
            </section>
            <section className='searchbox-wrap'>
                <input type='number'
                placeholder='Enter Movie Rating'
                value={rating}
                required
                className='searchbox'
                onChange={(e) => setRating(e.target.value)}/>
            </section>
        
        <Button size="lg" onClick={handleClick}>Submit</Button>
        <Button size="lg" onClick={() => setisOpen(false)}>Close</Button>

        </Modal>

    </div>
    )
}

export default Formulaire
