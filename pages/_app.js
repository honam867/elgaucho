import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import ReactDOM from 'react-dom';
import '../.semantic/dist/semantic.min.css';
export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    }
  }

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
          <title>Todo App</title>
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

