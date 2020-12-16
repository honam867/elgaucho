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
        name: "Cut Of The Day",
    },
    {
        name: "Lunch And Happy Hour",
    },
    {
        name: "All Day Dining",
    },
    {
        name: "Drinks",
    },
    {
        name: "Wines",
    },
    {
        name: "Cigars & Butcher",
    },
]

const MenuComponent = ({ products }) => {
    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    }
    const [overlayFixed, setStickOverlay] = useState(false);
    const stickOverlay = () => {
        setStickOverlay(true);
    }
    const unStickOverlay = () => {
        setStickOverlay(false);
    }
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
    const [productsLists, setproducts] = useState(products);
    useEffect(() => {
        setproducts(products)
        setActiveItem(MenuItemData[0].name);
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
                                    MenuItemData.map((item, i) => {
                                        return (
                                            <Menu.Item
                                                className={MenuCustomStyle.customCorlor}
                                                key={i}
                                                name={item.name}
                                                active={activeItem === item.name}
                                                onClick={handleItemClick}
                                            />

                                        )
                                    })
                                }
                            </Menu>
                        </Grid.Column>
                    </div>
                    <Grid.Column >
                        <div style={{ height: "1500px" }}>
                            <h1>Product columns</h1>
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
// export async function getServerSideProps(context) {
//     const res = await fetch('')
//     const products = await res.json()
//     console.log("🚀 ~ file: index.js ~ line 156 ~ getStaticProps ~ products", products)
//     if (!products) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             products,
//         }
//     }
// }



export default MenuComponent;