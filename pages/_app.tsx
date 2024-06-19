//@ts-nocheck
import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Switch from "react-switch";
import { combineTheme, dark, light } from "../styles/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import withDarkMode from "next-dark-mode";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/app.module.css";
import { useRouter } from "next/router";
import Script from "next/script";
import { siteTitle } from "../components/layout";
import GlobalStyles from "../styles/global";
import Image from "next/image";

const darkIcon = <FontAwesomeIcon height={15} icon={faMoon} />;
const lightIcon = <FontAwesomeIcon height={15} icon={faSun} />;

function App({ Component, pageProps, darkMode }: AppProps) {
  const { darkModeActive, defaultMode } = darkMode;
  const [mounted, setMounted] = React.useState(false);
  const router = useRouter();

  const handleRouteChange = (url) => {
    // @ts-ignore
    window.gtag("config", "[Tracking ID]", {
      page_path: url,
    });
  };

  React.useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const [theme, setTheme] = React.useState<DefaultTheme>(
    darkModeActive ? combineTheme(dark) : combineTheme(light),
  );

  function play() {
    let audio = document.getElementById("a1") as HTMLAudioElement;
    audio.play();
  }

  const toggleTheme = () => {
    let toDark = theme.title === "light";
    play();
    setTheme(toDark ? combineTheme(dark) : combineTheme(light));
    if (localStorage) {
      if (toDark && darkModeActive) {
        localStorage.removeItem("theme");
        return;
      }
      if (!toDark && !darkModeActive) {
        localStorage.removeItem("theme");
        return;
      }
      localStorage.setItem("theme", toDark ? "dark" : "light");
    }
  };

  React.useEffect(() => {
    if (localStorage) {
      let savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(
          savedTheme === "dark" ? combineTheme(dark) : combineTheme(light),
        );
      } else {
        setTheme(darkModeActive ? combineTheme(dark) : combineTheme(light));
      }
    } else {
      setTheme(darkModeActive ? combineTheme(dark) : combineTheme(light));
    }
  }, [darkModeActive]);

  const body = (
    <ThemeProvider theme={{ darkMode: darkModeActive, ...theme }}>
      <div id="main-container" className={theme.title}>
        <audio id="a1" hidden>
          <source src="/sounds/click.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#fff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="white" />
          <meta
            name="description"
            content="Leandro website"
          />
          <meta property="og:url" content="https://leandrodasilva.dev" />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@ld_silva13" />
          <meta name="twitter:title" content="leandrodasilva.dev" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/images/maskable_icon_x192.png" />
          <link
            rel="apple-touch-icon"
            href="/images/icons/maskable_icon_x192.png"
          />
          <link rel="me" href="mailto:me@leandrodasilva.dev" />
          <title>{siteTitle}</title>
        </Head>
        <GlobalStyles />
        <nav>
          <span className={utilStyles.headingMd}>
            <span className="letter" data-letter="L">L</span>
          </span>
          <div className="switch-container">
            <label>
              Tema
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
                      paddingRight: 2,
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
                      opacity: "0.5",
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
                      paddingRight: 2,
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
                      opacity: "0.5",
                    }}
                  >
                    {darkIcon}
                  </div>
                }
                checked={theme.title === "dark"}
                activeBoxShadow="0 0 2px 3px #fff"
                onChange={toggleTheme}
              />
            </label>
          </div>
        </nav>
        <Image
          className={styles.noise}
          src="/images/noise.svg"
          alt="World Map"
          layout="fill"
          objectFit="cover"
        />
        <Image
          className={styles.background}
          src="/images/world.svg"
          alt="World Map"
          layout="fill"
          objectFit="cover"
          quality={50}
        />
        <Component {...pageProps} />
      </div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-904BVECD5L"
      />
      <Script
        id="gtag-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-904BVECD5L', { page_path: window.location.pathname });
          `,
        }}
      />
    </ThemeProvider>
  );

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
}

export default withDarkMode(App);
