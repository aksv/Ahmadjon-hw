import React from 'react'
import Card from '../../components/Card'
import { IMovie } from '../../components/types'

function MovieCards({data}: {data: IMovie[]}) {
    return (
        <div className="movie__cards">
            {data.map(movie => (
                
                <Card movie={movie}/>
            ))}
        </div >
    )
}

export default MovieCards
