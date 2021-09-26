import sty from 'styled-components';
import clr from './colors';

export const StyledApp = sty.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: ${clr.grey};
    .header__logo{
        font-size: 22px;
        line-height: 26px;
        font-weight: 500;
        a{
            color: ${clr.red};
            text-decoration: none;

            span{
                font-weight: 900;
            }
        }
    }
`;