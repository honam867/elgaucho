import Layout from "../../components/ResponsiveHeader/index";
import { useState, useEffect } from "react";
import SliderComponent from "../../components/SliderComponent";
import SrcImg1 from "../../public/static/img/El-Gaucho-Dine-With-Us.jpg";
import SrcImg2 from "../../public/static/img/El-Gaucho-Argentinian-Steakhouse-Restaurant-Homepage-Welcome-1920-x-800.jpg";
import SrcImg3 from "../../public/static/img/VN04-2017_1036_37_38_39_40.jpg";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Image,
  Menu,
  Visibility,
} from "semantic-ui-react";
import ResponsiveComponent from "../../components/Responsive";
import MenuCustomStyle from "./menu.module.css";
import ProductsComponent from "../../components/ProductsComponent";
import styled from "styled-components";
import ViewCartComponent from "../../components/ViewCart";
import ProductItemComponent from "../../components/ProductItemComponent";
const Images = [
  {
    id: 1,
    name: "Img 1",
    imgUrl: SrcImg1,
    size: "450px",
  },
  {
    id: 2,
    name: "Img 2",
    imgUrl: SrcImg2,
    size: "450px",
  },
  {
    id: 3,
    name: "Img 3",
    imgUrl: SrcImg3,
    size: "450px",
  },
];
const ElDeliveryTakeOutComponent = ({ products }) => {
  const [activeItem, setActiveItem] = useState("");

  const [overlayFixed, setStickOverlay] = useState(false);

  // TODO change productlist to MenuList
  const [productList, setproducts] = useState(products);
  // NOTE Set first categories to render
  const [categories, setCategories] = useState(products[0].products);

  const overlayMenuStyle = {
    position: "relative",
    top: 0,
    transition: "top 2s ease",
  };

  const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    top: "300px",
    position: "relative",
  };

  const overlayMenuMobileStyle = {};
  const fixedOverlayMenuMobileStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    padding: "20px",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
  };

  const handleItemClick = (e, { name, value }) => {
    setCategories(value.products);
    setActiveItem(name);
  };

  const stickOverlay = () => {
    setStickOverlay(true);
  };

  const unStickOverlay = () => {
    setStickOverlay(false);
  };

  useEffect(() => {
    setproducts(products);
    // TODO render null if products from api don't have item
    // setCategories(products[0].products)
    // console.log(products[1].products);
    console.log(categories.length);
    setActiveItem(products[0].name);
  }, []);

  const MenusOnDesktop = () => {
    return (
      <Container
        style={{ margin: "auto", width: "100%", padding: "0px 30px" }}
        fluid
      >
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
              vertical
            >
              {productList.length > 0 ? productList.map((item) => {
                return (
                  <Menu.Item
                    className={MenuCustomStyle.customCorlor}
                    key={item.id}
                    name={item.name}
                    active={activeItem === item.name}
                    onClick={handleItemClick}
                    value={item}
                  />
                );
              })
                :
                <div>No data</div>
              }
            </Menu>
          </Grid.Column>
          <Grid.Column width={9}>
            <div>
              {
                categories.length > 0 ?
                  <ProductItemComponent categories={categories} />
                  : <div>no data</div>
              }

            </div>
          </Grid.Column>

          <Grid.Column width={4}>
            <ViewCartComponent></ViewCartComponent>
          </Grid.Column>
        </Grid>
      </Container>
    );
  };
  const MenusOnTablet = () => {
    return (
      <Container
        style={{ margin: "auto", width: "100%", padding: "0px 30px" }}
        fluid
      >
        <Grid style={{ marginTop: "10px" }}>
          <Grid.Column width={16}>
            <Visibility
              once={false}
              onBottomPassed={stickOverlay}
              onBottomVisible={unStickOverlay}
              once={false}
            />

            <Menu
              fixed={overlayFixed ? "top" : undefined}
              style={
                overlayFixed
                  ? fixedOverlayMenuMobileStyle
                  : overlayMenuMobileStyle
              }
              size="small"
              secondary
            >
              {products.map((item) => {
                return (
                  <Menu.Item
                    active={activeItem === item.name}
                    key={item.id}
                    name={item.name}
                    className={MenuCustomStyle.customCorlor}
                    onClick={handleItemClick}
                    value={item}
                  ></Menu.Item>
                );
              })}
            </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
            <div>
              {
                categories.length > 0 ?
                  <ProductItemComponent categories={categories} />
                  : <div>no data</div>
              }
            </div>
          </Grid.Column>

          <Grid.Column width={6}>
            <ViewCartComponent></ViewCartComponent>
          </Grid.Column>
        </Grid>
      </Container>
    );
  };
  const MenusOnMobile = () => {
    return (
      <>
        <Visibility
          once={false}
          onBottomPassed={stickOverlay}
          onBottomVisible={unStickOverlay}
          once={false}
        />

        <Menu
          fixed={overlayFixed ? "top" : undefined}
          style={
            overlayFixed ? fixedOverlayMenuMobileStyle : overlayMenuMobileStyle
          }
          size="small"
          secondary
        >
          <div>

          </div>
          {products.map((item) => {
            return (
              <>
                <Menu.Item
                  active={activeItem === item.name}
                  key={item.id}
                  name={item.name}
                  className={MenuCustomStyle.customCorlorMobile}
                  onClick={handleItemClick}
                  value={item}
                ></Menu.Item>

              </>
            );
          })}
        </Menu>
        {
          categories.length > 0 ?
            <ProductItemComponent categories={categories} />
            : <div>no data</div>
        }
      </>
    );
  };
  return (
    <Layout>
      <SliderComponent Images={Images} height="30vh" />
      <ResponsiveComponent
        onTablet={MenusOnTablet}
        onDesktop={MenusOnDesktop}
        onMobile={MenusOnMobile}
      ></ResponsiveComponent>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  // NOTE fetch menu list from api
  const res = await fetch(
    "https://my-json-server.typicode.com/honam867/apiserver/products"
  );
  const products = await res.json();
  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
  };
}

export default ElDeliveryTakeOutComponent;