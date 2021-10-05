import sty from 'styled-components';
import clr from './colors';

export const StyledInput = sty.div<{width: string, margin?: string}>`
    display: flex;
    flex-direction: column;
    
    input{
        background: rgba(50, 50, 50, 0.948044);
        padding: 20px;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: ${clr.white};
        margin-right: ${props => props.margin || "0px"};
        margin-top: 15px;
        mix-blend-mode: normal;
        opacity: 0.8;
        border-radius: 4px;
        outline-width: 0px; 
        border: 0.5px solid rgba(50, 50, 50, 0.948044);
        width: ${props => props.width || "300px"};
    }
    label{
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.888889px;
        text-transform: uppercase;
        color: #F65261;
        mix-blend-mode: normal;
        opacity: 0.8;
    }
`;