import React from 'react'
import Card from '../../components/Card'
import { IMovie, IMoviesCards } from '../../components/types'

export interface IMovieCards extends IMoviesCards{
    filterMovies: (id:string) => {}
}

function MovieCards({data, edit, add, deleteHandler}:IMoviesCards) {
    return (
        <div className="movie__cards">
            {data.map(movie => (
                <Card edit={edit} deleteHandler={deleteHandler} movie={movie}/>
            ))}
        </div>
    )
}

export default MovieCards
