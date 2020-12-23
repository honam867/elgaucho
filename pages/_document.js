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
            content="an example of NextJS app with 100% accessible lighthouse score"
          />
          <link rel="icon" href="static/img/elgauchologo.png" />

        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            #__next {
              height: 100%;
            }
            .slick-initialized .slick-slide.slick-active {
              z-index: 1;
            }
            .slick-slide div{
              outline: none;
            }
          `}</style>
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
