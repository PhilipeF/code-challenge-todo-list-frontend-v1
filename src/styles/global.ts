import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   :root {
    --white: #fff;
    --red: #e52e4d;
    --danger: #e25858;
    --blue: #5429cc;
    --green: #33cc95;
    --green-hover: #2ea781;
    --blue-light: #6933ff;
    --blue-dark: #1e6f9f;
    --blue-light: #198DE6;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --gray-100: #f2f2f2;
    --gray-150: #f0f2f5;
    --gray-200: #d9d9d9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1a1a1a;
    --gray-700: #0d0d0d;
    --purple: #8284fa;
    --purple-dark: #5e60ce;
  }

 * {
    margin: 0;
    padding: 0;
  }

 body {
    background: var(--gray-700);
    --webkit-font-smoothing: antialiased;
  }

 body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

 h1, h2, h3, h4, h5, strong {
    font-weight: 600;
  }
`;
