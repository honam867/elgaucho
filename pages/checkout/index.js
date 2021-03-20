import {
  Button,
  Container,
  Header,
  Table,
  Card,
  Transition,
  Divider,
  Form,
  Grid,
  TextArea,
  Checkbox,
} from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import { connect } from "react-redux";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../../redux/cart/cart.actions";
import ButtonCustomComponent from "../../components/ButtonCustomComponent";
import React, { useState, useEffect, useRef } from "react";
const CustomHeader = styled(Header)`
  color: black !important;
  font-weight: 900 !important;
`;
const CustomButton = styled(Button)`
  color: #fff !important;
  background-color: #cf1b15 !important;
`;

const CustomStrong = styled.strong`
  color: #cf1b15 !important;
  font-weight: bold !important;
`;

const CheckOut = ({ items }) => {
  let listCart = [];
  let totalCart = 0;
  let VAT = 0;
  let cartTotal = 0;
  Object.keys(items.Carts).forEach((item) => {
    totalCart += items.Carts[item].quantity * items.Carts[item].price;
    VAT = (totalCart * 10) / 100;
    cartTotal = totalCart + VAT;
    listCart.push(items.Carts[item]);
  });
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const [visibleShip, setVisibleShip] = useState(false);
  const toggleVisibilityShip = () => {
    setVisibleShip(!visibleShip);
  };
  return (
    <Layout>
      <div style={{ backgroundColor: "whitesmoke", paddingTop: "5%" }}>
        <Container textAlign="center">
          <p style={{ color: "#cf1b15", fontWeight: "bold" }}>
            NOTE: If your prefer to pick up your order please note that when you
            check out in the “comments – message” area of the check-out process.
            We will call you to confirm your preference of pick-up time.
          </p>
          <CustomHeader as="h2">
            Please note that the minimum order for El Delivery is 1,000,000 VND.
          </CustomHeader>
          <p style={{ color: "#cf1b15", fontWeight: "bold" }}>
            Place your order between 11:00 and 22:00 Daily for Delivery
          </p>
          <p>Questions?</p>
          <p>
            Call Us HCMC:{" "}
            <strong>
              <a href="tel:+84 28 38 272 090">+84 28 38 272 090</a>
            </strong>
          </p>
          <p>
            Call Us Hanoi:{" "}
            <strong>
              <a href="tel:+84 24 37 186 991">+84 24 37 186 991</a>
            </strong>
          </p>
          <p>
            Call Us Da Nang:{" "}
            <strong>
              <a href="tel:+84 23 63 886 474">+84 23 63 886 474</a>
            </strong>
          </p>
          <Card fluid>
            <Card.Content
              textAlign="left"
              style={{ fontSize: "15px", marginLeft: "20px" }}
            >
              Returning customer?{" "}
              <a onClick={toggleVisibility} href="#">
                Click here to login
              </a>
            </Card.Content>
          </Card>
          <Divider style={{ margin: "0px" }} hidden />
          <Transition visible={visible} animation="slide down" duration={300}>
            <Card fluid>
              <Card.Content
                textAlign="left"
                style={{ fontSize: "15px", marginLeft: "20px" }}
              >
                <p>
                  If you have shopped with us before, please enter your details
                  below. If you are a new customer, please proceed to the
                  Billing section.
                </p>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Input fluid label="Username or email *" />
                    <Form.Input fluid label="Password *" />
                  </Form.Group>
                  <Form.Checkbox label=" Remember me" />
                  <CustomButton type="submit">Login</CustomButton>
                  <a style={{ marginLeft: "10px" }} href="#">
                    Lost your password?
                  </a>
                </Form>
              </Card.Content>
            </Card>
          </Transition>
        </Container>
      </div>
      <div style={{ backgroundColor: "whitesmoke", paddingBottom: "3%" }}>
        <Container>
          <Form>
            <CustomHeader as="h3"> Billing details</CustomHeader>
            <Form.Checkbox
              onClick={toggleVisibilityShip}
              label="Ship to a different address?"
            />
        {
          (visibleShip) ? 
          <Grid columns={2} stackable>
          <Grid.Column width={8}>
            <Form.Group widths="equal">
              <Form.Input fluid label="First name *" />
              <Form.Input fluid label="Last name  *" />
            </Form.Group>
            <Form.Input fluid label="Country / Region *" />
            <Form.Field>
              <label>Street address *</label>
              <input placeholder="House number and street name" />
            </Form.Field>
            <Form.Field>
              <label>Postcode / ZIP (optional)</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Town / City *</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Phone *</label>
              <input />
            </Form.Field>
            <Form.Field>
              <label>Email address *</label>
              <input />
            </Form.Field>
            <Form.Checkbox label="Create an account?" />
          </Grid.Column>
          <Grid.Column width={8}>
            <Divider style={{ margin: "0px" }} hidden />
            <Transition
              visible={visibleShip}
              animation="slide down"
              duration={300}
            >
              <div>
                <Form.Group widths="equal">
                  <Form.Input fluid label="First name *" />
                  <Form.Input fluid label="Last name  *" />
                </Form.Group>
                <Form.Input fluid label="Country / Region *" />
                <Form.Field>
                  <label>Street address *</label>
                  <input placeholder="House number and street name" />
                </Form.Field>
                <Form.Field>
                  <label>Postcode / ZIP (optional)</label>
                  <input />
                </Form.Field>
                <Form.Field>
                  <label>Town / City *</label>
                  <input />
                </Form.Field>
                <Form.Field
                  style={{ minHeight: 116 }}
                  control={TextArea}
                  label="Order notes (optional)"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                />
              </div>
            </Transition>
          </Grid.Column>
        </Grid>
        :
       
          <Container>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name *" />
            <Form.Input fluid label="Last name  *" />
          </Form.Group>
          <Form.Input fluid label="Country / Region *" />
          <Form.Field>
            <label>Street address *</label>
            <input placeholder="House number and street name" />
          </Form.Field>
          <Form.Field>
            <label>Postcode / ZIP (optional)</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Town / City *</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Phone *</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Email address *</label>
            <input />
          </Form.Field>
          <Form.Checkbox label="Create an account?" />
          </Container>
        }
          </Form>
        </Container>
      </div>
      <div style={{ backgroundColor: "whitesmoke", paddingBottom: "2%" }}>
        <Container>
          <CustomHeader as="h3"> Your order</CustomHeader>
          <Table fluid size="small" celled unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="left">PRODUCT</Table.HeaderCell>
                <Table.HeaderCell textAlign="left">SUBTOTAL</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {listCart.map((item, i) => {
                return (
                  <Table.Row key={i}>
                    <Table.Cell width="13">
                      <a style={{ fontSize: "10px", color: "black" }}>
                        {item.name}{" "}
                        <span style={{ color: "red", fontSize: "12px" }}>
                          x {item.quantity}
                        </span>{" "}
                      </a>
                    </Table.Cell>
                    <Table.Cell textAlign="left" width="6">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol">
                            VND
                          </span>
                          &nbsp;
                          {item.totalPriceOfProduct.toLocaleString("en-US")}
                        </bdi>
                      </span>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
              <Table.Row>
                <Table.Cell>
                  <b>SUBTOTAL</b>
                </Table.Cell>
                <Table.Cell>VND {totalCart.toLocaleString("en-US")}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SHIPPING</Table.Cell>
                <Table.Cell>Free shipping</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <b>VAT</b>
                </Table.Cell>
                <Table.Cell>VND {VAT.toLocaleString("en-US")}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>TOTAL</Table.Cell>
                <Table.Cell>
                  {" "}
                  <CustomStrong>
                    VND {cartTotal.toLocaleString("en-US")}
                  </CustomStrong>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

          <Card fluid>
            <Card.Content
              textAlign="left"
              style={{ fontSize: "15px", marginLeft: "20px" }}
            >
              <Card fluid>
                <Card.Content>
                  <b>PayPal</b>{" "}
                  <img
                    src="https://vn.elgaucho.asia/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  ></img>{" "}
                  <a href="https://www.paypal.com/vn/webapps/mpp/paypal-popup">
                    <b> What is PayPal?</b>
                  </a>
                  <p style={{ padding: "10px" }}>
                    Pay via PayPal; You can pay with your credit card if you
                    don’t have a PayPal account. <br />
                    The prices will be converted to USD in the PayPal pages with
                    the exchange rate USD / VND = 23000.
                  </p>
                  <p></p>
                </Card.Content>
              </Card>
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <a>privacy policy.</a>
              </p>
              <Checkbox label=" I have read and agree to the website terms and conditions *" />
              <br />
              <ButtonCustomComponent name="Proceed to PayPal" url="/checkout" />
            </Card.Content>
          </Card>
        </Container>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.cart,
  };
};
export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(CheckOut);
