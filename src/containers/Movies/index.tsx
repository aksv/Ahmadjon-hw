import React from 'react'
import MoviesLabel from '../../components/MoviesLabel';
import Tabs from '../../components/Tabs';
import { IMovie } from '../../components/types';
import {StyledMovies} from '../../styles/Movies.styled';
import MovieCards from './MovieCards';

function Movies({data}:{data: IMovie[]}) {
    

    return (
        <StyledMovies>
            <Tabs />
            <MoviesLabel number={39}/>
            <MovieCards data={data} />
            
        </StyledMovies>
    )
}

export default Movies
