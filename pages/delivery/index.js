import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import SliderComponent from "../../components/SliderComponent";
import SrcImg1 from "../../public/static/img/El-Gaucho-Dine-With-Us.jpg"
import SrcImg2 from "../../public/static/img/El-Gaucho-Argentinian-Steakhouse-Restaurant-Homepage-Welcome-1920-x-800.jpg"
import SrcImg3 from "../../public/static/img/VN04-2017_1036_37_38_39_40.jpg";
import { Button, Card, Container, Divider, Grid, GridColumn, Header, Icon, Image, Item, Menu, Reveal, Visibility } from "semantic-ui-react";
import ResponsiveComponent from "../../components/Responsive";
import MenuCustomStyle from "./menu.module.css";
import ProductsComponent from "../../components/ProductsComponent";
import styled from "styled-components";
import ButtonCustomComponent from "../../components/ButtonCustomComponent";
import Link from "next/link";
const Images = [
    {
        id: 1,
        name: "Img 1",
        imgUrl: SrcImg1,
        size: "450px"
    },
    {
        id: 2,
        name: "Img 2",
        imgUrl: SrcImg2,
        size: "450px"
    },
    {
        id: 3,
        name: "Img 3",
        imgUrl: SrcImg3,
        size: "450px"
    }
];

const CustomStrong = styled.strong`
    color: #cf1b15 !important;
    font-weight:bold !important;
`
const CustomButton = styled(Button)`
color: #cf1b15  !important;
background-color: #ffffff !important;
`;
const ElDeliveryTakeOutComponent = ({ products }) => {
    const [activeItem, setActiveItem] = useState('');

    const [overlayFixed, setStickOverlay] = useState(false);

    // TODO change productlist to MenuList
    const [productList, setproducts] = useState(products);
    // NOTE Set first categories to render 
    const [categories, setCategories] = useState(products[0].categories);

    const overlayMenuStyle = {
        position: 'relative',
        top: 0,
        transition: 'top 2s ease',
    }

    const fixedOverlayMenuStyle = {
        ...overlayMenuStyle,
        top: '300px',
        position: "relative"
    }

    const overlayCardStyle = {
        top: 0,
        transition: 'top 2s ease',
        width: "100%"
    }

    const fixedOverlayCardStyle = {
        ...overlayCardStyle,
        top: '300px',
    }

    const handleItemClick = (e, { name, value }) => {
        // NOTE When click menu item, find by id to render categories of that item
        const findCatecoriesWhenClickProductItemValue = productList.find(product => product.id === value.id);
        setCategories(findCatecoriesWhenClickProductItemValue.categories);
        setActiveItem(name);
    }

    const stickOverlay = () => {
        setStickOverlay(true);
    }

    const unStickOverlay = () => {
        setStickOverlay(false);
    }

    useEffect(() => {
        setproducts(products)
        // TODO render null if products from api don't have item
        // setCategories(products[0].categories)

        setActiveItem(products[0].name);
    }, []);

    const MenusOnDesktop = () => {
        return (

            <Container style={{ margin: "auto", width: "100%", padding: "0px 30px" }} fluid>
                <Grid divided doubling columns={3} style={{ marginTop: "30px" }}>
                    <Grid.Column width={3}>
                        <Visibility
                            offset={80}
                            once={false}
                            onTopPassed={stickOverlay}
                            onTopVisible={unStickOverlay}
                        />
                        <Menu
                            className={MenuCustomStyle.customBorder}
                            style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
                            secondary
                            vertical>
                            {
                                productList.map((item) => {
                                    return (
                                        <Menu.Item
                                            className={MenuCustomStyle.customCorlor}
                                            key={item.id}
                                            name={item.name}
                                            active={activeItem === item.name}
                                            onClick={handleItemClick}
                                            value={item}
                                        />

                                    )
                                })
                            }
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <div >
                            <ProductsComponent categories={categories} />
                        </div>
                    </Grid.Column>

                    <Grid.Column width={4} >
                        <Visibility
                            offset={80}
                            once={false}
                            onTopPassed={stickOverlay}
                            onTopVisible={unStickOverlay}
                        />
                        <Card style={overlayFixed ? fixedOverlayCardStyle : overlayCardStyle}>
                            <Card.Content textAlign="center">
                                <Header as="h3">
                                    Cart
                                    </Header>
                            </Card.Content>
                            <Card.Content >
                                <Grid columns={2}>
                                    <Grid.Column width={10}>
                                        <p>
                                            29-HOMEMADE BLUE CHEESE BURGER
                                        </p>
                                        <small>1 X VND 290.000</small>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Image size="tiny" src={SrcImg1} />
                                    </Grid.Column>

                                </Grid>


                            </Card.Content>
                            <Card.Content>
                                <CustomStrong>Subtotal:</CustomStrong> VND 220.000
                                </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <CustomButton>View Cart</CustomButton>
                                    <CustomButton>Checkout</CustomButton>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container >
        )
    }
    const MenusOnMobile = () => {
        return (
            <Container style={{ margin: "auto", width: "100%", padding: "0px 10px" }} fluid>
                <Grid divided>
                    <Grid.Row>
                        <Grid.Column width={6} >
                            <Visibility
                                offset={80}
                                once={false}
                                onTopPassed={stickOverlay}
                                onTopVisible={unStickOverlay}
                            />
                            <Menu
                                className={MenuCustomStyle.customBorderMobile}
                                secondary
                                style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
                                vertical>
                                {
                                    productList.map((item) => {
                                        return (
                                            <Menu.Item
                                                className={MenuCustomStyle.customCorlorMobile}
                                                key={item.id}
                                                name={item.name}
                                                active={activeItem === item.name}
                                                onClick={handleItemClick}
                                                value={item}
                                            />

                                        )
                                    })
                                }
                            </Menu>
                        </Grid.Column>
                        <Grid.Column width={10} >
                            {
                                categories.map(category => {
                                    console.log(category)
                                    return (
                                        <Item.Group key={category.id}>
                                            <Divider horizontal>
                                                <Header as='h2' className={MenuCustomStyle.customHeaderColor}>
                                                    {category.name}
                                                </Header>
                                            </Divider>
                                            <Item >
                                                {category.name}
                                                {category.categoryItem.map(categoryItem => {
                                                    return (
                                                        <Item.Image src={categoryItem.urlImage} size="mini" style={{ minHeight: "200px" }} />
                                                    )
                                                })}
                                            </Item>
                                        </Item.Group>
                                    )
                                })
                            }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container >
        )
    }
    return (
        <Layout>
            <SliderComponent Images={Images} height="30vh" />
            <ResponsiveComponent onDesktop={MenusOnDesktop} onMobile={MenusOnMobile}>
            </ResponsiveComponent>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    // NOTE fetch menu list from api
    const res = await fetch('https://my-json-server.typicode.com/honam867/apiserver/menus')
    const products = await res.json()
    if (!products) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            products,
        }
    }
}

export default ElDeliveryTakeOutComponent;