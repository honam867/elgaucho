import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  List,
  Segment,
  TextArea,
} from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import SliderComponent from "../../components/SliderComponent";
import SrcImg1 from "../../public/static/img/El-Gaucho-Argentinian-Steakhouse-Restaurant-Private-Dining-Event-2.jpg";
import SrcImgLocation1 from "../../public/static/img/Estellla.jpg";
import SrcImgLocation2 from "../../public/static/img/Hai-Ba-Trung-2.jpg";
import SrcImgLocation3 from "../../public/static/img/Hai-Ba-Trung-Private-1.jpg";
import SrcImgLocation4 from "../../public/static/img/Phu-My-Hung-3.jpg";
import SrcImgLocation5 from "../../public/static/img/Phu-My-Hung-7.jpg";
const CustomButton = styled(Button)`
  &:hover {
    color: #cf1b15;
    background: #fff;
    border: 1px solid #cf1b15;
  }
  background: #cf1b15;
  color: #fff;
`;

const ContentAnimationLeft = styled.div`
  animation: LocationSection 1s;
  @keyframes LocationSection {
    0% {
      opacity: 0;
      transform: translateX(-700px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
const ContentAnimationRight = styled.div`
  animation: FormSection 1s;
  @keyframes FormSection {
    0% {
      opacity: 0;
      transform: translateX(700px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Images = [
  {
    id: 1,
    name: "Img 1",
    imgUrl: SrcImg1,
    title: "PRIVATE DINING | EVENTS",
    opacity: 0.8,
  },
];
const ImagesLocation = [
  {
    id: 1,
    name: "ESTELLA PLACE",
    imgUrl: SrcImgLocation1,
    opacity: 1,
  },
  {
    id: 1,
    name: "HAI BA TRUNG",
    imgUrl: SrcImgLocation2,
    opacity: 1,
  },
  {
    id: 1,
    name: "HAI BA TRUNG",
    imgUrl: SrcImgLocation3,
    opacity: 1,
  },
  {
    id: 1,
    name: "PHU MY HUNG",
    imgUrl: SrcImgLocation4,
    opacity: 1,
  },
  {
    id: 1,
    name: "PHU MY HUNG",
    imgUrl: SrcImgLocation5,
    opacity: 1,
  },
];
const locations = [
  {
    key: "1",
    text: "74/1 Hai Ba Trung, D1, HCMC",
    value: "74/1 Hai Ba Trung, D1, HCMC",
  },
  {
    key: "2",
    text: "Estella Place, An Phu, D2, HCMC",
    value: "Estella Place, An Phu, D2, HCMC",
  },
  {
    key: "3",
    text: "Saigon Pearl, Dist 2, HCMC",
    value: "Saigon Pearl, Dist 2, HCMC",
  },
  {
    key: "4",
    text: "77 Xuan Thuy, Thao Dien, D2, HCMC",
    value: "77 Xuan Thuy, Thao Dien, D2, HCMC",
  },
  {
    key: "5",
    text: "The Crescent, Phu My Hung, D7, HCMC",
    value: "The Crescent, Phu My Hung, D7, HCMC",
  },
  {
    key: "6",
    text: "Indochina Riverside Mall, Hai Chau, DA NANG",
    value: "Indochina Riverside Mall, Hai Chau, DA NANG",
  },
  {
    key: "7",
    text: "Vincom Center Metropolis, Ba Dinh, HA NOI",
    value: "Vincom Center Metropolis, Ba Dinh, HA NOI",
  },
  {
    key: "8",
    text: "Somerset West Point, West Lake, HANOI",
    value: "Somerset West Point, West Lake, HANOI",
  },
  {
    key: "9",
    text: "No.11 Trang Tien Street, Hoan Kiem, HANOI",
    value: "No.11 Trang Tien Street, Hoan Kiem, HANOI",
  },
];

const events = [
  {
    key: "1",
    text: "Birthday",
    value: "Birthday",
  },
  {
    key: "2",
    text: "Anniversary",
    value: "Anniversary",
  },
  {
    key: "3",
    text: "Business Meeting",
    value: "Business Meeting",
  },
  {
    key: "4",
    text: "Corporate Event",
    value: "Corporate Event",
  },
  {
    key: "5",
    text: "Party",
    value: "Party",
  },
  {
    key: "6",
    text: "Other",
    value: "Other",
  },
];

const partysize = [
  {
    key: "1",
    text: "3 people",
    value: "3 people",
  },
  {
    key: "2",
    text: "4 people",
    value: "4 people",
  },
  {
    key: "3",
    text: "5 people",
    value: "5 people",
  },
  {
    key: "4",
    text: "6 people",
    value: "6 people",
  },
  {
    key: "5",
    text: "7 people",
    value: "7 people",
  },
  {
    key: "6",
    text: "8 people",
    value: "8 people",
  },
  {
    key: "6",
    text: "9 people",
    value: "9 people",
  },
  {
    key: "6",
    text: "10 person",
    value: "10 person",
  },
  {
    key: "6",
    text: "11-20 people",
    value: "11-20 people",
  },
  {
    key: "6",
    text: "21-30 people",
    value: "21-30 people",
  },
  {
    key: "6",
    text: "31-40 people",
    value: "31-40 people",
  },
  {
    key: "6",
    text: "41-50 people",
    value: "41-50 people",
  },
  {
    key: "6",
    text: "51-60 people",
    value: "51-60 people",
  },
  {
    key: "6",
    text: "71-80 people",
    value: "71-80 people",
  },
  {
    key: "6",
    text: "81-90 people",
    value: "81-90 people",
  },
  {
    key: "6",
    text: "91-100 people",
    value: "91-100 people",
  },
  {
    key: "6",
    text: "101-110 people",
    value: "101-110 people",
  },
  {
    key: "6",
    text: "121-130 people",
    value: "121-130 people",
  },
  {
    key: "6",
    text: "131-140 people",
    value: "131-140 people",
  },
  {
    key: "6",
    text: "141-150 people",
    value: "141-150 people",
  },
];
const times = [
  {
    key: "1",
    text: "11:30 AM",
    value: "11:30 AM",
  },
  {
    key: "2",
    text: "12:00 AM",
    value: "12:00 AM",
  },
  {
    key: "3",
    text: "12:30 AM",
    value: "12:30 AM",
  },
  {
    key: "4",
    text: "1:00 PM",
    value: "1:00 PM",
  },
  {
    key: "5",
    text: "1:30 PM",
    value: "1:30 PM",
  },
  {
    key: "6",
    text: "2:00 PM",
    value: "2:00 PM",
  },
  {
    key: "7",
    text: "2:30 PM",
    value: "2:30 PM",
  },
  {
    key: "8",
    text: "3:00 PM",
    value: "3:00 PM",
  },
  {
    key: "9",
    text: "3:30 PM",
    value: "3:30 PM",
  },
  {
    key: "10",
    text: "4:00 PM",
    value: "4:00 PM",
  },
  {
    key: "11",
    text: "4:30 PM",
    value: "4:30 PM",
  },
  {
    key: "12",
    text: "5:00 PM",
    value: "5:00 PM",
  },
  {
    key: "13",
    text: "5:30 PM",
    value: "5:30 PM",
  },
  {
    key: "14",
    text: "6:00 PM",
    value: "6:00 PM",
  },
  {
    key: "15",
    text: "6:30 PM",
    value: "6:30 PM",
  },
  {
    key: "16",
    text: "7:00 PM",
    value: "7:00 PM",
  },
  {
    key: "17",
    text: "7:30 PM",
    value: "7:30 PM",
  },
  {
    key: "18",
    text: "8:00 PM",
    value: "8:00 PM",
  },
  {
    key: "19",
    text: "8:30 PM",
    value: "8:30 PM",
  },
];

const PrivateDiningEvent = () => {
  return (
    <Layout>
      <SliderComponent
        Images={Images}
        height="45vh"
        fromPrivateDiningEventPages={true}
        backgroundOpacity={true}
      />
      <Container
        style={{
          background: "#eaeaea",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
        fluid
      >
        <Container textAlign="center" style={{ color: "black" }}>
          <Header textAlign="center" as="h3">
            OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED
          </Header>
          <p style={{ textAlign: "justify" }}>
            Some of our restaurants have designated private dining rooms, event
            spaces or fully dedicated event floors, where we regularly host
            business and private lunches, dinners, functions and parties.
            Private rooms, event spaces and exclusive floors are based on
            consumption of the guests only and no additional room or floor
            charge is applicable.{" "}
          </p>
        </Container>
      </Container>
      <div>
        <Container fluid style={{ padding: "15px" }}>
          <Grid columns={2} stackable>
            <Grid.Column width={10}>
              <ContentAnimationLeft>
                <Header textAlign="center">
                  We are offering three options for private dining and larger
                  event groups:
                </Header>

                <Container textAlign="left">
                  <List bulleted>
                    <List.Item
                      style={{ lineHeight: "1.65em", textAlign: "justify" }}
                    >
                      The first option is that your group dines based on our a
                      la carte menu. This option is not only the recommended
                      option by our restaurant, but also the preferred option of
                      all larger groups we are hosting, as it allows the full
                      dining experience and the uniqueness of what our
                      restaurant stands for.
                    </List.Item>
                    <List.Item
                      style={{ lineHeight: "1.65em", textAlign: "justify" }}
                    >
                      As a second option, we can offer you a set menu containing
                      of a variety of our bestsellers with a fixed sum per
                      person on the food. In this case, we can order for you in
                      advance, all to share, that you can fully concentrate on
                      your dining, enjoying the company of your guests, while
                      having a clear pricing in your mind.
                    </List.Item>
                    <List.Item
                      style={{ lineHeight: "1.65em", textAlign: "justify" }}
                    >
                      Furthermore, casual and standing events with pass-around
                      food are possible as well and we would discuss this with
                      you to find the individual approach you wish for.
                    </List.Item>
                  </List>
                </Container>
                <Header as="h5" textAlign="center" style={{ color: "#CF1315" }}>
                  Here are a few examples of the venues available
                </Header>
                <Container>
                  <SliderComponent
                    Images={ImagesLocation}
                    height="60vh"
                    backgroundOpacity={true}
                    fromPrivateDiningEventPagesSection={true}
                  />
                </Container>
              </ContentAnimationLeft>
            </Grid.Column>

            <Grid.Column width={6}>
              <ContentAnimationRight>
                <Header textAlign="center" as="h5">
                  Please complete the form below while choosing your desired
                  location and we will be glad to support you in creating a
                  memorable experience.
                </Header>
                <Segment style={{ background: "#f5f5f5" }}>
                  <Header as="h5">Private Dining | Event Request</Header>
                  <p style={{ textAlign: "justify" }}>
                    Plan your special occasion or event with us. Simply fill out
                    the form below and we will contact you promptly to organise
                    and support you in creating a memorable experience. If you
                    would like to check availability or special requests
                    immediately, please feel free to call us directly at{" "}
                    <span style={{ color: "#CF1315" }}>+84 28 38 272 090</span>{" "}
                    .
                  </p>
                  <Form>
                    <Form.Field>
                      <Form.Select
                        fluid
                        label="Location: *"
                        options={locations}
                        placeholder="Location"
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Select
                        fluid
                        label="Event Type: *"
                        options={events}
                        placeholder="Location"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Date: *</label>
                      <input type="date" />
                    </Form.Field>
                    <Form.Field>
                      <Form.Select
                        fluid
                        label="Party Size: *"
                        options={partysize}
                        placeholder="Party Size"
                      />
                    </Form.Field>
                    <Form.Field>
                      <Form.Select
                        fluid
                        label="Time: *"
                        options={times}
                        placeholder="Time"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>First Name: *</label>
                      <input placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                      <label>Last Name: *</label>
                      <input placeholder="Last Name" />
                    </Form.Field>
                    <Form.Field>
                      <label>Email: *</label>
                      <input placeholder="Email" />
                    </Form.Field>
                    <Form.Field>
                      <label>Phone: *</label>
                      <input placeholder="Phone" />
                    </Form.Field>
                    <Form.Field
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Message"
                      placeholder="Message"
                    />
                    <CustomButton type="submit">Submit</CustomButton>
                  </Form>
                </Segment>
              </ContentAnimationRight>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};
export default PrivateDiningEvent;
