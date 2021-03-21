import {
  Button,
  Card,
  Grid,
  Icon,
  Image,
  Item,
} from "semantic-ui-react";
import Responsive from "../Responsive/index";
import {
  AddCart,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import ShowMoreText from "react-show-more-text";
import { ProductItemWrapper, AddToCartButton, PriceCustomFromHeader, ItemHeaderCustom, CustomButton } from "./style";
import { memo } from "react";
import ProductItemOnMobile from "./onMobile/index"
const ProductItem = ({ products, addCart, areaId }) => {
  const productList = products.filter(item => item.areaId === areaId);
  return (
    <ProductItemWrapper>
      <Responsive
        onDesktop={() => {
          return (
            <>
              <Item.Group divided>
                {productList.length > 0 ? (
                  productList.map((productItem) => {
                    return (
                      <Item key={productItem.id}>
                        <Item.Image size="small" src={productItem.imageUrl} />
                        <Item.Content>
                          <ItemHeaderCustom as="a">
                            {productItem.name}
                          </ItemHeaderCustom>
                          <Item.Description
                            className="customHeightDescription"
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
                          </Item.Description>
                          <Grid>
                            <Grid.Column floated="left" width={12}>
                              {productItem.promotedPrice > 0 ?

                                <PriceCustomFromHeader floated="right">
                                  {productItem.price.toLocaleString("en-US")} VND
                                  <del style={{ color: "#000000", fontWeight: "300", fontSize: "15px", paddingLeft: "5px" }}> {productItem.promotedPrice.toLocaleString("en-US")} VND</del>
                                </PriceCustomFromHeader>
                                :
                                <PriceCustomFromHeader floated="right">
                                  {productItem.price.toLocaleString("en-US")} VND
                              </PriceCustomFromHeader>
                              }
                            </Grid.Column>
                            <Grid.Column

                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                              }}
                              floated="right" width={4}>
                              <CustomButton onClick={() => addCart(productItem)} animated>
                                <Button.Content visible
                                  onClick={() => addCart(productItem)}
                                  floated="right"
                                >
                                  Add To Cart
                              </Button.Content>
                                <Button.Content hidden>
                                  <Icon name='add' />
                                </Button.Content>
                              </CustomButton>

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
                {productList.map((productItem) => {
                  return (
                    <Item key={productItem.id}>
                      <Item.Image size="small" src={productItem.imageUrl} />
                      <Item.Content>
                        <ItemHeaderCustom as="a">
                          {productItem.name}
                        </ItemHeaderCustom>
                        <Item.Description
                          className="customHeightDescription"
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
            <ProductItemOnMobile
              productList={productList}
              addCart={addCart}
            />
          );
        }}
      />
    </ProductItemWrapper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (item) => dispatch(AddCart(item)),
  };
};

export default memo(connect(null, mapDispatchToProps)(ProductItem));
