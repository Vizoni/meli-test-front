import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Open-Sans, Helvetica, Sans-Serif;
        display: flex;

        --extra-small: 0.75rem;
        --small: 0.875rem;
        --normal: 1rem;
        --normal-medium: 1.125rem;
        --medium: 1.5rem;
        --medium-large: 1.75rem;
        --large: 2.85rem;

        --yellow: #ffe600;
        --black: #333333;
        --dark-grey: #666666;
        --grey: #999999;
        --light-grey: #eeeeee;
        --blue: #3483FA;
        --bg-light-green: #adddad;


        /* @media (min-width: 550px) {
            font-size: var(--small);
        }

        @media (min-width: 768px) {
            font-size: var(--normal);
        }

        @media (min-width: 1126px) {
            font-size: var(--medium-large);
        } */
        
    }

    #root {
        display: flex;
        flex-flow: column;
    }
    
    #root > * {
        padding: 0 10vw;
        @media screen and (max-width: 700px) {
            padding: 0 5vw;
        }

    }

    * {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    
    body {
        background-color: var(--light-grey);
        display: flex;
        justify-content: center;
        flex-flow: column;
        width: 100%;
    }
`;

export default GlobalStyle;
