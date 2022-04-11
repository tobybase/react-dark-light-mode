import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        font-family: 'Kaisei Tokumin', serif;
        transition: all .1s linear;
    }

    p {
        line-height: 1.4rem;
    }

    .btn-primary {
        background: ${({theme}) => theme.primary};
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        border-radius: 1rem;
        cursor: pointer;
        outline: none;
        border: none;
    }

   .toggle-btn {
        position: absolute;
        top: 2rem;
        right: 4rem;
        transition: all .5s linear;
        cursor: pointer;
   }
`;

    export const lightTheme = {
        body: '#fff',
        text: '#121212',
        primary: '#6200ee'
    };

    export const darkTheme = {
        body: '#121212',
        text: '#fff',
        primary: '#bb86fc'
    };