import React from 'react';
import Head from 'next/head'
import { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components';
import Switch from 'react-switch';
import { combineTheme, dark, light } from '../styles/themes';
import GlobalStyles from '../styles/global';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import withDarkMode from 'next-dark-mode'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAarmlwKyesRsEwKcim8SxmN1V2QHlBJhs",
  authDomain: "leandrodasilva-8e662.firebaseapp.com",
  projectId: "leandrodasilva-8e662",
  storageBucket: "leandrodasilva-8e662.appspot.com",
  messagingSenderId: "463584427446",
  appId: "1:463584427446:web:863dc8f71989b8ba3fd517",
  measurementId: "G-Z990GH61TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const darkIcon = <FontAwesomeIcon height={15} icon={faMoon} />
const lightIcon = <FontAwesomeIcon height={15} icon={faSun} />

// @ts-ignore
function App({ Component, pageProps, darkMode }: AppProps) {
  const { darkModeActive, defaultMode } = darkMode
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const [theme, setTheme] = React.useState<DefaultTheme>(darkModeActive ? combineTheme(dark) : combineTheme(light));

  const toggleTheme = () => {
    let toDark = theme.title === 'light';
    setTheme(toDark ? combineTheme(dark) : combineTheme(light));
    if(localStorage) {
      if (toDark && darkModeActive) {
        localStorage.removeItem('theme');
        return
      }
      if (!toDark && !darkModeActive) {
        localStorage.removeItem('theme');
        return
      }
      localStorage.setItem('theme', toDark ? 'dark' : 'light');
    }
  };

  React.useEffect(() => {
    if (localStorage) {
      let savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme === 'dark' ? combineTheme(dark) : combineTheme(light));
      } else {
        setTheme(darkModeActive ? combineTheme(dark) : combineTheme(light));
      }
    } else {
      setTheme(darkModeActive ? combineTheme(dark) : combineTheme(light));
    }
  }, [darkModeActive])

  const body = (
    <ThemeProvider theme={{ darkMode: darkModeActive, ...theme }}>
      <Head>
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Exo+2:200i&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2:200i&display=swap" />
        <title/>
      </Head>
      <GlobalStyles />
      <div className="switch-container">
        <label>
          Theme
          <Switch
            className="switch"
            onColor="#3b3b3b"
            offColor="#d1d1d1"
            offHandleColor="#000"
            checkedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "black",
                  paddingRight: 2
                }}
              >
                {darkIcon}
              </div>
            }
            checkedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "white",
                  paddingRight: 2,
                  opacity: '0.5',
                }}
              >
                {lightIcon}
              </div>
            }
            uncheckedHandleIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "white",
                  paddingRight: 2
                }}
              >
                {lightIcon}
              </div>
            }
            uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "black",
                  paddingRight: 2,
                  opacity: '0.5',
                }}
              >
                {darkIcon}
              </div>
            }
            checked={theme.title === 'dark'}
            activeBoxShadow="0 0 2px 3px #fff"
            onChange={toggleTheme}
          />
        </label>
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  )

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>
  }

  return body
}

export default withDarkMode(App)
