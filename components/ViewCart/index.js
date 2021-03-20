import { memo } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Grid, Header, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../../redux/cart/cart.actions";
import { LabelCustom, IconCustom, ViewCartWrapper } from "./style";
import Link from "next/link";
const CustomStrong = styled.strong`
  color: #cf1b15 !important;
  font-weight: bold !important;
`;
const CustomButton = styled(Button)`
  color: #cf1b15 !important;
  background-color: #ffffff !important;
`;
const ViewCartComponent = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) => {
  let listCart = [];
  let totalCart = 0;
  Object.keys(items.Carts).forEach((item) => {
    totalCart += items.Carts[item].quantity * items.Carts[item].price;
    listCart.push(items.Carts[item])
  })
  return (
    <ViewCartWrapper>
      <Card style={{ width: "100%" }}>
        <Card.Content style={{ borderBottom: "1px solid rgba(34,36,38,.1)" }} textAlign="center">
          <Header as="h3">Cart</Header>
        </Card.Content>
        <div className="viewcart" >
          {
            listCart.length > 0 ?
              listCart.map((item, i) => {
                return (
                  <Card.Content className="viewcart-item" key={i}>
                    <Grid columns={4}>
                      <Grid.Column width={11}>
                        <p>{item.name}</p>
                        {item.price.toLocaleString("es-US")} VND
                      </Grid.Column>
                      <Grid.Column width={5}>
                        <LabelCustom attached='top right'>
                          <IconCustom onClick={() => DeleteCart(i)} name="delete" />
                        </LabelCustom>
                      </Grid.Column>
                    </Grid>
                    <div style={{ padding: "12px 0px" }}>
                      <Button className="viewcart-button" size='mini' onClick={() => IncreaseQuantity(i)}>
                        <Icon name="add" />

                      </Button>
                      <span>{item.quantity}</span>
                      <Button className="viewcart-button" size='mini' onClick={() => DecreaseQuantity(i)}>
                        <Icon name="minus" />
                      </Button>
                    </div>
                  </Card.Content>
                )
              })
              :
              <Card.Content textAlign="center" style={{ height: "100px" }}>
                No item
                  </Card.Content>
          }
        </div>
        <Card.Content>
          <CustomStrong>Subtotal:</CustomStrong> {totalCart.toLocaleString('en-US')} VND
    </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Link href="/cart">
              <CustomButton>View Cart</CustomButton>
            </Link>
            <Link href="/checkout">
              <CustomButton>Checkout</CustomButton>
            </Link>
          </div>
        </Card.Content>
      </Card>
    </ViewCartWrapper>

  );
}
const mapStateToProps = (state) => {
  return {
    items: state.cart
  }
}
export default memo(connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(ViewCartComponent));