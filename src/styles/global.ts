import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
    background-color: #e5e5e5;
}
body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
`;
