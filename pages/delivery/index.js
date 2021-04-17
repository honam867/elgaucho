import Layout from "../../components/ResponsiveHeader/index";
import { useState, useEffect, memo } from "react";
import { Container, Grid, Menu, Visibility } from "semantic-ui-react";
import ResponsiveComponent from "../../components/Responsive";
import MenuCustomStyle from "./menu.module.css";
import ProductsComponent from "../../components/ProductsComponent";
import ViewCartComponent from "../../components/ViewCart";
import Categories from "../../datafake/categories";
import SubCategories from "../../datafake/subcategories";
import AreaData from "../../datafake/area";
import Products from "../../datafake/products";
import ElDevlieryOnDesktop from "../../components/pages/delivery/onDesktop/index";
import ElDevlieryOnMobile from "../../components/pages/delivery/onMobile/index";
const ElDeliveryTakeOutComponent = () => {
  const [activeItem, setActiveItem] = useState("");
  const [activeArea, setActiveArea] = useState("");
  const [overlayFixed, setStickOverlay] = useState(false);
  // NOTE new logic here:
  const [subcategoryId, setSubCategoyId] = useState(0);
  const [areaId, setAreaId] = useState(8);

  const overlayMenuMobileStyle = {};
  const fixedOverlayMenuMobileStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
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
    setActiveArea(value.name);
    setAreaId(value.id);
  };

  useEffect(() => {
    setActiveItem(Categories[0].name);
  }, []);

  const ElDevlieryOnTablet = () => {
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
              <ProductsComponent
                subcategories={SubCategories.filter(
                  (sub) => sub.categoryId === subcategoryId
                )}
                products={Products}
                areaId={areaId}
              ></ProductsComponent>
            </div>
          </Grid.Column>

          <Grid.Column width={6}>
            <ViewCartComponent></ViewCartComponent>
          </Grid.Column>
        </Grid>
      </Container>
    );
  };

  return (
    <Layout>
      <ResponsiveComponent
        onTablet={ElDevlieryOnTablet}
        onDesktop={() => {
          return (
            <ElDevlieryOnDesktop
              AreaData={AreaData}
              activeArea={activeArea}
              choosingArea={choosingArea}
              stickOverlay={stickOverlay}
              unStickOverlay={unStickOverlay}
              Categories={Categories}
              activeItem={activeItem}
              handleItemClick={handleItemClick}
              SubCategories={SubCategories}
              subcategoryId={subcategoryId}
              Products={Products}
              areaId={areaId}
            />
          );
        }}
        onMobile={() => {
          return (
            <ElDevlieryOnMobile
              stickOverlay={stickOverlay}
              unStickOverlay={unStickOverlay}
              overlayFixed={overlayFixed}
              fixedOverlayMenuMobileStyle={fixedOverlayMenuMobileStyle}
              overlayMenuMobileStyle={overlayMenuMobileStyle}
              Categories={Categories}
              activeItem={activeItem}
              handleItemClick={handleItemClick}
              SubCategories={SubCategories}
              subcategoryId={subcategoryId}
              Products={Products}
              areaId={areaId}
            />
          );
        }}
      ></ResponsiveComponent>
    </Layout>
  );
};

// export async function getServerSideProps(context) {
//   // NOTE fetch menu list from api
//   // const res3 = await fetch(
//   //   "https://115.79.56.78:1011/api/product/all?menuId=7"
//   // );
//   // console.log(res3);
//   // const products = await res3.json();
//   // // if (!category) {
//   // //   return {
//   // //     notFound: true,
//   // //   };
//   // // }
//   // return {
//   //   props: {
//   //     products,
//   //   },
//   // };
// }

export default memo(ElDeliveryTakeOutComponent);
