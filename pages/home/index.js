import { Container, Header } from "semantic-ui-react";
import SliderComponent from "../../components/SliderComponent";
import { memo, useRef } from "react";
import Responsive from "../../components/Responsive";
import {
  ImageSliderDesktop,
  ImageSliderMobile,
  ImageSliderTablet,
} from "../../datafake/ResponsiveImage/at-home";
import { CustomButton } from "../../components/UiCustomElement/button";
import Head from "next/head";
import ButtonLink from "../../components/UiCustomElement/button-link";
const ButtonData = [
  {
    id: 1,
    name: "Vietnam",
    url: "/location",
  },
  {
    id: 2,
    name: "Thailand",
    url: "/location",
  },
  {
    id: 3,
    name: "Hong Kong",
    url: "/location",
  },
  {
    id: 4,
    name: "Philippines",
    url: "/location",
  },
];

const HomeFullSlider = () => {
  const mainSection = useRef(null);
  const gotomainSection = () =>
    window.scrollTo({
      top: mainSection.current.offsetTop,
      behavior: "smooth",
    });
  const captionTitle = "EL GAUCHO ARGENTINIAN STEAKHOUSE";
  const captionContent = "Please choose the country below to dine with us";
  return (
    <>
      <Head>
        <meta name="Description" content="Home Page." />
        <link rel="icon" href="static/img/elgauchologo.png" />
      </Head>
      <Responsive
        onDesktop={() => {
          return (
            <SliderComponent
              Images={ImageSliderDesktop}
              height="100vh"
              captionTitle={captionTitle}
              captionContent={captionContent}
              backgroundOpacity={true}
              backgroundAttachment="fixed"
              gotomainsection={gotomainSection}
              angleDown={true}
            />
          );
        }}
        onTablet={() => {
          return (
            <SliderComponent
              Images={ImageSliderTablet}
              height="100vh"
              captionTitle={captionTitle}
              captionContent={captionContent}
              backgroundOpacity={true}
              gotomainsection={gotomainSection}
              angleDown={true}
            />
          );
        }}
        onMobile={() => {
          return (
            <SliderComponent
              Images={ImageSliderMobile}
              height="100vh"
              captionTitle={captionTitle}
              captionContent={captionContent}
              backgroundOpacity={true}
              gotomainsection={gotomainSection}
              angleDown={true}
            />
          );
        }}
      ></Responsive>
      <div
        style={{
          background: "#fcfcfc",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Container textAlign="center">
          {ButtonData.map((button) => {
            return (
              <ButtonLink key={button.id} name={button.name} url={button.url} />
            );
          })}
          <a
            style={{ color: "#FFF" }}
            href="https://cz.elgaucho.eu/"
            alt="#"
            target="_blank"
          >
            <CustomButton>Czech Republic</CustomButton>
          </a>
          <a
            style={{ color: "#FFF" }}
            href="https://sk.elgaucho.eu/"
            alt="#"
            target="_blank"
          >
            <CustomButton>Slovakia</CustomButton>
          </a>
        </Container>
      </div>
      <Container
        style={{
          background: "#cf1b15",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
        fluid
      >
        <div ref={mainSection}></div>
        <Container textAlign="left" style={{ color: "white" }}>
          <p>
            To our valued customers – We remain open serving food and striving
            for excellence in health & food safety for all. This is of paramount
            importance to our dining group. In view of the rapidly developing
            coronavirus, we have taken additional precautionary steps on top of
            our routine health and safety practices to ensure everyone is safe,
            comfortable and well-equipped.
          </p>
          <p>These include:</p>
          <p>
            All staff preparing food and drinks are strictly required to wear
            surgical mask at all times.
          </p>
          <p>
            All staff are strictly required to apply hand sanitizer before,
            during and after service. Hand sanitizers are placed at all
            locations for use by our customers as well.
          </p>
          <p>
            All sanitizing and cleaning procedures are reinforced at all levels
            by increasing the frequency so as to ensure optimal hygiene and
            sanitation levels.
          </p>
          <p>
            We continue to monitor the situation closely and do more if
            necessary. All of us can do our part to limit the transmission of
            the virus by practicing good hygiene. We make every endeavor to make
            your experience a better one.
          </p>
          <p>Stay healthy and strong! And Eat Well!</p>
        </Container>
      </Container>
      <Container
        style={{
          background: "#FFFFFF",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
        fluid
      >
        <Responsive
          onDesktop={() => {
            return (
              <Header textAlign="center" as="h2" style={{ fontWeight: 300 }}>
                OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED
              </Header>
            );
          }}
          onMobile={() => {
            return (
              <Header textAlign="center" as="h3" style={{ fontWeight: 300 }}>
                OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED
              </Header>
            );
          }}
        ></Responsive>
        <Container textAlign="left" style={{ marginTop: "15px" }}>
          <p>
            Food is our passion and it is our aim to establish the benchmark in
            Southeast Asia and beyond for a contemporary, specialised steakhouse
            concept. We opened our first restaurant in Vietnam in 2011 and went
            our way from Saigon to Hanoi and Danang; onward to Thailand to
            Bangkok and Koh Samui; hopping to Slovakia and now recently opened
            in Manila, Phillipines; Langsuan, Bangkok; Hamburg, Germany and now
            Hong Kong to expand our number of locations to sixteen restaurants
            and it is still the same joy.{" "}
          </p>
          <p>
            We are proud to serve you the finest steakhouse-style food, using
            only the best available meat products sourced from selected farms in
            Victoria, New South Wales and individual farmers and ranchers in the
            United States. This is all about the original flavour of the
            naturally raised meat, paired with the offer of our own steakhouse
            classics, as well as a modern approach on ingredients, preparation
            and combinations.{" "}
          </p>
          <p>
            Let your sense of taste be awakened with an aperitif, let the juicy
            meat melt in your mouth, dive into the latest wine treasures and
            find in a selection of premium cigars a peaceful retreat from the
            bustling world around.{" "}
          </p>
        </Container>
      </Container>
    </>
  );
};

export default memo(HomeFullSlider);
