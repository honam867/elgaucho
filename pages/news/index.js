import { Container, } from "semantic-ui-react";
import Layout from "../../components/ResponsiveHeader/index";
import { Player } from 'video-react';

const News = () => {
  return (

    <Layout>
      <Container style={{ height: "1000px", padding: "20px 0px" }}>
        <h1 style={{ textAlign: "center " }}>Welcome to Elgaucho News</h1>
        <iframe width="1200" height="800" title="video" src="https://www.youtube.com/embed/zOGWFqOG3m4?autoplay=1">
        </iframe>
      </Container>
    </Layout>
  )
}
export default News;