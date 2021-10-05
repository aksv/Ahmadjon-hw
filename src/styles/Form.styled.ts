import sty from 'styled-components';
import clr from './colors';

export const StyledForm = sty.div`
    display: flex;
    flex-direction: column;
    background: ${clr.bg}

    .form__title{
        font-weight: 300;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #fff;
    } 
    .modal__btn-close{
        background: transparent;
        margin-left: auto;
        color: ${clr.white};
        width: 40px;
        height: 40px;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }
    
`;