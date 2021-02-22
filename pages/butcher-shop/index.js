import Layout from "../../components/ResponsiveHeader/index";
import { useState, useEffect } from "react";
import SliderComponent from "../../components/SliderComponent";
import {
  Container,
  Dropdown,
  Grid,
  Menu,
  Visibility,
} from "semantic-ui-react";
import ResponsiveComponent from "../../components/Responsive";
import ButcherCustomStyle from "./butcher.module.css";
import ProductsComponent from "../../components/ProductsComponent";
import ViewCartComponent from "../../components/ViewCart";
import Categories from "../../datafake/categories";
import SubCategories from "../../datafake/subcategories";
import styled from "styled-components";
import NationData from "../../datafake/nation";
const Images = [
  {
    id: 1,
    name: "Img 1",
    imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2016/04/El-Gaucho-Argentinian-Steakhouse-Restaurant-Homepage-Welcome-1920-x-800.jpg",
    size: "450px",
  },
  {
    id: 2,
    name: "Img 2",
    imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2019/06/El-Gaucho-Dine-With-Us.jpg",
    size: "450px",
  },
  {
    id: 3,
    name: "Img 3",
    imgUrl: "https://vn.elgaucho.asia/wp-content/uploads/2016/04/VN04-2017_1036_37_38_39_40.jpg",
    size: "450px",
  },
];
const ButcherShopComponent = ({ products }) => {
  // const fetchData = async () => {
  //   const req = await fetch('https://randomuser.me/api/?gender=male&results=100');
  //   const newData = await req.json();
  //   console.log("🚀 ~ file: index.js ~ line 41 ~ fetchData ~ newData", newData)

  // };
  // const handleClick = (event) => {
  //   console.log('test here');
  //   event.preventDefault();
  //   fetchData();
  // };
  const [activeItem, setActiveItem] = useState("");
  const [overlayFixed, setStickOverlay] = useState(false);
  // NOTE new logic here:
  const [subcategoryId, setSubCategoyId] = useState(1);
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
    setActiveItem(name);
    setSubCategoyId(value.id);
  };

  const stickOverlay = () => {
    setStickOverlay(true);
  };

  const unStickOverlay = () => {
    setStickOverlay(false);
  };


  useEffect(() => {
    setActiveItem(Categories[0].name);
  }, []);

  const MenusOnDesktop = () => {
    return (
      <Container
        style={{ margin: "auto", width: "100%", padding: "0px 30px" }}
        fluid
      >

        <Grid divided doubling columns={3} style={{ marginTop: "30px" }}>

          <Grid.Column width={3}>
            <Menu secondary vertical>
              <Dropdown item text='Choosing a location' >
                <Dropdown.Menu >
                  <Dropdown.Header>Location</Dropdown.Header>
                  {
                    NationData.map(item => {
                      return (
                        <Dropdown.Item  >{item.name}</Dropdown.Item>
                      )
                    })
                  }
                </Dropdown.Menu>
              </Dropdown>
            </Menu>

            <Visibility
              offset={80}
              once={false}
              onTopPassed={stickOverlay}
              onTopVisible={unStickOverlay}
            />
            <Menu
              className={ButcherCustomStyle.customBorder}
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              secondary
              vertical
            >

              {Categories.length > 0 ? Categories.map((item) => {
                return (
                  <Menu.Item
                    className={ButcherCustomStyle.customCorlor}
                    key={item.id}
                    name={item.name}
                    active={activeItem === item.name}
                    onClick={handleItemClick}
                    value={item}
                  >
                    {item.name}

                  </Menu.Item>

                );
              })
                :
                <div>No data</div>
              }

            </Menu>
          </Grid.Column>
          <Grid.Column width={9}>
            <div>
              <ProductsComponent subcategories={SubCategories.filter(sub => sub.categoryId === subcategoryId)} products={products} ></ProductsComponent>
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

              {Categories.map((item) => {
                return (
                  <Menu.Item
                    active={activeItem === item.name}
                    key={item.id}
                    name={item.name}
                    className={ButcherCustomStyle.customCorlor}
                    onClick={handleItemClick}
                    value={item}
                  ></Menu.Item>
                );
              })}
            </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
            <div>
              <ProductsComponent subcategories={SubCategories.filter(sub => sub.categoryId === subcategoryId)} products={products} ></ProductsComponent>

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
          className={ButcherCustomStyle.customMobile}
        >
          {Categories.map((item) => {
            return (
              <Menu.Item
                active={activeItem === item.name}
                key={item.id}
                name={item.name}
                className={ButcherCustomStyle.customCorlorMobile}
                onClick={handleItemClick}
                value={item}
              ></Menu.Item>
            );
          })}
        </Menu>
        <ProductsComponent subcategories={SubCategories.filter(sub => sub.categoryId === subcategoryId)} products={products} ></ProductsComponent>
      </>
    );
  };
  return (
    <Layout>
      <SliderComponent Images={Images} height="50vh" />
      <ResponsiveComponent
        onTablet={MenusOnTablet}
        onDesktop={MenusOnDesktop}
        onMobile={MenusOnMobile}
      ></ResponsiveComponent>
    </Layout>
  );
};

export async function getStaticProps(context) {
  // NOTE fetch menu list from api
  const res3 = await fetch(
    "https://my-json-server.typicode.com/honam867/apiserver/products"
  );
  const products = await res3.json();
  // if (!category) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: {
      products
    },
  };
}

export default ButcherShopComponent;