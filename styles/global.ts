import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Pacifico';
    font-style: normal;
    font-weight: 400;
    src: local('Pacifico Regular'), local('Pacifico-Regular'), url(https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2) format('woff2');
    font-display: swap;
  }

  :root {
    --neon-text-color: rgba(255, 255, 255, 0.212);
    --neon-border-color: rgb(0, 0, 0);
  }

  html,
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 0;
    margin: 0;
    font-family: 'Exo 2', sans-serif;
    line-height: 1.6;
    font-style: normal;
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 13rem;
    font-weight: 200;
    font-style: italic;
    text-transform: uppercase;
    box-sizing: border-box;
    text-shadow: ${props => props.theme.textShadow};
  }

  h1::-moz-selection, h2::-moz-selection, .cursor {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  h1::selection, h2::selection, .cursor {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  h1:focus, h2:focus, .cursor {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${props => props.theme.colors.text};
  }

  a:hover, a:focus {
    text-decoration: underline;
    color: red;
  }

  img {
    max-width: 100%;
    display: block;
  }

  .switch-container {
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px;
  }

  .switch {
    vertical-align: middle;
    margin-left: 4px;
  }
`;
