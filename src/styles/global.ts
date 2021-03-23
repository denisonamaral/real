import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background-items: rgba(255, 255, 255, 1);
    --blue: #4081ec;
}   --background: #e5e5e5;
* {
    margin: 0;
    padding: 0;
}
body {
    background-color: var(--background);
}
body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}
`;
