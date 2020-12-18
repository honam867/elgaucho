import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import SliderComponent from "../../components/SliderComponent";
import SrcImg1, { fixed } from "../../public/static/img/El-Gaucho-Dine-With-Us.jpg"
import SrcImg2 from "../../public/static/img/El-Gaucho-Argentinian-Steakhouse-Restaurant-Homepage-Welcome-1920-x-800.jpg"
import SrcImg3 from "../../public/static/img/VN04-2017_1036_37_38_39_40.jpg";
import { Container, Grid, Menu, Visibility } from "semantic-ui-react";
import ResponsiveComponent from "../../components/Responsive";
import styled from "styled-components";
import MenuCustomStyle from "./menu.module.css";
import ProductsComponent from "../../components/ProductsComponent";
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

const MenuItemData = [
    {
        name: "Soups~Starters~Salads",
    },
    {
        name: "Burgers~Pastas",
    },
    {
        name: "Beef~Steaks",
    },
    {
        name: "Lamb~Pork~Chicken~Fish",
    },
    {
        name: "Sides~Sauces~Desserts",
    },
    {
        name: "Wine",
    },
    {
        name: "El Butcher~Fresh Meats",
    },
    {
        name: "El Souvenirs",
    },
]

const MenuComponent = ({ products }) => {
    const [activeItem, setActiveItem] = useState('');

    const [overlayFixed, setStickOverlay] = useState(false);

    // TODO change productlist to MenuList
    const [productList, setproducts] = useState(products);
    // NOTE Set first categories to render 
    const [categories, setCategories] = useState(products[0].categories);

    const overlayMenuStyle = {
        position: 'relative',
        top: 0,
        transition: 'top 0.5s ease',
    }

    const fixedOverlayMenuStyle = {
        ...overlayMenuStyle,
        top: '300px',
        position: "fixed"
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
        setCategories(products[0].categories)

        setActiveItem(products[0].name);
    }, []);

    const MenusOnDesktop = () => {
        return (

            <Container>
                <Grid divided doubling columns={2} style={{ marginTop: "30px" }}>
                    <div style={{ width: "25%" }}>
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
                    </div>
                    <Grid.Column >
                        <div >
                            <ProductsComponent categories={categories} />
                        </div>
                    </Grid.Column>
                </Grid>
            </Container >
        )
    }
    const MenusOnMobile = () => {
        return (
            <div>
                On mobile
            </div>
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
    const res = await fetch('https://mockend.com/org/repo/menus')
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

export default MenuComponent;