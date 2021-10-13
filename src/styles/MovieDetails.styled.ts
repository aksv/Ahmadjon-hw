import styled from 'styled-components';
import colors from './colors';

export default styled.div`

    width: 100%;
    padding: 20px 75px;

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .body{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    
    .img{
        margin-right: 50px;

    }

    h3{
        font-weight: 300;
        font-size: 40px;
        line-height: 49px;
        color: ${colors.white};
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    
    .row{
        display: flex;
    }

    .rate{
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
        color: ${colors.white};
        width: 60px;
        height: 60px;
        border: 1px solid ${colors.white};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 100px;
    }

    .genres{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
        margin-bottom: 40px;
    }

    .runtime{
        font-weight: 300;
        font-size: 24px;
        line-height: 29px;
        color: ${colors.red};
    }

    .description{
        font-weight: 300;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;       
    }

`