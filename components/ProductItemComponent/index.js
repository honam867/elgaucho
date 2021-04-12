import {
  Button,
  Grid,
  Icon,
  Item,
  Placeholder,
  Modal,
  Image,
  Select,
  Input,
} from "semantic-ui-react";
import Responsive from "../Responsive/index";
import { AddCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import ShowMoreText from "react-show-more-text";
import {
  ProductItemWrapper,
  AddToCartButton,
  PriceCustomFromHeader,
  ItemHeaderCustom,
  PriceCustomFromModal,
} from "./style";
import { memo } from "react";
import ProductItemOnMobile from "./onMobile/index";
import LazyLoad from "react-lazyload";
import { CustomButton } from "../UiCustomElement/button";
const Loading = () => {
  return (
    <div style={{ margin: "30px 0px" }}>
      <Placeholder fluid>
        <Placeholder.Header image>
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </div>
  );
};
const ItemOfProducts = ({
  id,
  imageUrl,
  name,
  description,
  promotedPrice,
  price,
  addCart,
  productItem,
}) => {
  function exampleReducer(state, action) {
    switch (action.type) {
      case "close":
        return { open: false };
      case "open":
        return { open: true, size: action.size };
      default:
        throw new Error("Unsupported action...");
    }
  }
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;
  const countryOptions = [{ key: "af", value: "af", text: "Afghanistan" }];
  return (
    <Item key={id}>
      <Item.Image size="small" src={imageUrl} floated="left" />
      <Item.Content>
        <ItemHeaderCustom as="a">{name.toUpperCase()}</ItemHeaderCustom>
        <Item.Description className="customHeightDescription">
          <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"
            className="content-css1"
            anchorClass="my-anchor-css-class1"
            expanded={false}
            width={0}
          >
            {description}
          </ShowMoreText>
        </Item.Description>
        <Grid>
          <Grid.Column floated="left" width={12}>
            {promotedPrice > 0 ? (
              <PriceCustomFromHeader floated="right">
                {price.toLocaleString("en-US")} VND
                <del
                  style={{
                    color: "#000000",
                    fontWeight: "300",
                    fontSize: "15px",
                    paddingLeft: "5px",
                  }}
                >
                  {" "}
                  {promotedPrice.toLocaleString("en-US")} VND
                </del>
              </PriceCustomFromHeader>
            ) : (
              <PriceCustomFromHeader floated="right">
                {price.toLocaleString("en-US")} VND
              </PriceCustomFromHeader>
            )}
          </Grid.Column>
          <Grid.Column
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            floated="right"
            width={4}
          >
            {/* onClick={() => addCart(productItem)} */}
            <CustomButton
              onClick={() => dispatch({ type: "open", size: "tiny" })}
              animated
            >
              <Button.Content
                visible
                // onClick={() => addCart(productItem)}
                floated="right"
              >
                Add To Cart
              </Button.Content>
              <Button.Content hidden>
                <Icon name="add" />
              </Button.Content>
            </CustomButton>
            <Modal
              size={size}
              open={open}
              onClose={() => dispatch({ type: "close" })}
            >
              <Modal.Header>
                <Image
                  src={imageUrl}
                  style={{ width: "60px" }}
                  floated="left"
                />
                <span style={{ fontSize: "14px" }}>{name}</span>
                <PriceCustomFromModal floated="right">
                  {price.toLocaleString("en-US")} VND
                </PriceCustomFromModal>
              </Modal.Header>
              <Modal.Content>
                <p>
                  <b>Addition</b> <span>(required)</span>
                </p>
                <Grid columns="equal">
                  <Grid.Row>
                    <Grid.Column>
                      <Select
                        // placeholder="Select your country"
                        options={countryOptions}
                      />
                    </Grid.Column>
                    {/* <Grid.Column>
                      <Select
                        options={countryOptions}
                      />
                    </Grid.Column> */}
                  </Grid.Row>
                </Grid>
                <p>
                  <b>Qualities</b>
                </p>
                <Input style={{ width: "20%" }} size="mini" type="text">
                  <Button onClick={() => IncreaseQuantity(i)} icon>
                    <Icon name="plus" />
                  </Button>
                  <input
                    // value={item.quantity}
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
              </Modal.Content>
              <Modal.Actions>
                {/* <Button negative onClick={() => dispatch({ type: "close" })}>
                  No
                </Button> */}
                <Button positive onClick={() => dispatch({ type: "close" })}>
                  OK
                </Button>
              </Modal.Actions>
            </Modal>
          </Grid.Column>
        </Grid>
      </Item.Content>
    </Item>
  );
};

const ProductItem = ({ products, addCart, areaId }) => {
  const productList = products.filter((item) => item.areaId === areaId);
  return (
    <ProductItemWrapper>
      <Responsive
        onDesktop={() => {
          return (
            <>
              {productList.length > 0 ? (
                productList.map((productItem) => {
                  return (
                    <LazyLoad
                      className="lazy-style"
                      once={true}
                      key={productItem.id}
                      height={400}
                      offset={50}
                      placeholder={<Loading />}
                    >
                      <Item.Group divided>
                        <ItemOfProducts
                          {...productItem}
                          productItem={productItem}
                          addCart={addCart}
                          key={productItem.id}
                        />
                      </Item.Group>
                    </LazyLoad>
                  );
                })
              ) : (
                <div>No data</div>
              )}
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
                        <Item.Description className="customHeightDescription">
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
            <ProductItemOnMobile productList={productList} addCart={addCart} />
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
