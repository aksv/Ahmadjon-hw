import styled from 'styled-components';
import colors from './colors';

export const StyledMovies = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    background-color: ${colors.bg};
    padding: 0 57px;
    width: 90%;

    .tabs__container{
        display: flex;
        padding: 0px 20px;
        padding-top: 20px;
        align-items: center;
    }

    .tabs__list{
        display: flex;
        flex: 1;
    }
    .tab{
        list-style: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        margin-left: 30px;
        color: ${colors.white};
        text-transform: uppercase;
        &:hover{
            cursor: pointer;
            border-bottom: 1px solid ${colors.red};
        }
    }
    .tab:first-child{
        margin-left: 0;
    }
    .tab--active{
        cursor: pointer;
        border-bottom: 1px solid ${colors.red};
    }
    .sort-by label{
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.888889px;
        text-transform: uppercase;
        margin-right: 31px;
        color: ${colors.white};
        mix-blend-mode: normal;
        opacity: 0.6;
    }
    .sort-by select{
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.888889px;
        text-transform: uppercase;
        background: transparent;
        color: ${colors.white};
        border: none;
        width: 170px;
    }
    .movies__label{
        margin-left: 59px;
        font-size: 20px;
        line-height: 24px;
        color: ${colors.white};
        span{
            font-weight: 500;
        }
    }

    .movie__cards{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        grid-gap: 30px;
        margin-top: 30px;
    }
`