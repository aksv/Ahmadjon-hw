import React from 'react'
import MoviesLabel from '../../components/MoviesLabel';
import Tabs from '../../components/Tabs';
import {StyledMovies} from '../../styles/Movies.styled';
import MovieCards from './MovieCards';

function Movies() {
    return (
        <StyledMovies>
            <Tabs />

            <MoviesLabel number={39}/>
            <MovieCards />
        </StyledMovies>
    )
}

export default Movies
