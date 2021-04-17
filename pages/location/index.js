import Layout from "../../components/ResponsiveHeader/index";
import Head from "next/head";
import LocationPage from "../../components/pages/location";
const Location = () => {
  return (
    <>
      <Head>
        <meta name="Description" content="Location Page." />
        <link rel="icon" href="static/img/elgauchologo.png" />
      </Head>
      <Layout>
        <style jsx global>{`
          #__next {
            height: 100%;
          }
          .slick-initialized .slick-slide.slick-active {
            z-index: 1;
          }
          .slick-slide div {
            outline: none;
          }
        `}</style>
        <LocationPage />
      </Layout>
    </>
  );
};
export default Location;
