import React from "react";
import { StyledHeader } from "../../styles/Header.styled";



export default function Header() {


    return(
        <StyledHeader>
            <div className="header__top">
                <h4 className="header__logo">
                    <a href="/">
                        <span>netflix</span>roulette
                    </a>
                </h4>
                <button className="header__button">
                    + Add Movie
                </button>
            </div>
            <div className="header__body">
                <div className="header__search-box">
                    <input type="text" className="header__search-input" placeholder="What do you want to watch?"/>
                    <button className="header__search-button">
                        Search
                    </button>
                </div>
            </div>
        </StyledHeader>
    )
   


}