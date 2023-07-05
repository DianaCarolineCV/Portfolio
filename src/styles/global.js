import {
    createGlobalStyle
} from "styled-components";



export const GlobalStyle = createGlobalStyle`
html, body, figure, header, img, div, section, select, article, input, button, textarea, p, h1, h2, h3, h4, h5, h6, ul, li, a, form {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Marcellus', serif;
    background: #0c0c0c;

  
}
input, button, select {
    cursor: pointer;
    background: transparent;
}
:root {
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;
    --color-white: #ffffff;
    --color-black #0D0D0D;
    --color-black-2: #0c0c0c;
    --color-red: #FF0000
}

`

