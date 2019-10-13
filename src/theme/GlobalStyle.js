import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');

html{
    font-size: 62.5%;
    scroll-behavior:smooth;
}

body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:white;
}
`;

export default GlobalStyle;
