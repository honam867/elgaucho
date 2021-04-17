import {
  Button,
  Container,
  Header,
  Image,
  Table,
  Icon,
  Input,
  Item,
  Modal,
  Label,
} from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import Responsive from "../../components/Responsive";
import { connect } from "react-redux";
import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../../redux/cart/cart.actions";
import { useState } from "react";
import ButtonLink from "../../components/UiCustomElement/button-link";
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

const Cart = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) => {
  let listCart = [];
  let totalCart = 0;
  let VAT = 0;
  let priceDiscount = 0;
  let cartTotal = 0;
  Object.keys(items.Carts).forEach((item) => {
    // let priceAfterParse = items.Carts[item].prices.replace(/[^0-9]/g, "");
    // let priceOfProduct = Number(priceAfterParse)
    totalCart += items.Carts[item].quantity * items.Carts[item].price;
    VAT = (totalCart * 10) / 100;
    priceDiscount = (totalCart * 50) / 100;
    cartTotal = totalCart + VAT;
    listCart.push(items.Carts[item]);
  });
  const [open, setOpen] = useState(false);
  const [isActiveCode, setActive] = useState(false);
  function applyCode() {
    setOpen(false);
    setActive(true);
  }
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

          <p>Không lấy dụng cụ ăn uống nhựa | No plastic cutlery provided</p>
        </Container>
      </div>
      {/* <div className={styleCart.outsideBg}>
        <div className={styleCart.alignItem}> */}

      <Responsive
        onDesktop={() => {
          return (
            <div style={{ backgroundColor: "whitesmoke", paddingBottom: "3%" }}>
              <Container textAlign="center">
                <Table celled padded>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell singleLine></Table.HeaderCell>
                      <Table.HeaderCell></Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        PRODUCT
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        PRICE
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        QUANTITY
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        SUBTOTAL
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {/* TODO loop product here ! */}
                    {listCart.length > 0 ? (
                      listCart.map((item, i) => {
                        return (
                          <Table.Row key={i}>
                            <Table.Cell width="1" textAlign="center">
                              <Icon
                                onClick={() => DeleteCart(i)}
                                style={{ cursor: "pointer" }}
                                name="times"
                                size="small"
                                color="red"
                              />
                            </Table.Cell>
                            <Table.Cell width="2">
                              <Image size="tiny" src={item.imageUrl} />
                            </Table.Cell>
                            <Table.Cell width="6">
                              <a style={{ fontSize: "15px" }}>{item.name}</a>
                              <p style={{ fontSize: "12px" }}>
                                Addition: Medium
                              </p>
                            </Table.Cell>
                            <Table.Cell width="3" textAlign="center">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  {item.price.toLocaleString("es-US")} &nbsp;VND
                                </bdi>
                              </span>
                            </Table.Cell>
                            <Table.Cell width="1">
                              <Input
                                style={{ width: "40%", marginLeft: "15%" }}
                                size="mini"
                                type="text"
                              >
                                <Button
                                  onClick={() => IncreaseQuantity(i)}
                                  icon
                                >
                                  <Icon name="plus" />
                                </Button>
                                <input
                                  value={item.quantity}
                                  style={{ textAlign: "center" }}
                                />
                                <Button
                                  style={{ marginLeft: "3px" }}
                                  size="mini"
                                  onClick={() => DecreaseQuantity(i)}
                                  icon
                                >
                                  <Icon name="minus" />
                                </Button>
                              </Input>
                            </Table.Cell>
                            <Table.Cell textAlign="center" width="3">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  {item.totalPriceOfProduct.toLocaleString(
                                    "es-US"
                                  )}{" "}
                                  &nbsp;VND
                                </bdi>
                              </span>
                            </Table.Cell>
                          </Table.Row>
                        );
                      })
                    ) : (
                      <div>No item</div>
                    )}
                  </Table.Body>
                </Table>
                <CustomHeader as="h3">CART TOTALS</CustomHeader>
                <div
                  style={{
                    width: "50%",
                    margin: "10px auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Table size="small" definition collapsing>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>SUBTOTAL</Table.Cell>
                        <Table.Cell>
                          {totalCart.toLocaleString("en-US")} &nbsp;VND
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>SHIPPING</Table.Cell>
                        <Table.Cell>
                          Free shipping Shipping options will be updated during
                          checkout.
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>VAT</Table.Cell>
                        <Table.Cell>
                          {VAT.toLocaleString("en-US")} &nbsp;VND
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Voucher</Table.Cell>
                        <Table.Cell>
                          {isActiveCode ? (
                            <div>
                              <Label color="teal" size="large">
                                XQW12
                              </Label>
                              <Button
                                onClick={() => setActive(false)}
                                floated="right"
                                compact
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Modal
                              onClose={() => setOpen(false)}
                              onOpen={() => setOpen(true)}
                              open={open}
                              trigger={
                                <Button floated="right" compact>
                                  Discount
                                </Button>
                              }
                              size="tiny"
                            >
                              <Modal.Content scrolling>
                                <Item.Group divided>
                                  <Item>
                                    <Item.Image
                                      size="small"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content>
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>

                                  <Item>
                                    <Item.Image
                                      size="small"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content>
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>
                                  <Item>
                                    <Item.Image
                                      size="small"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content>
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>
                                </Item.Group>
                              </Modal.Content>
                              <Modal.Actions>
                                <Button
                                  color="red"
                                  onClick={() => setOpen(false)}
                                >
                                  Cancel
                                </Button>
                              </Modal.Actions>
                            </Modal>
                          )}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>TOTAL</Table.Cell>
                        <Table.Cell>
                          {isActiveCode ? (
                            <div>
                              <CustomStrong>
                                {priceDiscount.toLocaleString("en-US")} VND
                              </CustomStrong>
                              <a style={{ color: "black" }}>
                                &nbsp;{" "}
                                <strike>
                                  {cartTotal.toLocaleString("en-US")} VND
                                </strike>
                              </a>
                            </div>
                          ) : (
                            <CustomStrong>
                              {cartTotal.toLocaleString("en-US")} VND
                            </CustomStrong>
                          )}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>

                {listCart.length > 0 ? (
                  <ButtonLink name="Proceed to checkout" url="/checkout" />
                ) : (
                  <CustomButton style={{ display: "none" }}>
                    Proceed to checkout
                  </CustomButton>
                )}
              </Container>
            </div>
          );
        }}
        onTablet={() => {
          return (
            <div style={{ backgroundColor: "whitesmoke", paddingBottom: "3%" }}>
              <Container textAlign="center">
                <Table celled padded>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell singleLine></Table.HeaderCell>
                      <Table.HeaderCell></Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        PRODUCT
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        PRICE
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        QUANTITY
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        SUBTOTAL
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {/* TODO loop product here ! */}
                    {listCart.length > 0 ? (
                      listCart.map((item, i) => {
                        return (
                          <Table.Row key={i}>
                            <Table.Cell width="1" textAlign="center">
                              <Icon
                                onClick={() => DeleteCart(i)}
                                style={{ cursor: "pointer" }}
                                name="times"
                                size="small"
                                color="red"
                              />
                            </Table.Cell>
                            <Table.Cell width="2">
                              <Image size="tiny" src={item.urlImage} />
                            </Table.Cell>
                            <Table.Cell width="6">
                              <a style={{ fontSize: "12px" }}>{item.name}</a>
                            </Table.Cell>
                            <Table.Cell width="3" textAlign="center">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>&nbsp;{item.prices}</bdi>
                              </span>
                            </Table.Cell>
                            <Table.Cell width="1">
                              <Input
                                style={{ width: "40%", marginLeft: "15%" }}
                                size="mini"
                                type="text"
                              >
                                <Button
                                  onClick={() => IncreaseQuantity(i)}
                                  icon
                                >
                                  <Icon name="plus" />
                                </Button>
                                <input
                                  value={item.quantity}
                                  style={{ textAlign: "center" }}
                                />
                                <Button
                                  style={{ marginLeft: "3px" }}
                                  size="mini"
                                  onClick={() => DecreaseQuantity(i)}
                                  icon
                                >
                                  <Icon name="minus" />
                                </Button>
                              </Input>
                            </Table.Cell>
                            <Table.Cell textAlign="center" width="3">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>
                                  <span className="woocommerce-Price-currencySymbol">
                                    VND
                                  </span>
                                  &nbsp;
                                  {item.totalPriceOfProduct.toLocaleString(
                                    "en-US"
                                  )}
                                </bdi>
                              </span>
                            </Table.Cell>
                          </Table.Row>
                        );
                      })
                    ) : (
                      <div>No item</div>
                    )}
                  </Table.Body>
                  <Table.Footer fullWidth>
                    <Table.Row>
                      <Table.HeaderCell colSpan="6">
                        <Button
                          style={{ color: "#fff", background: "#cf1b15" }}
                          floated="right"
                          icon
                          labelPosition="left"
                          primary
                          size="small"
                        >
                          <Icon name="undo" /> Update cart
                        </Button>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>
                <CustomHeader as="h3">CART TOTALS</CustomHeader>
                <div
                  style={{
                    width: "50%",
                    margin: "10px auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Table size="small" definition collapsing>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>SUBTOTAL</Table.Cell>
                        <Table.Cell>
                          VND {totalCart.toLocaleString("en-US")}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>SHIPPING</Table.Cell>
                        <Table.Cell>
                          Free shipping Shipping options will be updated during
                          checkout.
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>VAT</Table.Cell>
                        <Table.Cell>
                          VND {VAT.toLocaleString("en-US")}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Voucher</Table.Cell>
                        <Table.Cell>
                          {isActiveCode ? (
                            <div>
                              <Label color="teal" size="large">
                                XQW12
                              </Label>
                              <Button
                                onClick={() => setActive(false)}
                                floated="right"
                                compact
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Modal
                              onClose={() => setOpen(false)}
                              onOpen={() => setOpen(true)}
                              open={open}
                              trigger={
                                <Button floated="right" compact>
                                  Discount
                                </Button>
                              }
                              size="tiny"
                            >
                              <Modal.Content scrolling>
                                <Item.Group divided>
                                  <Item>
                                    <Item.Image
                                      size="small"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content>
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>

                                  <Item>
                                    <Item.Image
                                      size="small"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content>
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>
                                  <Item>
                                    <Item.Image
                                      size="small"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content>
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>
                                </Item.Group>
                              </Modal.Content>
                              <Modal.Actions>
                                <Button
                                  color="red"
                                  onClick={() => setOpen(false)}
                                >
                                  Cancel
                                </Button>
                              </Modal.Actions>
                            </Modal>
                          )}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>TOTAL</Table.Cell>
                        <Table.Cell>
                          {isActiveCode ? (
                            <div>
                              <CustomStrong>
                                {priceDiscount.toLocaleString("en-US")} VND
                              </CustomStrong>
                              <a style={{ color: "black" }}>
                                &nbsp;{" "}
                                <strike>
                                  {cartTotal.toLocaleString("en-US")} VND
                                </strike>
                              </a>
                            </div>
                          ) : (
                            <CustomStrong>
                              {cartTotal.toLocaleString("en-US")} VND
                            </CustomStrong>
                          )}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
                {listCart.length > 0 ? (
                  <CustomButton>Proceed to checkout</CustomButton>
                ) : (
                  <CustomButton style={{ display: "none" }}>
                    Proceed to checkout
                  </CustomButton>
                )}
              </Container>
            </div>
          );
        }}
        onMobile={() => {
          return (
            <div style={{ backgroundColor: "whitesmoke", paddingBottom: "3%" }}>
              <Container fluid textAlign="center">
                <Table celled unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell singleLine></Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        PRODUCT
                      </Table.HeaderCell>
                      <Table.HeaderCell textAlign="center">
                        PRICE
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {listCart.length > 0 ? (
                      listCart.map((item, i) => {
                        return (
                          <Table.Row key={i}>
                            <Table.Cell width="1" textAlign="center">
                              <Icon
                                onClick={() => DeleteCart(i)}
                                style={{ cursor: "pointer" }}
                                name="times"
                                size="small"
                                color="red"
                              />
                            </Table.Cell>

                            <Table.Cell width="4">
                              <a style={{ fontSize: "12px" }}>{item.name}</a>
                            </Table.Cell>
                            <Table.Cell width="2" textAlign="center">
                              <span className="woocommerce-Price-amount amount">
                                <bdi>&nbsp;{item.prices}</bdi>
                              </span>
                            </Table.Cell>
                          </Table.Row>
                        );
                      })
                    ) : (
                      <div>No item</div>
                    )}
                  </Table.Body>
                  <Table.Footer fullWidth>
                    <Table.Row>
                      <Table.HeaderCell colSpan="3">
                        <Button
                          style={{ color: "#fff", background: "#cf1b15" }}
                          floated="right"
                          icon
                          labelPosition="left"
                          primary
                          size="small"
                        >
                          <Icon name="undo" /> Update cart
                        </Button>
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>
                <CustomHeader as="h3">CART TOTALS</CustomHeader>
                <div
                  style={{
                    margin: "10px auto",
                  }}
                >
                  <Table size="small" definition unstackable>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>SUBTOTAL</Table.Cell>
                        <Table.Cell>
                          VND {totalCart.toLocaleString("en-US")}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>SHIPPING</Table.Cell>
                        <Table.Cell>
                          Free shipping Shipping options will be updated during
                          checkout.
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>VAT</Table.Cell>
                        <Table.Cell>
                          VND {VAT.toLocaleString("en-US")}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Voucher</Table.Cell>
                        <Table.Cell>
                          {isActiveCode ? (
                            <div>
                              <Label color="teal" size="large">
                                XQW12
                              </Label>
                              <Button
                                onClick={() => setActive(false)}
                                floated="right"
                                compact
                              >
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <Modal
                              onClose={() => setOpen(false)}
                              onOpen={() => setOpen(true)}
                              open={open}
                              trigger={
                                <Button floated="right" compact>
                                  Discount
                                </Button>
                              }
                              size="tiny"
                            >
                              <Modal.Content scrolling>
                                <Item.Group divided>
                                  <Item>
                                    <Item.Image
                                      size="tiny"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content
                                      style={{ width: "270px" }}
                                      verticalAlign="middle"
                                    >
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>

                                  <Item>
                                    <Item.Image
                                      size="small"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content
                                      style={{ width: "270px" }}
                                      verticalAlign="middle"
                                    >
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>
                                  <Item>
                                    <Item.Image
                                      size="small"
                                      src="https://react.semantic-ui.com/images/wireframe/image.png"
                                    />
                                    <Item.Content
                                      style={{ width: "270px" }}
                                      verticalAlign="middle"
                                    >
                                      <Item.Header as="a">
                                        Discount 50%
                                      </Item.Header>
                                      <Item.Meta>
                                        <span className="cinema">
                                          Date: 20/3/2021
                                        </span>
                                      </Item.Meta>
                                      <Item.Description>
                                        <p>Apply all</p>
                                      </Item.Description>
                                      <Item.Extra>
                                        <Button
                                          onClick={applyCode}
                                          primary
                                          floated="right"
                                        >
                                          Apply
                                        </Button>
                                        <Label>X2</Label>
                                      </Item.Extra>
                                    </Item.Content>
                                  </Item>
                                </Item.Group>
                              </Modal.Content>
                              <Modal.Actions>
                                <Button
                                  color="red"
                                  onClick={() => setOpen(false)}
                                >
                                  Cancel
                                </Button>
                              </Modal.Actions>
                            </Modal>
                          )}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>TOTAL</Table.Cell>
                        <Table.Cell>
                          {isActiveCode ? (
                            <div>
                              <CustomStrong>
                                {priceDiscount.toLocaleString("en-US")} VND
                              </CustomStrong>
                              <a style={{ color: "black" }}>
                                &nbsp;{" "}
                                <strike>
                                  {cartTotal.toLocaleString("en-US")} VND
                                </strike>
                              </a>
                            </div>
                          ) : (
                            <CustomStrong>
                              {cartTotal.toLocaleString("en-US")} VND
                            </CustomStrong>
                          )}
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
                {listCart.length > 0 ? (
                  <CustomButton>Proceed to checkout</CustomButton>
                ) : (
                  <CustomButton style={{ display: "none" }}>
                    Proceed to checkout
                  </CustomButton>
                )}
              </Container>
            </div>
          );
        }}
      ></Responsive>
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
})(Cart);
