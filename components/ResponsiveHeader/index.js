import Link from "next/link";
import React, { memo, useState } from "react";
import {
  Icon,
  Menu,
  Sidebar,
  Image,
  Transition,
  Divider,
  Label,
} from "semantic-ui-react";
import Logo from "../../public/static/img/elgauchologonobg.png";
import styled from "styled-components";
import Responsive from "../../components/Responsive";
import { useRouter } from "next/router";
import Footer from "../Footer/index";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import HeaderOnDesktop from "./onDesktop/index";
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

const MenuItemMobileTablet = styled(Menu.Item)`
  border-bottom: 1px solid #c0c0c0 !important;
  color: #cf1b15 !important;
  font-size: 16px;
  font-family: "playfair display", "HelveticaNeue", "Helvetica Neue",
    "Helvetica-Neue", Helvetica, Arial, sans-serif !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
`;

const MenuItemLinkImage = React.forwardRef(function MenuItemLinkImage(
  props,
  ref
) {
  return <Image {...props} />;
});
const noFixedMenuStyleOnMobile = {
  borderBottom: "1px solid #cf1b15",
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
  borderBottom: "1px solid #cf1b15",
  backgroundColor: "#fff",
  transition: "height 0.1s",
  height: "80px",
  margin: "0px !important",
  maxHeight: "600px",
  margin: "0px !important",
  position: "relative",
  zIndex: "1",
};
const menuOptions = [
  {
    key: 1,
    text: "Deal Of The Week | Steak o’clock",
    value: 1,
    pathname: "/menu#DealOfTheWeek",
  },
  { key: 2, text: "Lunch", value: 2, pathname: "/menu#AllDayDining" },
  {
    key: 3,
    text: "All Day Dining & Drinks",
    value: 3,
    pathname: "/menu#AllDayDining",
  },
  { key: 4, text: "Wine", value: 4, pathname: "/menu#Wine" },
  { key: 5, text: "Cigars & Butcher", value: 5, pathname: "/menu#Cigars" },
];
const ResponsiveHeader = ({ children, numberCart }) => {
  const router = useRouter();
  const navigateToLocation = (e, value) => {
    e.preventDefault();
    router.push(value.pathname);
    console.log(router.asPath);
  };
  const locationOptions = [
    {
      key: 1,
      text: "Xuan Thuy | HCMC",
      value: 1,
      pathname: "/location#XuanThuy",
      tag: "#XuanThuy"
    },
    {
      key: 2,
      text: "Saigon Pearl | HCMC",
      value: 2,
      pathname: "/location#SaigonPearl",
      tag: "#SaigonPearl"
    },
    {
      key: 3,
      text: "Hai Ba Trung | HCMC",
      value: 3,
      pathname: "/location#HaiBaTrung",
    },
    { key: 4, text: "An Phu | HCMC", value: 4, pathname: "/location#AnPhu" },
    {
      key: 5,
      text: "Phu My Hung | HCMC",
      value: 5,
      pathname: "/location#PhuMyHung",
    },
    {
      key: 6,
      text: "Bach Dang | Da Nang",
      value: 6,
      pathname: "/location#BachDang",
    },
    { key: 7, text: "Ba Dinh | Hanoi", value: 7, pathname: "/location#BaDinh" },
    { key: 8, text: "Tay Ho | Hanoi", value: 8, pathname: "/location#TayHo" },
    {
      key: 9,
      text: "Trang Tien | Hanoi",
      value: 9,
      pathname: "/location#TrangTien",
    },
  ];

  const newsOptions = [
    {
      key: 1,
      text: "Megazing",
      value: 1,
      pathname: "/location#XuanThuy",

    },
    {
      key: 2,
      text: "News",
      value: 2,
      pathname: "/location#XuanThuy",
    },
    {
      key: 3,
      text: "Promotions",
      value: 3,
      pathname: "/location#XuanThuy",
    },
  ];
  const handleToggle = () => {
    setSidebarOpened(true);
  };
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const handleSidebarHide = () => {
    setSidebarOpened(false);
  };
  //toggle  child menu tablet
  // location
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
    setVisible(!visible);
  };
  //menu
  const [visibleMenu, setVisibleMenu] = useState(false);
  const toggleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  //contact
  const [visibleContact, setVisibleContact] = useState(false);
  const toggleContact = () => {
    setVisibleContact(!visibleContact);
  };
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Responsive
        onDesktop={() => {
          return (
            <HeaderOnDesktop
              children={children}
              Logo={Logo}
              newsOptions={newsOptions}
              router={router}
              locationOptions={locationOptions}
              newsOptions={newsOptions}
              navigateToLocation={navigateToLocation}
              menuOptions={menuOptions}
              numberCart={numberCart}
            />
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
                width="wide"
                style={{ backgroundColor: "white" }}
              >
                <Sidebar.Pusher dimmed={sidebarOpened}>
                  <Icon
                    onClick={handleSidebarHide}
                    color="red"
                    name="close"
                    size="huge"
                  />
                  <div style={{ padding: "90px 0px" }}>
                    <MenuItemMobileTablet
                      name="Location"
                      color="red"
                      onClick={toggleVisibility}
                      icon={visible ? "angle down" : "angle right"}
                    ></MenuItemMobileTablet>

                    <Divider style={{ margin: "0px" }} hidden />
                    <Transition
                      visible={visible}
                      animation="fade down"
                      duration={50}
                    >
                      <div>
                        {locationOptions.map((item) => (
                          <MenuItemMobileTablet
                            pathname={item.pathname}
                            onClick={navigateToLocation}
                            style={{ paddingLeft: "20px" }}
                          >
                            - {item.text}
                          </MenuItemMobileTablet>
                        ))}
                      </div>
                    </Transition>

                    <Link href="/delivery" forwardRef>
                      <MenuItemMobileTablet
                        name="EL Delivery & Take out"
                        active={router.pathname == "/delivery"}
                        color="red"
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
                    <MenuItemMobileTablet
                      name="Menus"
                      onClick={toggleMenu}
                      icon={visibleMenu ? "angle down" : "angle right"}
                    ></MenuItemMobileTablet>

                    <Divider style={{ margin: "0px" }} hidden />
                    <Transition
                      visible={visibleMenu}
                      animation="fade down"
                      duration={50}
                    >
                      <div>
                        {menuOptions.map((item) => (
                          <MenuItemMobileTablet
                            pathname={item.pathname}
                            onClick={navigateToLocation}
                            style={{ paddingLeft: "20px" }}
                          >
                            - {item.text}
                          </MenuItemMobileTablet>
                        ))}
                      </div>
                    </Transition>

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

                    <MenuItemMobileTablet
                      name="Contact Us"
                      onClick={toggleContact}
                      icon={visibleContact ? "angle down" : "angle right"}
                    ></MenuItemMobileTablet>

                    <Divider style={{ margin: "0px" }} hidden />
                    <Transition
                      visible={visibleContact}
                      animation="fade down"
                      duration={50}
                    >
                      <div>
                        <Link href="/privacy-cookie-policy">
                          <MenuItemMobileTablet style={{ paddingLeft: "20px" }}>
                            - Privacy & Cookie Policy
                          </MenuItemMobileTablet>
                        </Link>
                        <Link href="/magazine">
                          <MenuItemMobileTablet style={{ paddingLeft: "20px" }}>
                            - Magazine
                          </MenuItemMobileTablet>
                        </Link>
                        <Link href="/get-in-touch">
                          <MenuItemMobileTablet style={{ paddingLeft: "20px" }}>
                            - Get In Touch
                          </MenuItemMobileTablet>
                        </Link>
                        <Link href="/careers">
                          <MenuItemMobileTablet style={{ paddingLeft: "20px" }}>
                            - Careers
                          </MenuItemMobileTablet>
                        </Link>
                      </div>
                    </Transition>
                  </div>
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
                width="wide"
                style={{ backgroundColor: "white" }}
              >
                <Sidebar.Pusher dimmed={sidebarOpened}>
                  <Icon
                    onClick={handleSidebarHide}
                    color="red"
                    name="close"
                    size="huge"
                  />
                  <div style={{ padding: "90px 0px" }}>
                    <MenuItemMobileTablet
                      name="Location"
                      color="red"
                      onClick={toggleVisibility}
                      icon={visible ? "angle down" : "angle right"}
                    ></MenuItemMobileTablet>

                    <Divider style={{ margin: "0px" }} hidden />
                    <Transition
                      visible={visible}
                      animation="fade down"
                      duration={50}
                    >
                      <div>
                        {locationOptions.map((item) => (
                          <MenuItemMobileTablet
                            pathname={item.pathname}
                            onClick={navigateToLocation}
                            style={{ paddingLeft: "20px" }}
                          >
                            - {item.text}
                          </MenuItemMobileTablet>
                        ))}
                      </div>
                    </Transition>

                    <Link href="/delivery" forwardRef>
                      <MenuItemMobileTablet
                        name="EL Delivery & Take out"
                        active={router.pathname == "/delivery"}
                        color="red"
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
                    <MenuItemMobileTablet
                      name="Menus"
                      onClick={toggleMenu}
                      icon={visibleMenu ? "angle down" : "angle right"}
                    ></MenuItemMobileTablet>

                    <Divider style={{ margin: "0px" }} hidden />
                    <Transition
                      visible={visibleMenu}
                      animation="fade down"
                      duration={50}
                    >
                      <div>
                        {menuOptions.map((item) => (
                          <MenuItemMobileTablet
                            pathname={item.pathname}
                            onClick={navigateToLocation}
                            style={{ paddingLeft: "20px" }}
                          >
                            - {item.text}
                          </MenuItemMobileTablet>
                        ))}
                      </div>
                    </Transition>

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

                    <MenuItemMobileTablet
                      name="Contact Us"
                      onClick={toggleContact}
                      icon={visibleContact ? "angle down" : "angle right"}
                    ></MenuItemMobileTablet>

                    <Divider style={{ margin: "0px" }} hidden />
                    <Transition
                      visible={visibleContact}
                      animation="fade down"
                      duration={50}
                    >
                      <div>
                        <Link href="/privacy-cookie-policy">
                          <MenuItemMobileTablet style={{ paddingLeft: "20px" }}>
                            - Privacy & Cookie Policy
                          </MenuItemMobileTablet>
                        </Link>
                        <Link href="/magazine">
                          <MenuItemMobileTablet style={{ paddingLeft: "20px" }}>
                            - Magazine
                          </MenuItemMobileTablet>
                        </Link>
                        <Link href="/get-in-touch">
                          <MenuItemMobileTablet style={{ paddingLeft: "20px" }}>
                            - Get In Touch
                          </MenuItemMobileTablet>
                        </Link>
                        <Link href="/careers">
                          <MenuItemMobileTablet style={{ paddingLeft: "20px" }}>
                            - Careers
                          </MenuItemMobileTablet>
                        </Link>
                      </div>
                    </Transition>
                  </div>
                </Sidebar.Pusher>
              </Sidebar>
              {children}
              <Footer />
            </>
          );
        }}
      />
    </motion.div>
  );
};
const mapStateToProps = (state) => ({
  numberCart: state.cart.numberCart,
});
export default memo(connect(mapStateToProps, null)(ResponsiveHeader));
