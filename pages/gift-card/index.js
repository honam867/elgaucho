import {
  Button,
  Container,
  Header,
  Transition,
  Divider,
  Icon,
  Image,
  Grid,
  Card,
  Input,
  Label,
} from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import styleGiftCard from "./giftcard.module.css";
import React, { useState } from "react";
import { CustomButton } from "../../components/UiCustomElement/button";
import Head from "next/head";

const CustomHeader = styled(Header)`
  color: black !important;
  font-weight: 300 !important;
`;

const GiftCard = () => {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Head>
        <meta name="Description" content="Gift Card Page." />
        <link rel="icon" href="static/img/elgauchologo.png" />
      </Head>
      <Layout>
        <div className={styleGiftCard.bg}>
          <CustomHeader
            as="h2"
            style={{ margin: "auto", width: "80%", color: "white" }}
          >
            Send Friends, Associates or Loved Ones the Gift of Dining with a few
            taps!
          </CustomHeader>
          <CustomHeader
            as="h3"
            style={{
              width: "80%",
              color: "white",
              margin: "30px auto",
            }}
          >
            Great for any occasion like Anniversary, Birthday, Mother‘s and
            Father’s Day or any other Special Event as well as a great gift for
            Employees or Co-workers.
          </CustomHeader>
          <p style={{ color: "black" }}>
            Fill out the Gift Card below and we will send it to your recipient
            for you.
          </p>

          <Grid container stackable columns="2">
            <Grid.Row>
              <Grid.Column>
                <Container textAlign="left">
                  <CustomButton fluid onClick={toggleVisibility}>
                    <Icon
                      name={
                        visible ? "minus square outline" : "plus square outline"
                      }
                    />
                    Need some help? - Instructions to Send Gift Card
                  </CustomButton>
                  <Divider style={{ margin: "7px" }} hidden />
                  <Transition
                    visible={visible}
                    animation="slide down"
                    duration={300}
                  >
                    <ul
                      style={{
                        color: "white",
                        background: "#cf1b15 ",
                        marginTop: "-14px",
                        padding: "21px 35px",
                        lineHeight: "24px",
                      }}
                    >
                      <li>
                        Enter the amount of your Gift (min $25)&nbsp; and select
                        “Buy”.
                      </li>
                      <li>
                        Select “someone else” or to “yourself” if you want to
                        print the card and present it to the recipient.
                      </li>
                      <li>
                        Select the quantity of cards you want to send (usually
                        1).
                      </li>
                      <li>Enter your name to be printed on the card.</li>
                      <li>
                        Enter the Recipients name. (the person’s name you want
                        to send your Card to)
                      </li>
                      <li>
                        Enter the email address you want to send the card to.
                        (please be careful to enter the email address accurately
                        so your card gets delivered).
                      </li>
                      <li>
                        Choose “send immediately” or if you want to “schedule a
                        date” to send you card.
                      </li>
                      <li>Add your personal message to your card.</li>
                      <li>Select “Continue”.</li>
                      <li>
                        View the Summary to verify everything is as you want it.
                        If you need to change anything simply use your browser
                        “back button” to go back to the previous screen.
                      </li>
                      <li>
                        Enter your email address to send yourself the receipt.
                      </li>
                      <li>
                        Select Pay with Paypal (you don’t have to have a PayPal
                        account to complete your order).
                      </li>
                      <li>
                        You will get a confirmation email as well as a
                        confirmation notice on this page.
                      </li>
                    </ul>
                  </Transition>
                </Container>
              </Grid.Column>
              <Grid.Column>
                <Container>
                  <Image
                    centered
                    src="https://cdn.giftup.app/assets/6501c9d7-0735-4be8-8d88-6116f70a2ac7/artwork_ebfa930b-f359-49d3-996e-19087a79c154.png?cb=717c9ceb-fd77-4a9c-8899-c2ea5c4b26df"
                    size="large"
                  />
                </Container>
                <Container style={{ paddingTop: "10px" }} fluid>
                  <Grid centered columns={1}>
                    <Grid.Column computer={15} mobile={16}>
                      <Card fluid>
                        <Card.Content>
                          <Grid stackable columns={2}>
                            <Grid.Column
                              textAlign="left"
                              style={{ display: "flex", alignItems: "center" }}
                              computer={8}
                              tablet={6}
                              mobile={16}
                            >
                              <CustomHeader as="h3">
                                Choose an amount…
                              </CustomHeader>
                            </Grid.Column>
                            <Grid.Column
                              only="computer table"
                              textAlign="right"
                              computer={8}
                              tablet={10}
                            >
                              <Input action labelPosition="right">
                                <Label basic>$</Label>
                                <input style={{ width: "90px" }} />
                                <CustomButton type="button">Buy</CustomButton>
                              </Input>
                            </Grid.Column>
                            <Grid.Column
                              only="mobile"
                              textAlign="left"
                              mobile={16}
                            >
                              <Input action labelPosition="right">
                                <Label basic>$</Label>
                                <input />
                                <CustomButton type="button">Buy</CustomButton>
                              </Input>
                            </Grid.Column>
                          </Grid>
                        </Card.Content>
                        <Card.Content textAlign="center">
                          <p style={{ color: "black", textAlign: "justify" }}>
                            To redeem your Gift Card please present it to your
                            Waitstaff to scan. You can simply show the card from
                            the email you received. Please note your card will
                            expire 6 months after the issued date. Please redeem
                            your card before the valid until date. All Gift Card
                            purchases are final and there are no refunds for
                            unused Gift Cards.
                          </p>
                          <p style={{ color: "red" }}>
                            {" "}
                            <u>Check your gift card balance</u>
                          </p>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  </Grid>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Layout>
    </>
  );
};
export default GiftCard;
