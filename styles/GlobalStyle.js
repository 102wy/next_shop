import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
     font-family: 'S-CoreDream';
     src: url('https://webfontworld.github.io/SCoreDream/SCoreDream.css') format('woff');
     font-weight: normal;
     font-style: normal;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'S-CoreDream';
        font-weight: 300;
    }
    body,html{
        font-size: 10px;
        margin: 0 auto;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
    p,span,h1,h2,h3,h4,h5 {
        cursor: default;
    }
    button{
        cursor: pointer;
        background: none;
        border: none;
    }
    body > div:first-child,
    div#__next,
    div#__next > div {
        height: 100%;
    }
`;
export default GlobalStyle;
