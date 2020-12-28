import { Button, Icon, Image, Item, } from 'semantic-ui-react'
import MenuItemCustom from "./productitem.module.css";
import styled from "styled-components"
const AddToCartButton = styled(Button)`
color: #fff  !important;
background: #cf1b15 !important;
`;
const PriceCustomFromHeader = styled(Item.Header)`
color: #cf1b15 !important;
font-weight: 300 !important;
font-size: 20px !important;
margin-top: 10px !important;
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
const ProductItem = ({ categoriesItem }) => {
    return (
        <>
            <Item.Group divided>
                {categoriesItem.map(categoryItem => {
                    return (
                        <Item key={categoryItem.id}>
                            <Item.Image size='small' src={categoryItem.urlImage} />
                            <Item.Content>
                                <ItemHeaderCustom as='a'>{categoryItem.name}</ItemHeaderCustom>
                                <Item.Description className={MenuItemCustom.customHeightDescription}>
                                    {categoryItem.description}
                                </Item.Description>
                                <PriceCustomFromHeader as="h4" floated="right">
                                    {categoryItem.prices}
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
}
export default ProductItem;