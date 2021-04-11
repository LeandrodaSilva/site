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

const darkIcon = <FontAwesomeIcon height={15} icon={faMoon} />
const lightIcon = <FontAwesomeIcon height={15} icon={faSun} />

// @ts-ignore
function App({ Component, pageProps, darkMode }: AppProps) {
  const { darkModeActive } = darkMode
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const [theme, setTheme] = React.useState<DefaultTheme>(darkModeActive ? combineTheme(dark) : combineTheme(light));

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  };

  React.useEffect(() => {
    console.log('Changed theme to: ', darkModeActive ? 'dark' : 'light')
    setTheme(darkModeActive ? combineTheme(dark) : combineTheme(light));
  }, [darkModeActive])

  const body = (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preload" href="https://fonts.googleapis.com/css?family=Exo+2:200i&display=swap" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo+2:200i&display=swap" />
        <title/>
      </Head>
      <GlobalStyles />
      <div className="switch-container">
        <Switch
          className="switch"
          onColor="#3b3b3b"
          offColor="#d1d1d1"
          offHandleColor="#000"
          checkedIcon={
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
              {darkIcon}
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
                color: "white",
                paddingRight: 2
              }}
            >
              {lightIcon}
            </div>
          }
          checked={theme.title === 'dark'}
          activeBoxShadow="0 0 2px 3px #fff"
          onChange={toggleTheme}
        />
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
