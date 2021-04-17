import { Container, Header, Icon } from "semantic-ui-react";
import LocationPageData from "../../../datafake/location-page-content";
import { CustomButton } from "../../UiCustomElement/button";
import Responsive from "../../../components/Responsive";
import SliderComponent from "../../SliderComponent";
import ButtonLink from "../../UiCustomElement/button-link";
import { LocationWrapper } from "./style";
import {
  ImageSliderDesktop,
  ImageSliderMobile,
  ImageSliderTablet,
} from "../../../datafake/ResponsiveImage/at-location";
import SliderImage from "../../SliderImageComponent";
import { memo, useState } from "react";
import PopUp from "./popup";
const gotomainSection = () =>
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });

const fakeEventPopup = [
  {
    id: 0,
    imgUrl:
      "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/165144530_3963321733705472_5656375986393358197_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=sTFnKjN3QaAAX_pgO9b&_nc_ht=scontent-xsp1-1.xx&oh=56358df4ddfb334fc1fa7c9faf16d0b2&oe=60A25A9B",
  },
  {
    id: 1,
    imgUrl:
      "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/171595856_4023408154363496_7746395631399974111_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=a9KrHEM4w9oAX_YZpGr&_nc_ht=scontent-xsp1-2.xx&oh=fa70924a3015df8efbf10c1e2f8b7e82&oe=60A19752",
  },
  {
    id: 2,
    imgUrl:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/171051607_4009146349123010_5650347093391404459_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=35EiYdiXPBIAX_QWO1F&_nc_ht=scontent-xsp1-3.xx&oh=fe79d069756d27dc52f303d1067d2457&oe=60A0EBC7",
  },
];

const LocationPage = () => {
  const [listPopUp, setlistPopUp] = useState(fakeEventPopup);
  const handleClick = (item) => {
    setlistPopUp(listPopUp.filter((test) => item.id !== test.id));
  };
  return (
    <>
      {listPopUp.map((item) => {
        return (
          <PopUp
            key={item.id}
            url={item.imgUrl}
            value={item}
            handleClick={() => handleClick(item)}
          />
        );
      })}

      <Responsive
        onDesktop={() => {
          return (
            <SliderComponent
              Images={ImageSliderDesktop}
              height="100vh"
              opacityBlack={true}
              backgroundAttachment="fixed"
              fromLocationPage={true}
              angleDown={true}
              gotomainsection={gotomainSection}
            />
          );
        }}
        onTablet={() => {
          return (
            <SliderComponent
              Images={ImageSliderTablet}
              height="100vh"
              opacityBlack={true}
              backgroundAttachment="fixed"
              fromLocationPage={true}
              angleDown={true}
              gotomainsection={gotomainSection}
            />
          );
        }}
        onMobile={() => {
          return (
            <SliderComponent
              Images={ImageSliderMobile}
              height="100vh"
              opacityBlack={true}
              fromLocationPage={true}
              gotomainsection={gotomainSection}
            />
          );
        }}
      ></Responsive>
      <Container textAlign="center" style={{ padding: "10px 0px" }}>
        <Header textAlign="center" as="h3">
          OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED
        </Header>
        <p style={{ textAlign: "justify" }}>
          Food is our passion and it is our aim to establish the benchmark in
          Southeast Asia and beyond for a contemporary, specialised steakhouse
          concept. We opened our first restaurant in Vietnam in 2011 and went
          our way from Saigon to Hanoi and Danang; onward to Thailand to
          Bangkok, Koh Samui and Phuket; hopping to Slovakia and now recently
          opened in Manila, Phillipines; Hamburg, Germany and Hong Kong to
          expand our number of locations to seventeen restaurants and it is
          still the same joy.
        </p>
        <p style={{ textAlign: "justify" }}>
          We are proud to serve you the finest steakhouse-style food, using only
          the best available meat products sourced from selected farms in
          Victoria, New South Wales and individual farmers and ranchers in the
          United States. This is all about the original flavour of the naturally
          raised meat, paired with the offer of our own steakhouse classics, as
          well as a modern approach on ingredients, preparation and
          combinations.
        </p>
        <p style={{ textAlign: "justify" }}>
          Let your sense of taste be awakened with an aperitif, let the juicy
          meat melt in your mouth, dive into the latest wine treasures and find
          in a selection of premium cigars a peaceful retreat from the bustling
          world around.
        </p>
      </Container>

      {LocationPageData.map((item) => {
        return (
          <LocationWrapper key={item.id}>
            <section
              className={item.blur && "blur-section"}
              id={item.sectionId}
            >
              <Container textAlign="center" fluid>
                <div className="location-section-name">
                  <Header>{item.name}</Header>
                </div>
                <div className="location-section-hours">
                  <p as="h5">{item.openHours}</p>
                </div>
                <div className="location-section-phone">
                  <p as="h5">
                    Call Us:{" "}
                    <a href={`tel:${item.phoneNumber}`}>{item.phoneNumber}</a>
                  </p>
                </div>
                <div className="location-section-reverse">
                  <CustomButton name="Reverse Now" href={item.reverseNowUrl}>
                    Reverse Now
                  </CustomButton>
                </div>
                <div className="location-section-carousel">
                  <Container>
                    <SliderImage
                      images={item.imageSlideList}
                      className="carousel-custom"
                    />
                  </Container>
                </div>
                <div className="location-section-directions">
                  <CustomButton
                    name="Get Directions"
                    target="_blank"
                    href={item.directionUrl}
                  >
                    <Icon name="map marker alternate" /> Get Directions
                  </CustomButton>
                  <ButtonLink
                    icon={true}
                    iconName="list ul"
                    name="View Menus"
                    url="/menu"
                  />
                </div>
                <div className="location-section-ggmap">
                  <Container>
                    <iframe
                      src={`${item.linkIframe}`}
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="google map"
                    ></iframe>
                  </Container>
                </div>
                <div className="location-section-description">
                  <Container>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.description,
                      }}
                    ></div>
                  </Container>
                </div>

                <div className="location-section-private">
                  <ButtonLink
                    name="Private Dining | Event Request"
                    url="/private-dining-events"
                  />
                </div>
              </Container>
            </section>
          </LocationWrapper>
        );
      })}
    </>
  );
};
export default memo(LocationPage);
