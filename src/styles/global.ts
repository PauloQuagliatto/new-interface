import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --blue-700: #516270;
        --blue-500: #002FD3;
        --blue-300: #4682B4;
        --blue-100: #68B7F9;

        --green-500: #327C10;
        --green-300: #0BF913;

        --red-300: #F20715;
        
        --white-500: #C0C0C0;
    }

    * {
        margin: 0;
        padding:0;
        box-sizing: 0;
        overflow: hidden;
    }

    body {  
        font-family: 'Inter';  
    }

    h1, h2 {
        font-weight: 700;
    }

    h3, h4 {
        font-weight: 500;
    }

    h5,h6 {
        font-weight: 100;
    }
    
    p, input, label, textarea, select, option, li, button {
        font-family: 'Inter';
        font-weight: 400;
    }

    button{
        cursor: pointer;

        border: none;
        border-radius: 8px;
    }

    .functional-icon {
        display: flex;
        align-items: center;
        cursor: pointer;

        border-radius: 50%;

        transition: 0.2s ease;
        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export default GlobalStyle;
