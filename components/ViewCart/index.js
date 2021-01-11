import { connect } from "react-redux";
import { Button, Card, Grid, Header, Icon, Image, Label } from "semantic-ui-react";
import styled from "styled-components";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../../redux/cart/cart.actions";
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
        let priceAfterParse = items.Carts[item].prices.replace(/[^0-9]/g, "");
        let priceOfProduct = Number(priceAfterParse)
        totalCart += items.Carts[item].quantity * priceOfProduct;
        listCart.push(items.Carts[item])
    })
    return (
        <Card style={{ width: "100%" }}>
            <Card.Content textAlign="center">
                <Header as="h3">Cart</Header>
            </Card.Content>
            {
                listCart.length > 0 ?
                    listCart.map((item, i) => {
                        return (
                            <Card.Content key={i}>
                                <Grid columns={4}>
                                    <Grid.Column width={10}>

                                        <p>{item.name}</p>
                                        <small>{item.quantity} X {item.prices}</small>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Label onClick={() => DeleteCart(i)} style={{ cursor: "pointer" }} color="red" attached='top right'>
                                            <Icon name="delete" />
                                        </Label>
                                        <Image style={{ width: "100%" }} size="tiny" src={item.urlImage} />
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
                    <div>No item</div>
            }
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