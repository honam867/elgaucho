import Layout from "../../components/ResponsiveHeader/index";
import { Button, Container, Header, Icon, Grid } from "semantic-ui-react";
import SliderComponent from "../../components/SliderComponent";
import LocationSectionGGMap from "../../components/LocationSectionGGMap";
import ButtonCustomComponent from "../../components/ButtonCustomComponent";
import styled from "styled-components";
import Link from "next/link";
import Responsive from "../../components/Responsive";

const CustomButton = styled(Button)`
color: #fff  !important;
background: #cf1b15 !important;
font-weight: 300px !important;
margin: 10px !important;
@media only screen and (min-width:320px) and (max-width:767px)  {
  color: white !important;
  font-size: 10px !important;
}
`;
const Location = () => {

  // TODO Fake data Image
  const Images = [
    {
      id: 1,
      name: "Img 1",
      imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2016/04/El-Gaucho-Argentinian-Steakhouse-Restaurant-Homepage-Welcome-1920-x-800.jpg",
      size: "450px",
      title: "WELCOME",
      subTitle: "Finest Steakhouse-Style Food",
      opacity: "0.8",
      buttonName: "EL DELIVERY | TAKE OUT",
      url: "delivery"
    },
    {
      id: 2,
      name: "Img 2",
      imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2019/06/El-Gaucho-Dine-With-Us.jpg",
      size: "450px",
      title: "DINE WITH US",
      subTitle: "View Our Menus",
      buttonName: "Menus",
      url: "menu"
    },
    {
      id: 3,
      name: "Img 3",
      imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2016/04/VN04-2017_1036_37_38_39_40.jpg",
      size: "450px",
      title: "",
      title: "GET IN TOUCH",
      opacity: "0.8",
      subTitle: "Drop Us A Line On Any Question Or Note You Might Have",
      buttonName: "CONTACT US",
      url: "get-in-touch"
    }
  ];
  const Images2 = [
    {
      id: 1,
      name: "Img 1",
      imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2020/12/IMG1jpg.jpg",
      size: "450px"
    },
    {
      id: 2,
      name: "Img 2",
      imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2020/12/IMG2.jpg",
      size: "450px"
    },
    {
      id: 3,
      name: "Img 3",
      imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2020/12/IMG3jpg.jpg",
      size: "450px"
    },
    {
      id: 3,
      name: "Img 3",
      imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2020/12/IMG4jpg.jpg",
      size: "450px"
    }
  ];
  const gotomainSection = () => window.scrollTo({
    top: 400,
    behavior: "smooth"
  })
  return (
    <Layout>
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
      {
        <Responsive onDesktop={() => {
          return (
            <SliderComponent
              Images={Images}
              height="92vh"
              backgroundOpacity={true}
              backgroundAttachment="fixed"
              fromLocationPage={true}
              angleDown={true}
              gotomainsection={gotomainSection}
            />
          )
        }} onTablet={() => {
          return (
            <SliderComponent
              Images={Images}
              height="92vh"
              backgroundOpacity={true}
              backgroundAttachment="fixed"
              fromLocationPage={true}
              angleDown={true}
              gotomainsection={gotomainSection}
            />
          )
        }} onMobile={() => {
          return (
            <SliderComponent
              Images={Images}
              height="30vh"
              backgroundOpacity={true}
              fromLocationPage={true}
              gotomainsection={gotomainSection}
            />
          )
        }}>
        </Responsive>
      }
      <Container>
        <Header textAlign='center' as='h3' style={{ marginTop: "30px", fontWeight: "400" }} >

          OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED
                    </Header>
        <p>
          Food is our passion and it is our aim to establish the benchmark in Southeast Asia and beyond for a contemporary, specialised steakhouse concept. We opened our first restaurant in Vietnam in 2011 and went our way from Saigon to Hanoi and Danang; onward to Thailand to Bangkok, Koh Samui and Phuket; hopping to Slovakia and now recently opened in Manila, Phillipines; Hamburg, Germany and Hong Kong to expand our number of locations to seventeen restaurants and it is still the same joy.
                    </p>
        <p>
          We are proud to serve you the finest steakhouse-style food, using only the best available meat products sourced from selected farms in Victoria, New South Wales and individual farmers and ranchers in the United States. This is all about the original flavour of the naturally raised meat, paired with the offer of our own steakhouse classics, as well as a modern approach on ingredients, preparation and combinations.
                    </p>
        <p>
          Let your sense of taste be awakened with an aperitif, let the juicy meat melt in your mouth, dive into the latest wine treasures and find in a selection of premium cigars a peaceful retreat from the bustling world around.
                    </p>

      </Container>

      <Container style={{ background: "#eaeaea", marginTop: "15px", paddingTop: "20px" }} fluid>
        <Header textAlign='center' as='h3' style={{ fontWeight: "400" }}>
          GF, SAIGON PEARL, 92A NGUYEN HUU CANH, WARD 22, BINH THANH DIST., HCMC
            </Header>

        <Container textAlign="center">
          <p as='h5'>
            Open Daily from 11AM to 10PM
                    </p>

          <p as='h5'>
            Call Us: <a href="/" style={{ color: "#CF1315" }}> +84 972 697 654</a>
          </p>
          <CustomButton name="Reverse Now" href="https://widget.guestplan.com/?i=9a12b86df5ecbae4b281ca66076eeab9c05a19c5">Reverse Now</CustomButton>
        </Container>

        <Container >
          <Grid centered columns={1}>
            <Grid.Column computer={15} tablet={16}>
              <Responsive onDesktop={() => {
                return <div style={{ margin: "0px 80px" }}>
                  <SliderComponent slide={true} Images={Images2} height="80vh" fromPrivateDiningEventPages={true} />
                </div>
              }} onTablet={() => {
                return <div style={{ margin: "0px 80px" }}>
                  <SliderComponent slide={true} Images={Images2} height="50vh" fromPrivateDiningEventPages={true} />
                </div>
              }} onMobile={() => {
                return <SliderComponent slide={true} Images={Images2} height="30vh" fromPrivateDiningEventPages={true} />
              }}>
              </Responsive>

            </Grid.Column>
          </Grid>

        </Container>

        <Container textAlign="center" style={{ marginBottom: "30px" }}>
          <CustomButton name="Reverse Now" href="https://www.google.com/maps/place/Saigon+Pearl,+Ph%C6%B0%E1%BB%9Dng+22,+B%C3%ACnh+Th%E1%BA%A1nh,+Ho+Chi+Minh+City,+Vietnam/@10.78954,106.7177957,17z/data=!3m1!4b1!4m5!3m4!1s0x317528ab19e39189:0x66e1081c51e6c084!8m2!3d10.7901079!4d106.7197782?shorturl=1"><Icon name="map marker alternate" /> Get Directions</CustomButton>
          <ButtonCustomComponent icon={true} iconName="list ul" name="View Menus" url="/menu" />
        </Container>

        <Container textAlign='left'  >
          <p>
            Our venue can be found on the ground floor of the Saigon Pearl urban development area less than 10 min away from District 1 featuring a corner location,
            outside seating and a great view of the never-ending flow of motorbikes and cars passing you by on Nguyen Huu Canh street.
                        Saigon Pearl is nestled away from the hustle and bustle of the city while still offering the convenience of an urban lifestyle with great amenities all around including coffee shops, supermarkets, convenience stores and the like.                </p>
          <p>
            This new addition will bring you all El Gaucho has to offer, from our signature design elements, extensive menus, stellar service and of course Premium Steak cuts.                </p>
        </Container>
        <Container textAlign="center" style={{ paddingBottom: "20px" }}>
          <ButtonCustomComponent name="Private Dining | Event Request" url="/private-dining-events" />
        </Container>
      </Container>
      <Container style={{ marginTop: "15px", paddingTop: "20px", textAlign: "center" }} >
        <Header textAlign='center' as='h3' style={{ fontWeight: "400" }}>
          74/1 HAI BA TRUNG, BEN NGHE WARD, DIST. 1, HCMC
                </Header>
        <p as='h5' >
          Open Daily from 11AM to 10PM
                    </p>

        <p as='h5'>
          Call Us: <a href="/" style={{ color: "#CF1315" }}> +84 972 697 654</a>
        </p>

        <Container textAlign="center">
          <CustomButton name="Reverse Now" href="https://widget.guestplan.com/?i=9a12b86df5ecbae4b281ca66076eeab9c05a19c5">Reverse Now</CustomButton>
        </Container>
        <Grid centered columns={1}>
          <Grid.Column computer={15} tablet={16} mobile={16}>
            <Responsive onDesktop={() => {
              return <div style={{ margin: "0px 80px" }}>
                <SliderComponent slide={true} Images={Images2} height="80vh" fromPrivateDiningEventPages={true} />
              </div>
            }} onTablet={() => {
              return <div style={{ margin: "0px 80px" }}>
                <SliderComponent slide={true} Images={Images2} height="50vh" fromPrivateDiningEventPages={true} />
              </div>
            }} onMobile={() => {
              return <SliderComponent slide={true} Images={Images2} height="30vh" fromPrivateDiningEventPages={true} />
            }}>
            </Responsive>
          </Grid.Column>
        </Grid>
        <Container textAlign="center" style={{ marginBottom: "30px" }}>
          <CustomButton name="Reverse Now" href="https://www.google.com/maps/place/Saigon+Pearl,+Ph%C6%B0%E1%BB%9Dng+22,+B%C3%ACnh+Th%E1%BA%A1nh,+Ho+Chi+Minh+City,+Vietnam/@10.78954,106.7177957,17z/data=!3m1!4b1!4m5!3m4!1s0x317528ab19e39189:0x66e1081c51e6c084!8m2!3d10.7901079!4d106.7197782?shorturl=1"><Icon name="map marker alternate" /> Get Directions</CustomButton>
          <ButtonCustomComponent icon={true} iconName="list ul" name="View Menus" url="/menu" />
          <Responsive onDesktop={() => {
            return <div style={{ height: "600px", margin: "0px 115px" }}>
              <LocationSectionGGMap lat={10.790045841510906} lng={106.71802615681743}></LocationSectionGGMap>
            </div>
          }} onTablet={() => {
            return <div style={{ height: "580px", margin: "0px 40px" }}>
              <LocationSectionGGMap lat={10.790045841510906} lng={106.71802615681743}></LocationSectionGGMap>
            </div>
          }} onMobile={() => {
            return <div style={{ height: "300px" }}>
              <LocationSectionGGMap lat={10.790045841510906} lng={106.71802615681743}></LocationSectionGGMap>
            </div>
          }}>
          </Responsive>
        </Container>

        <Container textAlign='left'  >
          <p>
            District 1 in Ho Chi Minh City is the true heart of the city and still shows the architectural influence of the French. It does not only  include most of the city’s administrative offices and consulates, but also some of the most famous buildings, such as the Saigon Notre-Dame Basilica and the Opera House.        </p>
          <p>
            Our location at 74/1 Hai Ba Trung is opposite the Park Hyatt Hotel and offers a four-floor open space building with floor to ceiling windows and partial balcony. The ground floor with its open kitchen and bar area, is not only the pulse of the restaurant, but also the welcome and lingering area.</p>
          <p>
            With a rooftop having a stunning view of Saigon, this location is a preferred place for couples, families, business occasions and larger celebrating groups alike. In addition, the location offers private dining rooms as well as an exclusive event floor, for further details please visit our
                        <strong><Link href="/private-dining-events"> Private Dining | Events</Link></strong>      page.

                    </p>
          <p>
            Please note that this location has a smoking area on the ground floor, all other floors are non-smoking areas. Parking of motorbikes in front of the restaurant is allowed, car parking is available at Park Hyatt.
                    </p>
        </Container>
        <Container textAlign="center" style={{ paddingBottom: "20px" }}>
          <ButtonCustomComponent name="Private Dining | Event Request" url="/private-dining-events" />
        </Container>
      </Container>
      <div>
      </div>
    </Layout >
  )
}
export default Location;