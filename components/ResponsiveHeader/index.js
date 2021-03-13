import Link from "next/link";
import React, { useState } from "react";
import {
  Icon,
  Menu,
  Sidebar,
  Visibility,
  Image,
  Ref,
  Label,
  Dropdown,
} from "semantic-ui-react";
import Logo from "../../public/static/img/elgauchologo.png";
import styled from "styled-components";
import Responsive from "../../components/Responsive";
import { useRouter } from "next/router";
import Footer from "../Footer/index";
import { connect } from "react-redux";
const MenuItemLink = styled(Menu.Item)`
  &:hover {
    color: #cf1b15 !important;
    background: none !important;
  }
  border-right: 1px solid #c0c0c0 !important;
  border-radius: 0px !important;
  font-weight: bold !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
`;
const DropdowItemLink = styled(Dropdown)`
  &:hover {
    color: #cf1b15 !important;
    background: none !important;
  }
  border-radius: 0px !important;
  font-weight: bold !important;
  padding: 0px !important;
`;

const active = {
  color: "#cf1b15",
};
const unactive = {
  color: "#222222",
};
const MenuItemMobileTablet = styled(Menu.Item)`
  &:hover {
    // color: #cf1b15 !important;
    background: none !important;
  }
  // border-bottom: 1px solid #c0c0c0 !important;
  // border-radius: 0px !important;
  font-weight: bold !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
`;
const MenuItemLinkImage = React.forwardRef(function MenuItemLinkImage(
  props,
  ref
) {
  return <Image {...props} />;
});

const fixedMenuStyle = {
  backgroundColor: "#fff",
  height: "10px",
  maxHeight: "600px",
  // overflow: "hidden",
  transition: "height 0.2s",
  borderBottom: "1px solid #cf1b15",
};
const noFixedMenuStyle = {
  backgroundColor: "#fff",
  transition: "height 0.1s",
  height: "76px",
  maxHeight: "600px",
  // overflow: "auto",
  position: "relative",
  zIndex: "1",
};
const noFixedMenuStyleOnMobile = {
  backgroundColor: "#fff",
  transition: "height 0.1s",
  height: "60px",
  margin: "0px !important",
  maxHeight: "600px",
  margin: "0px !important",
  position: "relative",
  zIndex: "1",
};
const noFixedMenuStyleOnTable = {
  backgroundColor: "#fff",
  transition: "height 0.1s",
  height: "80px",
  margin: "0px !important",
  maxHeight: "600px",
  margin: "0px !important",
  position: "relative",
  zIndex: "1",
};

const locationOptions = [
  { key: 1, text: "Xuan Thuy | HCMC", value: 1 },
  { key: 2, text: "Saigon Pearl | HCMC", value: 2 },
  { key: 3, text: "Hai Ba Trung | HCMC", value: 3 },
  { key: 4, text: "An Phu | HCMC", value: 4 },
  { key: 5, text: "Phu My Hung | HCMC", value: 5 },
  { key: 6, text: "Bach Dang | Da Nang", value: 6 },
  { key: 7, text: "Ba Dinh | Hanoi", value: 7 },
  { key: 8, text: "Tay Ho | Hanoi", value: 8 },
  { key: 9, text: "Trang Tien | Hanoi", value: 9 },
];

const menuOptions = [
  { key: 1, text: "Lunch", value: 1 },
  { key: 2, text: "All Day Dining & Drinks", value: 2 },
  { key: 3, text: "Wine", value: 3 },
  { key: 4, text: "Cigars & Butcher", value: 4 },
];

const contactOptions = [
  { key: 1, text: "Get In Touch", value: 1 },
  { key: 2, text: "Careers", value: 2 },
  { key: 3, text: "Privacy & Cookie Policy", value: 3 },
  { key: 4, text: "Magazine", value: 4 },
];

const ResponsiveHeader = ({ children, numberCart }) => {
  const router = useRouter();
  const [menuFixed, setFixedMenu] = useState(false);
  const hideFixedMenu = () => {
    setFixedMenu(false);
  };
  const showFixedMenu = () => {
    setFixedMenu(true);
  };
  const handleToggle = () => {
    setSidebarOpened(true);
  };
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const handleSidebarHide = () => {
    setSidebarOpened(false);
  };
  const segmentRef = React.useRef();
  return (
    <Responsive
      onDesktop={() => {
        return (
          <>
            <Visibility
              once={false}
              onTopPassed={showFixedMenu}
              onBottomPassedReverse={hideFixedMenu}
            >
              <Menu
                secondary
                fixed={menuFixed ? "top" : undefined}
                style={menuFixed ? fixedMenuStyle : noFixedMenuStyle}
              >
                <Menu.Item>
                  <Link href="/home" forwardRef>
                    <MenuItemLinkImage
                      src={Logo}
                      alt="website logo"
                      style={menuFixed ? { width: "39px" } : { width: "68px" }}
                    />
                  </Link>
                </Menu.Item>

                <MenuItemLink
                  position="right"
                  active={router.pathname == "/location"}
                >
                  <Link href="/location">
                    <DropdowItemLink
                      item
                      simple
                      text="Locations"
                      style={router.pathname == "/location" ? active : unactive}
                      options={locationOptions}
                    ></DropdowItemLink>
                  </Link>
                </MenuItemLink>
                <Link href="/news" forwardRef>
                  <MenuItemLink
                    name="News"
                    active={router.pathname == "/news"}
                  >
                    News
                  </MenuItemLink>
                </Link>

                <Link href="/delivery" forwardRef>
                  <MenuItemLink
                    name="EL Delivery & Take out"
                    active={router.pathname == "/delivery"}
                  >
                    EL Delivery
                  </MenuItemLink>
                </Link>
                <Link href="/butcher-shop" forwardRef>
                  <MenuItemLink
                    name="Butcher Shop"
                    active={router.pathname == "/butcher-shop"}
                  >
                    Butcher Shop
                  </MenuItemLink>
                </Link>

                <MenuItemLink>
                  <Link href="/menu">
                    <DropdowItemLink
                      item
                      simple
                      text="Menus"
                      style={router.pathname == "/menu" ? active : unactive}
                      options={menuOptions}
                    ></DropdowItemLink>
                  </Link>
                </MenuItemLink>

                <Link href="/private-dining-events" forwardRef>
                  <MenuItemLink
                    name="Private Dining Events"
                    active={router.pathname == "/private-dining-events"}
                  >
                    Private | Dining Events
                  </MenuItemLink>
                </Link>
                <Link href="/gift-card" forwardRef>
                  <MenuItemLink
                    name="Gift Card"
                    active={router.pathname == "/gift-card"}
                  ></MenuItemLink>
                </Link>
                <MenuItemLink className="link">
                  <Link href="/get-in-touch">
                    <DropdowItemLink
                      item
                      simple
                      text="Contact Us"
                      style={
                        router.pathname == "/get-in-touch" ? active : unactive
                      }
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item text="Get In Touch" />
                        <Link href="/careers">
                          <Dropdown.Item text="Careers" />
                        </Link>
                        <Link href="/privacy-cookie-policy">
                          <Dropdown.Item text="Privacy & Cookie Policy" />
                        </Link>
                        <Link href="/magazine">
                          <Dropdown.Item text="Magazine" />
                        </Link>
                      </Dropdown.Menu>
                    </DropdowItemLink>
                  </Link>
                </MenuItemLink>

                <Link href="/cart" forwardRef>
                  <MenuItemLink active={router.pathname == "/cart"}>
                    <Icon name="cart" />
                    <Label
                      style={{
                        borderRadius: "50%",
                        padding: "3px 5px",
                        margin: "2px 9px",
                      }}
                      color="red"
                      floating
                    >
                      {numberCart}
                    </Label>
                  </MenuItemLink>
                </Link>
                <Link href="/" forwardRef>
                  <MenuItemLink>
                    <Icon name="facebook" color="blue" />
                  </MenuItemLink>
                </Link>
                <Link href="/" forwardRef>
                  <MenuItemLink>
                    <Icon name="instagram" color="violet" />
                  </MenuItemLink>
                </Link>
              </Menu>
            </Visibility>
            {children}
            <Footer />
          </>
        );
      }}
      onTablet={() => {
        return (
          <>
            <Menu secondary style={noFixedMenuStyleOnTable}>
              <Menu.Item style={{ paddingTop: "20px" }}>
                <Link href="/home" forwardRef>
                  <MenuItemLinkImage
                    src={Logo}
                    alt="website logo"
                    style={{ width: "70px" }}
                  />
                </Link>
              </Menu.Item>
              <Menu.Item position="right" onClick={handleToggle}>
                <Icon size="large" name="bars" />
              </Menu.Item>
              <Link href="/cart" forwardRef>
                <MenuItemLink active={router.pathname == "/cart"}>
                  <Icon size="large" name="cart" />
                  <Label
                    style={{
                      borderRadius: "50%",
                      padding: "4px 7px",
                      margin: "10px",
                    }}
                    color="red"
                    floating
                  >
                    {numberCart}
                  </Label>
                </MenuItemLink>
              </Link>
              <Link href="/" forwardRef>
                <MenuItemLink>
                  <Icon size="large" name="facebook" color="blue" />
                </MenuItemLink>
              </Link>
              <Link href="/" forwardRef>
                <MenuItemLink>
                  <Icon size="large" name="instagram" color="violet" />
                </MenuItemLink>
              </Link>
            </Menu>
            <Sidebar
              as={Menu}
              animation="overlay"
              inverted
              onHide={handleSidebarHide}
              vertical
              visible={sidebarOpened}
              direction="right"
              color="red"
            >
              <Sidebar.Pusher dimmed={sidebarOpened}>
                <Link href="/location" forwardRef>
                  <MenuItemMobileTablet
                    name="Locations"
                    active={router.pathname == "/location"}
                    position="right"
                  ></MenuItemMobileTablet>
                </Link>
                <Link href="/delivery" forwardRef>
                  <MenuItemMobileTablet
                    name="EL Delivery & Take out"
                    active={router.pathname == "/delivery"}
                  >
                    EL Delivery & Take out
                  </MenuItemMobileTablet>
                </Link>
                <Link href="/butcher-shop" forwardRef>
                  <MenuItemMobileTablet
                    name="Butcher Shop"
                    active={router.pathname == "/butcher-shop"}
                  >
                    Butcher Shop
                  </MenuItemMobileTablet>
                </Link>
                <Link href="/menu" forwardRef>
                  <MenuItemMobileTablet
                    name="Menus"
                    active={router.pathname == "/menu"}
                  ></MenuItemMobileTablet>
                </Link>
                <Link href="/private-dining-events" forwardRef>
                  <MenuItemMobileTablet
                    name="Private Dining Events"
                    active={router.pathname == "/private-dining-events"}
                  >
                    Private | Dining Events
                  </MenuItemMobileTablet>
                </Link>
                <Link href="/gift-card" forwardRef>
                  <MenuItemMobileTablet
                    name="Gift Card"
                    active={router.pathname == "/gift-card"}
                  ></MenuItemMobileTablet>
                </Link>
                <Link href="/get-in-touch" forwardRef>
                  <MenuItemMobileTablet
                    name="Contact Us"
                    active={router.pathname == "/get-in-touch"}
                  ></MenuItemMobileTablet>
                </Link>
              </Sidebar.Pusher>
            </Sidebar>
            {children}
            <Footer />
          </>
        );
      }}
      onMobile={() => {
        return (
          <>
            <Menu secondary style={noFixedMenuStyleOnMobile}>
              <Menu.Item style={{ paddingTop: "20px" }}>
                <Link href="/home" forwardRef>
                  <MenuItemLinkImage
                    src={Logo}
                    alt="website logo"
                    // size="tiny"
                    style={{ width: "51px" }}
                  />
                </Link>
              </Menu.Item>
              <Menu.Item position="right" onClick={handleToggle}>
                <Icon name="bars" />
              </Menu.Item>
              <Link href="/cart" forwardRef>
                <MenuItemLink active={router.pathname == "/cart"}>
                  <Icon size="large" name="cart" />
                  <Label
                    style={{
                      borderRadius: "50%",
                      padding: "4px 7px",
                      margin: "10px",
                    }}
                    color="red"
                    floating
                  >
                    {numberCart}
                  </Label>
                </MenuItemLink>
              </Link>
            </Menu>
            <Sidebar
              as={Menu}
              animation="overlay"
              inverted
              onHide={handleSidebarHide}
              vertical
              visible={sidebarOpened}
              direction="right"
              color="red"
            >
              <Sidebar.Pusher dimmed={sidebarOpened}>
                <Link href="/location" forwardRef>
                  <MenuItemMobileTablet
                    name="Locations"
                    active={router.pathname == "/location"}
                    position="right"
                  ></MenuItemMobileTablet>
                </Link>
                <Link href="/delivery" forwardRef>
                  <MenuItemMobileTablet
                    name="EL Delivery & Take out"
                    active={router.pathname == "/delivery"}
                  >
                    EL Delivery & Take out
                  </MenuItemMobileTablet>
                </Link>
                <Link href="/butcher-shop" forwardRef>
                  <MenuItemMobileTablet
                    name="Butcher Shop"
                    active={router.pathname == "/butcher-shop"}
                  >
                    Butcher Shop
                  </MenuItemMobileTablet>
                </Link>
                <Link href="/menu" forwardRef>
                  <MenuItemMobileTablet
                    name="Menus"
                    active={router.pathname == "/menu"}
                  ></MenuItemMobileTablet>
                </Link>
                <Link href="/private-dining-events" forwardRef>
                  <MenuItemMobileTablet
                    name="Private Dining Events"
                    active={router.pathname == "/private-dining-events"}
                  >
                    Private | Dining Events
                  </MenuItemMobileTablet>
                </Link>
                <Link href="/gift-card" forwardRef>
                  <MenuItemMobileTablet
                    name="Gift Card"
                    active={router.pathname == "/gift-card"}
                  ></MenuItemMobileTablet>
                </Link>
                <Link href="/get-in-touch" forwardRef>
                  <MenuItemMobileTablet
                    name="Contact Us"
                    active={router.pathname == "/get-in-touch"}
                  ></MenuItemMobileTablet>
                </Link>
              </Sidebar.Pusher>
            </Sidebar>
            {children}
            <Footer />
          </>
        );
      }}
    />
  );
};
const mapStateToProps = (state) => ({
  numberCart: state.cart.numberCart,
});
export default connect(mapStateToProps, null)(ResponsiveHeader);
