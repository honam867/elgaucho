import React from "react";
import Head from "next/head";
import "../.semantic/dist/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";
import Router from "next/router";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
NProgress.configure({
  template:
    '<div id="nprogress"><div class="bar" role="bar" style="background: #cf1b15; height: 3px"></div>',
  spinnerSelector: false,
});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);

  return (
    <>
      <Head>
        <title>El Gaucho Vietnam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PersistGate persistor={store.__persistor}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
