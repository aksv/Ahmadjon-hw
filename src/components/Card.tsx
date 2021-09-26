import React from 'react'
import CardStyled from '../styles/Card.styled'
import cardImage from '../assets/img/card.png';
function Card() {
    return (
        <CardStyled>
            <div className="card__img">
                <img src={cardImage} alt=""/>
                <div className="card__btns">
                    <button className="card__btn">
                        Edit
                    </button>
                    <button className="card__btn">
                        Delete
                    </button>
                </div>
            </div>
            <div className="card__info">
                <div className="card__row">
                    <h2 className="card__title">
                        Pulp Fiction
                    </h2>
                    <p className="card__release-date">
                        2005
                    </p>
                </div>
                <div className="card__tags">
                    Action & Adventure
                </div>
            </div>
        </CardStyled>
    )
}

export default Card
