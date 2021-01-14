import {
  Button,
  Container,
  Header,
  Image,
  Table,
  Icon,
  Input,
} from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import styleCart from "./cartpage.module.css";
import Responsive from "../../components/Responsive";
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../../redux/cart/cart.actions";
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
  let cartTotal = 0
  Object.keys(items.Carts).forEach((item) => {
    let priceAfterParse = items.Carts[item].prices.replace(/[^0-9]/g, "");
    let priceOfProduct = Number(priceAfterParse)
    totalCart += items.Carts[item].quantity * priceOfProduct;
    VAT = (totalCart * 10) / 100;
    cartTotal = totalCart + VAT;
    listCart.push(items.Carts[item])
  })
  return (
    <Layout>
      <div className={styleCart.outsideBg}>
        <div className={styleCart.alignItem}>
          <Container textAlign="center">
            <p style={{ color: "#cf1b15", fontWeight: "bold" }}>
              NOTE: If your prefer to pick up your order please note that when
              you check out in the “comments – message” area of the check-out
              process. We will call you to confirm your preference of pick-up
              time.
            </p>
            <CustomHeader as="h2">
              Please note that the minimum order for El Delivery is 1,000,000
              VND.
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
          <Responsive
            onDesktop={() => {
              return (
                <div>
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
                        {
                          listCart.length > 0 ?
                            listCart.map((item, i) => {
                              return (
                                <Table.Row key={i}>
                                  <Table.Cell width="1" textAlign="center">
                                    <Icon onClick={() => DeleteCart(i)} style={{ cursor: "pointer" }} name="times" size="small" color="red" />
                                  </Table.Cell>
                                  <Table.Cell width="1">
                                    <Image
                                      size="tiny"
                                      src={item.urlImage}
                                    />
                                  </Table.Cell>
                                  <Table.Cell width="4">
                                    <a style={{ fontSize: "12px" }}>
                                      {item.name}
                                    </a>
                                  </Table.Cell>
                                  <Table.Cell width="2" textAlign="center">
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        &nbsp;{item.prices}
                                      </bdi>
                                    </span>
                                  </Table.Cell>
                                  <Table.Cell textAlign="center" width="1">
                                    <Input size="mini" type="text">
                                      <Button onClick={() => IncreaseQuantity(i)} icon>
                                        <Icon name="plus" />
                                      </Button>
                                      <input value={item.quantity} style={{ textAlign: "center" }} />
                                      <Button size='mini' onClick={() => DecreaseQuantity(i)} icon>
                                        <Icon name="minus" />
                                      </Button>
                                    </Input>
                                  </Table.Cell>
                                  <Table.Cell textAlign="center" width="2">
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">
                                          VND
                                      </span>
                                      &nbsp;{item.totalPriceOfProduct.toLocaleString('en-US')}
                                      </bdi>
                                    </span>
                                  </Table.Cell>
                                </Table.Row>
                              )
                            })

                            :
                            <div>No item</div>
                        }

                      </Table.Body>  {/* 
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
                      */}

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
                            <Table.Cell>VND {totalCart.toLocaleString('en-US')}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>SHIPPING</Table.Cell>
                            <Table.Cell>
                              Free shipping Shipping options will be updated
                              during checkout.
                          </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>VAT</Table.Cell>
                            <Table.Cell>VND {VAT.toLocaleString('en-US')}</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>TOTAL</Table.Cell>
                            <Table.Cell> <CustomStrong>VND {cartTotal.toLocaleString('en-US')}</CustomStrong></Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </div>

                    <CustomButton>Proceed to checkout</CustomButton>
                  </Container>
                </div>
              );
            }}
            onTablet={() => {
              return (
                <div>
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
                        <Table.Row>
                          <Table.Cell width="1" textAlign="center">
                            <Icon name="times" size="small" color="red" />
                          </Table.Cell>
                          <Table.Cell width="1">
                            <Image
                              size="tiny"
                              src="https://vn.elgaucho.asia/wp-content/uploads/2020/04/Cover-Delivery-Menu.jpg"
                            />
                          </Table.Cell>
                          <Table.Cell width="4">
                            <a style={{ fontSize: "12px" }}>
                              72-GRILLED SPRING CHICKEN{" "}
                            </a>
                          </Table.Cell>
                          <Table.Cell width="2" textAlign="center">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  VNĐ
                                </span>
                                &nbsp;490,000
                              </bdi>
                            </span>
                          </Table.Cell>
                          <Table.Cell textAlign="center" width="1">
                            <Input size="mini" type="text">
                              <Button icon>
                                <Icon name="plus" />
                              </Button>
                              <input />
                              <Button style={{ marginLeft: "3px" }} icon>
                                <Icon name="minus" />
                              </Button>
                            </Input>
                          </Table.Cell>
                          <Table.Cell textAlign="center" width="2">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  VNĐ
                                </span>
                                &nbsp;490,000
                              </bdi>
                            </span>
                          </Table.Cell>
                        </Table.Row>
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
                            <Table.Cell>Giá</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>SHIPPING</Table.Cell>
                            <Table.Cell>
                              Free shipping Shipping options will be updated
                              during checkout.
                            </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>VAT</Table.Cell>
                            <Table.Cell>Giá</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>TOTAL</Table.Cell>
                            <Table.Cell>Giá</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </div>
                    <CustomButton>Proceed to checkout</CustomButton>
                  </Container>
                </div>
              );
            }}
            onMobile={() => {
              return (
                <div>
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
                        <Table.Row>
                          <Table.Cell textAlign="center">
                            <Icon name="times" size="small" color="red" />
                          </Table.Cell>
                          <Table.Cell >
                            <a style={{ fontSize: "12px" }}>
                              72-GRILLED SPRING CHICKEN{" "}
                            </a>
                          </Table.Cell>
                          <Table.Cell textAlign="center">
                            <span class="woocommerce-Price-amount amount">
                              <bdi>
                                <span class="woocommerce-Price-currencySymbol">
                                  VNĐ
                              </span>
                              &nbsp;490,000
                            </bdi>
                            </span>
                          </Table.Cell>
                        </Table.Row>
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
                            <Table.Cell>Giá</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>SHIPPING</Table.Cell>
                            <Table.Cell>
                              Free shipping Shipping options will be updated
                              during checkout.
                          </Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>VAT</Table.Cell>
                            <Table.Cell>Giá</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>TOTAL</Table.Cell>
                            <Table.Cell>Giá</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </div>
                    <CustomButton>Proceed to checkout</CustomButton>
                  </Container>
                </div>
              );
            }}
          ></Responsive>
        </div>
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return {
    items: state.cart
  }
}
export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Cart);
