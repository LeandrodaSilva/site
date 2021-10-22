import { createGlobalStyle } from "styled-components";

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
    will-change: background-position;
    color: ${(props) => props.theme.colors.text};
    padding: 0;
    margin: 0;
    font-family: 'Exo 2', sans-serif;
    line-height: 1.6;
    font-style: normal;
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: 400;
    height: auto;
    width: 100vw;
    backdrop-filter: invert(1);
    display: contents;
    background: linear-gradient(to right, #000 50%, #fff 50%);
    background-size: 200% 100%;
    background-position: ${(props) =>
  props.theme.title === "light" ? "right bottom" : "left bottom"};
    transition: background-position 2s ease;
  }
  
  main {
    padding: 2em;
    background-color: ${(props) => props.theme.colors.primaryA};
    backdrop-filter: blur(5px);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    word-break: break-word;
    will-change: background-color;
    transition: background-color 2s ease;
  }

  nav {
    position: relative;
    top: -1px;
    left: 0;
    max-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
  }

  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    padding: 1em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 13rem;
    font-weight: 200;
    font-style: italic;
    text-transform: uppercase;
    box-sizing: border-box;
    text-shadow: ${(props) => props.theme.textShadow};
  }

  h1::-moz-selection, h2::-moz-selection, .cursor {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  h1::selection, h2::selection, .cursor {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  h1:focus, h2:focus, .cursor {
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${(props) => props.theme.colors.text};
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
    z-index: 1;
  }

  .switch-container label {
    color: transparent;
  }

  .switch {
    vertical-align: middle;
    margin-left: 4px;
  }

  .hidden {
    display: none;
  }

  .letter {
    font-family: 'Libre Baskerville', serif;
    font-weight: 900;
    font-size: 3em;
    position: relative;
    color: ${(props) => props.theme.colors.text};
    transform-style: preserve-3d;
    perspective: 400px;
    z-index: 1;
    pointer-events: none;
  }
  .letter,
  .letter:before,
  .letter:after {
      transition: all 0.3s ease;
  }
  .letter:before {
    content: attr(data-letter);
    color: ${(props) => props.theme.colors.background};
    position: inherit;
    text-shadow: -1px 0px 0px ${(props) => props.theme.colors.text};
    left: 45px;
    pointer-events: all;
    z-index: 3;
    transform: rotateX(0deg) rotateY(-20deg) rotateZ(0deg);
  }
  .letter:after {
    content: "S";
    color: ${(props) => props.theme.colors.background};
    opacity: 0;
    position: inherit;
    left: 90px;
    pointer-events: none;
    transform: scale(1.13, 1) rotateX(180deg) rotateY(0deg) rotateZ(0deg)
    skew(0deg, 1deg);
    z-index: 2;
  }
  .letter:hover {
    color: ${(props) => props.theme.colors.background};
    pointer-events: all;
  }
  .letter:hover:before {
    color: ${(props) => props.theme.colors.backgroundHover};
    content: "L";
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
  }
  .letter:hover:after {
    color: ${(props) => props.theme.colors.backgroundHover};
    content: "S";
    opacity: 1;
    left: 0px;
    pointer-events: all;
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
  }

  .dark  a#digitalocean-referral img{
    filter: invert(1) grayscale(1);
    transition: all 1s ease-in;
  }

  #main-container {
    height: 100vh;
    width: auto;
  }

  @media only screen and (max-width: 360px) {
    main {
      heigth: 100vw;
    }
  }

  .noise {
    background-image: url("images/noise.svg");
    opacity: 0.4;
    z-index: -2;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background-size: auto 100%;
  }
`;
