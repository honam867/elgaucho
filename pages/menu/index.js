import { Container, Header, Image } from "semantic-ui-react";
import Layout from "../../components/ResponsiveHeader/index";
import ImageMenuPageData from "../../datafake/menuimage";
import SliderComponent from "../../components/SliderComponent";
import styled from "styled-components";
import Responsive from "../../components/Responsive";
import { memo } from "react";
import Head from "next/head";
import ButtonLink from "../../components/UiCustomElement/button-link";
const CustomHeader = styled(Header)`
  color: white;
  font-weight: 300;
`;
const MenuWrapper = styled.div`
  position: relative;
  top: -8px;
  background-color: black;
  color: white;
  .textAnimtion {
    color: #ff0000;
    font-size: 15px;
    -webkit-animation: my 3s infinite;
    -moz-animation: my 3s infinite;
    -o-animation: my 3s infinite;
    animation: my 3s infinite;
    text-align: justify;
  }
  @-webkit-keyframes my {
    0% {
      color: #cf1b15;
    }
    100% {
      color: #ff0000;
    }
  }
  @-moz-keyframes my {
    0% {
      color: #cf1b15;
    }
    100% {
      color: #ff0000;
    }
  }
  @-o-keyframes my {
    0% {
      color: #cf1b15;
    }
    100% {
      color: #ff0000;
    }
  }
  @keyframes my {
    0% {
      color: #cf1b15;
    }
    100% {
      color: #ff0000;
    }
  }
`;
const MenuPage = () => {
  return (
    <>
      <Head>
        <meta name="Description" content="Menu Page." />
        <link rel="icon" href="static/img/elgauchologo.png" />
      </Head>
      <Layout>
        <SliderComponent
          Images={ImageMenuPageData.ImageMenuSlider}
          slide={true}
          captionTitle="MENU"
          background={"black"}
          height="50vh"
        />
        <MenuWrapper className="backgroundFullScreen">
          <Container textAlign="center" style={{ padding: "10px" }}>
            <CustomHeader as="h2">OUR MENUS</CustomHeader>
            <Container textAlign="left">
              <p style={{ textAlign: "justify" }}>
                Let your sense of taste be awoken with an aperitif, let the
                juicy meat melt in your mouth, dive into the latest wine
                treasures and find in a selection of cigars a peaceful retreat
                from the bustling world around.
              </p>
              <p style={{ textAlign: "justify" }}>
                Our restaurants are proud to serve the finest steakhouse-style
                food, using only the best products and ingredients, especially
                in regard to our beef – High-quality, natural Prime Black Angus
                US grain fed, Australian Black Angus grass fed, and Pure Blood
                Australian Wagyu, all Halal certified. Combine your dinner with
                one of our Old and New World wines which can transform a fine
                meal into an unforgettable moment.
              </p>
              <p style={{ textAlign: "justify" }}>
                Although the menu centerpiece is steak, non-meat lovers also
                find something to indulge in – Argentinean style appetizers,
                homemade soups, fresh salads, seafood, pork and poultry dishes,
                and also a variety of savoury desserts satisfy even the most
                demanding gourmet palates.
              </p>
              <p className="textAnimtion">
                Although the menu centerpiece is steak, non-meat lovers also
                find something to indulge in – Argentinean style appetizers,
                homemade soups, fresh salads, seafood, pork and poultry dishes,
                and also a variety of savoury desserts satisfy even the most
                demanding gourmet palates.
              </p>
            </Container>
          </Container>
          <Container textAlign="center" style={{ padding: "10px" }}>
            <CustomHeader as="h2">
              ENJOY THE TASTE OF OUR ARGENTINA
            </CustomHeader>
            <ButtonLink
              name="Order Now | El Delivery | Take Away"
              url="/delivery"
            />
            <section id="DealOfTheWeek"></section>
            <Responsive
              onDesktop={ImageMenuPageData.ImageMenuBigSize.map((item) => {
                return (
                  <Image
                    key={item.id}
                    src={item.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "60%" }}
                  />
                );
              })}
              onTablet={ImageMenuPageData.ImageMenuBigSize.map((item) => {
                return (
                  <Image
                    key={item.id}
                    src={item.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "80%" }}
                  />
                );
              })}
              onMobile={ImageMenuPageData.ImageMenuBigSize.map((item) => {
                return (
                  <Image
                    key={item.id}
                    src={item.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "90%" }}
                  />
                );
              })}
            ></Responsive>
            <section id="AllDayDining"></section>
          </Container>
          <Container textAlign="center" style={{ padding: "10px" }}>
            <CustomHeader as="h2">ALL DAY DINING MENU</CustomHeader>
            <Responsive
              onDesktop={() => {
                return (
                  <Image
                    src={ImageMenuPageData.ImageDiningMenu.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "60%" }}
                  />
                );
              }}
              onTablet={() => {
                return (
                  <Image
                    src={ImageMenuPageData.ImageDiningMenu.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "80%" }}
                  />
                );
              }}
              onMobile={() => {
                return (
                  <Image
                    src={ImageMenuPageData.ImageDiningMenu.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "90%" }}
                  />
                );
              }}
            ></Responsive>
          </Container>
          <Container textAlign="center" style={{ padding: "10px" }}>
            <CustomHeader as="h2">ALL DAY DINING MENU</CustomHeader>
            <Container textAlign="left">
              <p style={{ textAlign: "justify" }}>
                We constantly strive to update and expand our wine list with the
                latest treasures by selecting the best quality wines. Our
                restaurant aims to satisfy its guests with outstanding options
                from international wineries, from Argentina to Chile, France to
                Spain, and Australia to USA.
              </p>
              <p style={{ textAlign: "justify" }}>
                It is the balance of Old and New World wines that can transform
                a fine meal into an unforgettable moment, which is an undeniable
                part of our restaurant mission.
              </p>
              <p style={{ textAlign: "justify" }}>
                All wines can be purchased for take away directly at our
                restaurants at 30% off (no service charge added). Alternatively,
                feel free to visit our online shop to get your wine conveniently
                delivered home.
              </p>
              <p className="textAnimtion">
                Please note that our wine list might slightly vary by
                availability and location, this applies especially to our
                coastal and island locations. If you are visiting us with having
                a very specific wine in mind, we are recommending contacting the
                restaurant location in advance to enquire the wine’s
                availability.
              </p>
            </Container>
            <Responsive
              onDesktop={() => {
                return (
                  <Image
                    src={ImageMenuPageData.ImageDiningMenu.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "60%" }}
                  />
                );
              }}
              onTablet={() => {
                return (
                  <Image
                    src={ImageMenuPageData.ImageDiningMenu.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "80%" }}
                  />
                );
              }}
              onMobile={() => {
                return (
                  <Image
                    src={ImageMenuPageData.ImageDiningMenu.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "90%" }}
                  />
                );
              }}
            ></Responsive>
          </Container>
          <Container textAlign="center" style={{ padding: "10px" }}>
            <CustomHeader as="h2">
              COCKTAILS AND DRINKS FOR ANY TASTE
            </CustomHeader>
            <Container fluid textAlign="left">
              <p style={{ textAlign: "justify" }}>
                Having our bars as an established focal point within our
                restaurant locations, they have become a trademark of quality
                for classic and fusion cocktails, carefully executed to satisfy
                the most sophisticated taste. At the same time the bar is a
                preferred seating for single guests, private and business
                traveling people who enjoy the comfortable and blended
                atmosphere likewise.
              </p>
              <p className="textAnimtion">
                Please note that our drink list might slightly vary by
                availability and location, this applies especially to our
                coastal and island locations. If you are visiting us with having
                a very specific drink in mind, we are recommending contacting
                the restaurant location in advance to enquire the drink’s
                availability.
              </p>
            </Container>

            <Responsive
              onDesktop={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Drink.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "60%" }}
                  />
                );
              }}
              onTablet={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Drink.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "80%" }}
                  />
                );
              }}
              onMobile={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Drink.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "90%" }}
                  />
                );
              }}
            ></Responsive>
          </Container>

          <Container textAlign="center" style={{ padding: "10px" }}>
            <section id="Wine"></section>
            <CustomHeader as="h2">WINE TREASURES</CustomHeader>
            <Container textAlign="left">
              <p style={{ textAlign: "justify" }}>
                We constantly strive to update and expand our wine list with the
                latest treasures by selecting the best quality wines. Our
                restaurant aims to satisfy its guests with outstanding options
                from international wineries, from Argentina to Chile, France to
                Spain, and Australia to USA.
              </p>
              <p style={{ textAlign: "justify" }}>
                It is the balance of Old and New World wines that can transform
                a fine meal into an unforgettable moment, which is an undeniable
                part of our restaurant mission.{" "}
              </p>
              <p style={{ textAlign: "justify" }}>
                All wines can be purchased for take away directly at our
                restaurants at 30% off (no service charge added). Alternatively,
                feel free to visit our online shop to get your wine conveniently
                delivered home.
              </p>

              <p className="textAnimtion">
                Please note that our wine list might slightly vary by
                availability and location, this applies especially to our
                coastal and island locations. If you are visiting us with having
                a very specific wine in mind, we are recommending contacting the
                restaurant location in advance to enquire the wine’s
                availability.
              </p>
            </Container>
            <Responsive
              onDesktop={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Drink.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "60%" }}
                  />
                );
              }}
              onTablet={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Drink.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "80%" }}
                  />
                );
              }}
              onMobile={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Drink.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "90%" }}
                  />
                );
              }}
            ></Responsive>
          </Container>
          <section id="Cigars"></section>
          <Container
            textAlign="center"
            style={{ padding: "10px", marginBottom: "-9px" }}
          >
            <CustomHeader as="h2">FINEST IMPORTED CIGARS</CustomHeader>
            <Container textAlign="left">
              <p style={{ textAlign: "justify" }}>
                Our cigar offer is designated for the discerning patron who
                enjoys the relaxing ritual of cigar smoking, accompanied by a
                glass of fine cognac, aged whisky, port or deeper red to enhance
                the sensation of a cigar for the aficionado.
              </p>
              <p className="textAnimtion">
                Please note that our cigar offering and availability varies by
                location, this applies especially to our coastal and island
                locations. If you are visiting us with the wish to enjoy our
                cigar selection, we are recommending contacting the restaurant
                location in advance to enquire the offer and availability.
              </p>
            </Container>
            <Responsive
              onDesktop={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Cigar.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "60%" }}
                  />
                );
              }}
              onTablet={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Cigar.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "80%" }}
                  />
                );
              }}
              onMobile={() => {
                return (
                  <Image
                    src={ImageMenuPageData.Cigar.imgUrl}
                    fluid
                    style={{ margin: "auto", width: "90%" }}
                  />
                );
              }}
            ></Responsive>
          </Container>
        </MenuWrapper>
      </Layout>
    </>
  );
};
export default memo(MenuPage);
