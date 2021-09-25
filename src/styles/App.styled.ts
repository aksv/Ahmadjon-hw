import sty from 'styled-components';
import clr from './colors';

export const StyledApp = sty.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: ${clr.grey};
`;