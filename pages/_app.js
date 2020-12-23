import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import ReactDOM from 'react-dom';
import '../.semantic/dist/semantic.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';
import Router from 'next/router';
NProgress.configure(
  {
    template: '<div id="nprogress"><div class="bar" role="bar" style="background: #cf1b15; height: 3px"></div>',
    spinnerSelector: false
  },


)
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
export default class MyApp extends App {
  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      const axe = require('react-axe')
      axe(React, ReactDOM, 1000)
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>El Gaucho Vietnam</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

