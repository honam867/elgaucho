import React, { useEffect } from "react";
import Head from "next/head";
import ReactDOM from "react-dom";
import "../.semantic/dist/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";
import Router from "next/router";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import { AnimatePresence } from "framer-motion";
NProgress.configure({
  template:
    '<div id="nprogress"><div class="bar" role="bar" style="background: #cf1b15; height: 3px"></div>',
  spinnerSelector: false,
});
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  const handExitComplete = () => {
    if (typeof window !== "undefined") {
      const hashId = window.location.hash;

      console.log({ location: window.location, hashId });

      if (hashId) {
        const element = document.querySelector(hashId);
        console.log({ element });

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }
    }
  };

  const store = useStore((state) => state);
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const axe = require("react-axe");
      axe(React, ReactDOM, 1000);
    }
  }, []);
  return (
    <>
      <Head>
        <title>El Gaucho Vietnam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PersistGate persistor={store.__persistor}>
        <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
          <Component {...pageProps} />
        </AnimatePresence>
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
