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
          <link
            rel="stylesheet"
            href="https://video-react.github.io/assets/video-react.css"
          />
          <script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MGHXKM3');`
          }} />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGHXKM3" height="0" width="0" style="display:none;visibility:hidden"></iframe>;`
          }} />
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
