import { Container, Header } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import styleMagazine from "./magazine.module.css";
import SliderComponent from "../../components/SliderComponent";
import SrcImg1 from "../../public/static/img/home-2-1.jpg";
import SrcImg2 from "../../public/static/img/home-3.jpg";
import SrcImg3 from "../../public/static/img/home-4.jpg";
import Responsive from "../../components/Responsive";
const CustomHeader = styled(Header)`
  color: black;
  font-weight: 300;
`;
const Images = [
  {
    id: 1,
    name: "Img 2",
    imgUrl: SrcImg1,
    size: "450px",
    title: "",
  },
  {
    id: 2,
    name: "Img 1",
    imgUrl: SrcImg2,
    size: "450px",
    opacity: "0.5",
    title: "",
  },
  {
    id: 3,
    name: "Img 3",
    imgUrl: SrcImg3,
    size: "450px",
    title: "",
  },
];

const GetInTouch = () => {
  return (
    <Layout>
      <div className={styleMagazine.bg}>
        <Container fluid style={{ paddingBottom: "50px" }}>
          <CustomHeader as="h2">CHECK OUT OUR MAGAZINE</CustomHeader>
          <p>
            Enjoy our annual El Gaucho magazine filled with insights,
            recommendations and sneak peeks.
          </p>
        </Container>

        <Container fluid>
          <Responsive
            onDesktop={() => {
              return (
                <SliderComponent
                  Images={Images}
                  height="1068px"
                  backgroundOpacity={true}
                  backgroundAttachment="fixed"
                  angleDown={false}
                />
              );
            }}
            onTablet={() => {
              return (
                <SliderComponent
                  Images={Images}
                  height="642px"
                  backgroundOpacity={true}
                  backgroundAttachment="fixed"
                  angleDown={false}
                />
              );
            }}
            onMobile={() => {
              return (
                <SliderComponent
                  Images={Images}
                  height="265px"
                  backgroundOpacity={true}
                />
              );
            }}
          ></Responsive>
        </Container>
      </div>
    </Layout>
  );
};
export default GetInTouch;
