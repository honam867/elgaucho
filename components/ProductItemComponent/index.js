import {
  Button,
  Grid,
  Icon,
  Item,
  Placeholder,
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
import LazyLoad from "react-lazyload";
const Loading = () => {
  return <div style={{ margin: "30px 0px" }}>
    <Placeholder fluid>
      <Placeholder.Header image >
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
}
const ItemOfProducts = (
  {
    id,
    imageUrl,
    name,
    description,
    promotedPrice,
    price,
    addCart,
    productItem

  }
) => {
  return <Item key={id}>

    <Item.Image size="small" src={imageUrl} floated="left" />
    <Item.Content>
      <ItemHeaderCustom as="a">
        {name.toUpperCase()}
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
          {description}
        </ShowMoreText>
      </Item.Description>
      <Grid >
        <Grid.Column floated="left" width={12}>
          {promotedPrice > 0 ?
            <PriceCustomFromHeader floated="right">
              {price.toLocaleString("en-US")} VND
           <del style={{ color: "#000000", fontWeight: "300", fontSize: "15px", paddingLeft: "5px" }}> {promotedPrice.toLocaleString("en-US")} VND</del>
            </PriceCustomFromHeader>
            :
            <PriceCustomFromHeader floated="right">
              {price.toLocaleString("en-US")} VND
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
}


const ProductItem = ({ products, addCart, areaId }) => {
  const productList = products.filter(item => item.areaId === areaId);
  return (
    <ProductItemWrapper>
      <Responsive
        onDesktop={() => {
          return (
            <>
              {productList.length > 0 ? (
                productList.map((productItem) => {
                  return (
                    <LazyLoad className="lazy-style" once={true} key={productItem.id} height={400} offset={30} placeholder={<Loading />}>
                      <Item.Group divided>
                        <ItemOfProducts {...productItem} productItem={productItem} addCart={addCart} key={productItem.id} />
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
