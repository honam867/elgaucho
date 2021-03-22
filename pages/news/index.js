import { Container, } from "semantic-ui-react";
import Layout from "../../components/ResponsiveHeader/index";
import { Player } from 'video-react';

const News = () => {
  return (

    <Layout>
      <Container style={{ height: "1000px", padding: "20px 0px" }}>
        <h1 style={{ textAlign: "center " }}>Welcome to Elgaucho News</h1>
        <Player autoPlay={true} src="/static/GEMAShowcaseVideo.mp4">
        </Player>
      </Container>
    </Layout>
  )
}
export default News;