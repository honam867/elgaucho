import { Container, Grid, Image, Item } from "semantic-ui-react";
import Layout from "../../components/ResponsiveHeader/index";
import NewsCss from "./news.module.css";
const News = () => {
  return (
    <Layout>
      <Container>
        {/* <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <video className={NewsCss.MyVideo} autoPlay muted loop id="myVideo">
                <source type="video/mp4" src="http://techslides.com/demos/sample-videos/small.mp4" />
              </video>            </Grid.Column>
            <Grid.Column width={6}>
              <Item.Group>
                <Item>
                  <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                  <Item.Content>
                    <Item.Header as='a'>Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                  <Item.Content>
                    <Item.Header as='a'>Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                  <Item.Content>
                    <Item.Header as='a'>Header</Item.Header>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid> */}

      </Container>
    </Layout>
  )
}
export default News;