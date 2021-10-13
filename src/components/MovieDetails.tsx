import React from 'react'
import MovieDetailsStyled from '../styles/MovieDetails.styled'
import Logo from './Logo'
import { SearchOutlined, } from '@ant-design/icons';
import { IMovie } from './types';
import fakeImg from '../assets/img/card.png';
function MovieDetails({data}: any) {
    const {url, title, rate, genre, description, runtime }:IMovie = data;
    console.log(
        data
    )
    return (
        <MovieDetailsStyled>
            <div className="header">
                <Logo/>
                <SearchOutlined style={{fontSize: "20px", color:"#F65261"}} />
            </div>
            <div className="body">
                <div className="img">
                    <img src={ fakeImg} alt="details" />
                </div>
                <div className="textBody">
                    <div className="infoBody">
                        <div className="row">
                            <h3> {title} </h3>
                            <p className="rate">
                                {rate}
                            </p>
                        </div>
                    </div>
                    <div className="genres">
                        {genre}
                    </div>
                    <div className="row">
                        <p className="runtime">
                            {runtime}
                        </p>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
            </div>
        </MovieDetailsStyled>
    )
}

export default MovieDetails
