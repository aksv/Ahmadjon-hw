import styled from 'styled-components';
import colors from './colors';

export const StyledMovies = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 80vh;
    background-color: ${colors.bg};
    padding: 0 57px;


    .tabs{
        display: flex;
        
    }
    .tab{
        list-style: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: ${colors.white};
        text-transform: uppercase;
        margin-left:30px;
        &:hover{
            cursor: pointer;
            border-bottom: 1px solid ${colors.red};
        }
    }
    .tab--active{
        cursor: pointer;
        border-bottom: 1px solid ${colors.red};
    }
`