import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta name="theme-color" content="#673ab7" />
          <meta
            name="Description"
            content="OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED. Food is our passion and it is our aim to establish the benchmark in Southeast Asia ..."
          />
          <meta property="og:image" content="https://thue.today/media/images/section/brand/facebook/1525948033_el.jpg" />
          <link rel="icon" href="static/img/elgauchologo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }


  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
