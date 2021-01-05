import { Button, Card, Grid, Header, Icon, Image, Item } from 'semantic-ui-react'
import MenuItemCustom from "./productitem.module.css";
import styled from "styled-components";
import Responsive from "../Responsive/index"
const AddToCartButton = styled(Button)`
color: #fff  !important;
background: #cf1b15 !important;
`;
const PriceCustomFromHeader = styled(Item.Header)`
color: #cf1b15 !important;
font-weight: 300 !important;
font-size: 20px !important;
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
const ProductItem = ({ categoriesItem }) => {
    return (
        <>
            <Responsive
                onMobile={() => {
                    return (
                        <>
                            {categoriesItem.map(categoryItem => {
                                return (
                                    <Card style={{ margin: "10px auto" }}>
                                        <Image src={categoryItem.urlImage} size="tiny" wrapped ui={false} />
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
                                            <PriceCustomFromHeader>{categoryItem.prices}</PriceCustomFromHeader>
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
export default ProductItem;