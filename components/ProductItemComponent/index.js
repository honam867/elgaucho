import { Button, Card, Grid, Header, Icon, Image, Item } from 'semantic-ui-react'
import MenuItemCustom from "./productitem.module.css";
import styled from "styled-components";
import Responsive from "../Responsive/index"
import { bindActionCreators } from 'redux';
import { AddCart, DecreaseQuantity, IncreaseQuantity } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
const AddToCartButton = styled(Button)`
color: #fff  !important;
background: #cf1b15 !important;
`;
const PriceCustomFromHeader = styled(Item.Header)`
color: #cf1b15 !important;
font-weight: 600 !important;
font-size: 18px !important;
margin-top: 10px !important;
@media only screen and (min-width:320px) and (max-width:767px)  {
    font-weight: bold !important;
    font-size: 15px !important;
}
`
const ItemHeaderCustom = styled(Item.Header)`
 &:hover {
color: #cf1b15  !important;
background: #fff !important;
 }
font-size: 15px;
font-weight: bold;
color: black;
 `
const CustomButton = styled(Button)`
 color: #ffffff  !important;
 background-color: #cf1b15 !important;
 `;
const ProductItem = ({ categories, addCart }) => {
  return (
    <>
      <Responsive
        onDesktop={() => {
          return (
            <>
              <Item.Group divided>
                {categories.length > 0 ? categories.map(categoryItem => {
                  return (
                    <Item key={categoryItem.id}>
                      <Item.Image size='small' src={categoryItem.imageUrl} />
                      <Item.Content>
                        <ItemHeaderCustom as='a'>{categoryItem.name}</ItemHeaderCustom>
                        <Item.Description className={MenuItemCustom.customHeightDescription}>
                          {categoryItem.description}
                        </Item.Description>
                        <Grid>
                          <Grid.Column floated='left' width={10}>
                            <PriceCustomFromHeader floated="right">
                              VND {categoryItem.price.toLocaleString("en-US")}
                            </PriceCustomFromHeader>
                          </Grid.Column>
                          <Grid.Column floated='right' width={6}>
                            <AddToCartButton onClick={() => addCart(categoryItem)} floated='right'>
                              Add To Cart
                            </AddToCartButton>
                          </Grid.Column>
                        </Grid>
                      </Item.Content>
                    </Item>
                  )
                }) : <div>No data</div>}
              </Item.Group>

            </>
          )
        }}
        onTablet={() => {
          return (
            <>
              <Item.Group divided>
                {categories.map(categoryItem => {
                  return (
                    <Item key={categoryItem.id}>
                      <Item.Image size='small' src={categoryItem.imageUrl} />
                      <Item.Content>
                        <ItemHeaderCustom as='a'>{categoryItem.name}</ItemHeaderCustom>
                        <Item.Description className={MenuItemCustom.customHeightDescription}>
                          {categoryItem.description}
                        </Item.Description>
                        <PriceCustomFromHeader as="h4" floated="right">
                          VND {categoryItem.price.toLocaleString("es-US")}
                        </PriceCustomFromHeader>
                        <AddToCartButton floated='right'>
                          Add To Cart
                                <Icon name='right chevron' />
                        </AddToCartButton>
                      </Item.Content>
                    </Item>
                  )
                })}
              </Item.Group>
            </>
          )
        }}


        onMobile={() => {
          return (
            <>
              {categories.map(categoryItem => {
                return (
                  <Card style={{ margin: "10px auto" }}>
                    <Image src={categoryItem.imageUrl} size="tiny" wrapped ui={false} />
                    <Card.Content textAlign="center">
                      <Header as="h4">
                        {categoryItem.name}
                      </Header>
                    </Card.Content>
                    <Card.Content >
                      <p>
                        {categoryItem.description}
                      </p>
                    </Card.Content>
                    <Card.Content textAlign="center">
                      <PriceCustomFromHeader>VND {categoryItem.price.toLocaleString("es-US")}</PriceCustomFromHeader>
                    </Card.Content>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button size="tiny">View Cart</Button>
                        <CustomButton size="tiny">Checkout <Icon name='right chevron' />   </CustomButton>
                      </div>
                    </Card.Content>
                  </Card>

                )
              })}
            </>
          )
        }}
      />

    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: item => dispatch(AddCart(item)),
  }
}

export default connect(null, mapDispatchToProps)(ProductItem)