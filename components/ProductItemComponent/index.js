import {
  Button,
  Card,
  Grid,
  Header,
  Icon,
  Image,
  Item,
} from "semantic-ui-react";
import MenuItemCustom from "./productitem.module.css";
import styled from "styled-components";
import Responsive from "../Responsive/index";
import {
  AddCart,
  DecreaseQuantity,
  IncreaseQuantity,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import ShowMoreText from "react-show-more-text";
const AddToCartButton = styled(Button)`
  color: #fff !important;
  background: #cf1b15 !important;
`;
const PriceCustomFromHeader = styled(Item.Header)`
  color: #cf1b15 !important;
  font-weight: 600 !important;
  font-size: 18px !important;
  margin-top: 10px !important;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-weight: bold !important;
    font-size: 15px !important;
  }
`;
const ItemHeaderCustom = styled(Item.Header)`
  &:hover {
    color: #cf1b15 !important;
    background: #fff !important;
  }
  font-size: 15px;
  font-weight: bold;
  color: black;
`;
const CustomButton = styled(Button)`
  color: #ffffff !important;
  background-color: #cf1b15 !important;
`;
const ProductItem = ({ products, addCart }) => {
  return (
    <>
      <Responsive
        onDesktop={() => {
          return (
            <>
              <Item.Group divided>
                {products.length > 0 ? (
                  products.map((productItem) => {
                    return (
                      <Item key={productItem.id}>
                        <Item.Image size="small" src={productItem.imageUrl} />
                        <Item.Content>
                          <ItemHeaderCustom as="a">
                            {productItem.name}
                          </ItemHeaderCustom>
                          <Item.Description
                            className={MenuItemCustom.customHeightDescription}
                          >
                            <ShowMoreText
                              lines={3}
                              more="Show more"
                              less="Show less"
                              className="content-css1"
                              anchorClass="my-anchor-css-class1"
                              expanded={false}
                              width={0}
                            >
                              {productItem.description}
                            </ShowMoreText>
                            {/* {productItem.description} */}
                          </Item.Description>
                          <Grid>
                            <Grid.Column floated="left" width={10}>
                              <PriceCustomFromHeader floated="right">
                                VND {productItem.price.toLocaleString("en-US")}
                              </PriceCustomFromHeader>
                            </Grid.Column>
                            <Grid.Column floated="right" width={6}>
                              <AddToCartButton
                                onClick={() => addCart(productItem)}
                                floated="right"
                              >
                                Add To Cart
                              </AddToCartButton>
                            </Grid.Column>
                          </Grid>
                        </Item.Content>
                      </Item>
                    );
                  })
                ) : (
                    <div>No data</div>
                  )}
              </Item.Group>
            </>
          );
        }}
        onTablet={() => {
          return (
            <>
              <Item.Group divided>
                {products.map((productItem) => {
                  return (
                    <Item key={productItem.id}>
                      <Item.Image size="small" src={productItem.imageUrl} />
                      <Item.Content>
                        <ItemHeaderCustom as="a">
                          {productItem.name}
                        </ItemHeaderCustom>
                        <Item.Description
                          className={MenuItemCustom.customHeightDescription}
                        >
                          <ShowMoreText
                            lines={4}
                            more="Show more"
                            less="Show less"
                            className="content-css2"
                            anchorClass="my-anchor-css-class2"
                            expanded={false}
                            width={0}
                          >
                            {productItem.description}
                          </ShowMoreText>
                        </Item.Description>
                        <PriceCustomFromHeader as="h4" floated="right">
                          VND {productItem.price.toLocaleString("es-US")}
                        </PriceCustomFromHeader>
                        <AddToCartButton floated="right">
                          Add To Cart
                          <Icon name="right chevron" />
                        </AddToCartButton>
                      </Item.Content>
                    </Item>
                  );
                })}
              </Item.Group>
            </>
          );
        }}
        onMobile={() => {
          return (
            <>
              {products.map((productItem) => {
                return (
                  <Card key={productItem.id} style={{ margin: "10px auto" }}>
                    <Image
                      src={productItem.imageUrl}
                      size="tiny"
                      wrapped
                      ui={false}
                    />
                    <Card.Content textAlign="center">
                      <Header as="h4">{productItem.name}</Header>
                    </Card.Content>
                    <Card.Content>
                      <ShowMoreText
                        lines={5}
                        more="Show more"
                        less="Show less"
                        className="content-css"
                        anchorClass="my-anchor-css-class"
                        expanded={false}
                        width={0}
                      >
                        {productItem.description}
                      </ShowMoreText>
                    </Card.Content>
                    <Card.Content textAlign="center">
                      <PriceCustomFromHeader>
                        VND {productItem.price.toLocaleString("es-US")}
                      </PriceCustomFromHeader>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button size="tiny">View Cart</Button>
                        <CustomButton size="tiny">
                          Checkout <Icon name="right chevron" />{" "}
                        </CustomButton>
                      </div>
                    </Card.Content>
                  </Card>
                );
              })}
            </>
          );
        }}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (item) => dispatch(AddCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
