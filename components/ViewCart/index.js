import { connect } from 'react-redux';
import { Button, Card, Grid, Header } from "semantic-ui-react";
import styled from "styled-components";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../../redux/cart/cart.actions";
import { LabelCustom, IconCustom } from "./style";
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
    <Card style={{ width: "100%" }}>
      <Card.Content textAlign="center">
        <Header as="h3">Cart</Header>
      </Card.Content>
      <Card.Content style={{ maxHeight: "450px", overflow: "auto", padding: "20px 20px" }}>
        {
          listCart.length > 0 ?
            listCart.map((item, i) => {
              return (
                <Card.Content key={i}>
                  <Grid columns={4}>
                    <Grid.Column width={10}>
                      <p>{item.name}</p>
                      <small>{item.quantity} X  {item.price.toLocaleString("es-US")}</small>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <LabelCustom attached='top right'>
                        <IconCustom onClick={() => DeleteCart(i)} name="delete" />
                      </LabelCustom>
                    </Grid.Column>
                  </Grid>
                  <div style={{ padding: "12px 0px" }}>
                    <Button size='mini' onClick={() => DecreaseQuantity(i)}>-</Button>
                    <Button size='mini' onClick={() => IncreaseQuantity(i)}>+</Button>
                  </div>
                </Card.Content>
              )
            })
            :
            <Card.Content textAlign="center" style={{ height: "100px" }}>
              No item
          </Card.Content>
        }
      </Card.Content>

      <Card.Content>
        <CustomStrong>Subtotal:</CustomStrong> VND {totalCart.toLocaleString('en-US')}
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <CustomButton>View Cart</CustomButton>
          <CustomButton>Checkout</CustomButton>
        </div>
      </Card.Content>
    </Card>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.cart
  }
}
export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(ViewCartComponent);