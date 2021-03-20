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
import MenuCustomStyle from "./menu.module.css";
import ProductsComponent from "../../components/ProductsComponent";
import ViewCartComponent from "../../components/ViewCart";
import Categories from "../../datafake/categories";
import SubCategories from "../../datafake/subcategories";
import AreaData from "../../datafake/area";
import Products from "../../datafake/products";
import styled from "styled-components";

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
const ElDeliveryTakeOutComponent = () => {
  const [activeItem, setActiveItem] = useState("");
  const [overlayFixed, setStickOverlay] = useState(false);
  // NOTE new logic here:
  const [subcategoryId, setSubCategoyId] = useState(0);
  const [areaId, setAreaId] = useState(8);
  const overlayMenuStyle = {
    position: "relative",
    top: 0,
    transition: "top 2s ease",
  };

  const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    top: "200px",
    width: "250px"
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

  const choosingArea = (e, { value }) => {
    setAreaId(value.id)
  }

  const MenuCustom = styled(Menu)`
 .active.item{
   border-bottom: 2px solid red !important;
   border-radius: 0px !important;
 }

  `
  useEffect(() => {
    setActiveItem(Categories[0].name);
  }, []);

  const MenusOnDesktop = () => {
    return (
      <Container
        style={{ margin: "10px 0px", width: "100%", padding: "0px 30px", background: "#F2F2F2" }}
        fluid
      >
        <Grid doubling columns={3}  >
          <Grid.Column width={3} >
            <Menu style={{ background: "#FFF" }} secondary vertical>
              <Dropdown item text='Choosing a location' >
                <Dropdown.Menu style={{ background: "#FFF" }}>
                  <Dropdown.Header>Location</Dropdown.Header>
                  {
                    AreaData.map(item => {
                      return (
                        <Dropdown.Item key={item.id} onClick={choosingArea} value={item}>{item.name}</Dropdown.Item>
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
              style={{ background: "#FFF" }}
              secondary
              vertical
            >
              {Categories.length > 0 ? Categories.map((item) => {
                return (
                  <Menu.Item
                    className={MenuCustomStyle.customCorlor}
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
          <Grid.Column width={9} style={{ background: "#FFF", margin: "15px 0px" }}>
            <div>
              <ProductsComponent subcategories={SubCategories.filter(sub => sub.categoryId === subcategoryId)} products={Products} areaId={areaId}></ProductsComponent>
            </div>
          </Grid.Column>

          <Grid.Column width={4}>
            <div >
              <ViewCartComponent ></ViewCartComponent>
            </div>
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
              <ProductsComponent subcategories={SubCategories.filter(sub => sub.categoryId === subcategoryId)} products={Products} areaId={areaId}></ProductsComponent>
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
      <div>
        <Visibility
          once={false}
          onBottomPassed={stickOverlay}
          onBottomVisible={unStickOverlay}
          once={false}
        />

        <MenuCustom
          fixed={overlayFixed ? "top" : undefined}
          style={
            overlayFixed ? fixedOverlayMenuMobileStyle : overlayMenuMobileStyle
          }
          size="small"
          secondary
          className={MenuCustomStyle.customMobile}
        >
          {Categories.map((item) => {
            return (
              <Menu.Item
                active={activeItem === item.name}
                key={item.id}
                name={item.name}
                className={MenuCustomStyle.customCorlorMobile}
                onClick={handleItemClick}
                value={item}
              ></Menu.Item>
            );
          })}
        </MenuCustom>
        <ProductsComponent subcategories={SubCategories.filter(sub => sub.categoryId === subcategoryId)} products={Products} areaId={areaId}></ProductsComponent>
      </div>
    );
  };
  return (
    <Layout>
      <SliderComponent backgroundAttachment="fixed" Images={Images} height="40vh" />
      <ResponsiveComponent
        onTablet={MenusOnTablet}
        onDesktop={MenusOnDesktop}
        onMobile={MenusOnMobile}
      ></ResponsiveComponent>
    </Layout>
  );
};

// export async function getStaticProps(context) {
//   // NOTE fetch menu list from api
//   const res3 = await fetch(
//     "https://my-json-server.typicode.com/honam867/apiserver/products"
//   );
//   const products = await res3.json();
//   // if (!category) {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }
//   return {
//     props: {
//       products
//     },
//   };
// }

export default ElDeliveryTakeOutComponent;