import React, { memo, useState } from "react";
import Logo from "../../public/static/img/elgauchologonobg.png";
import Responsive from "../../components/Responsive";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import HeaderOnDesktop from "./onDesktop/index";
import HeaderOnMobile from "./onMobile/index";
import HeaderOnTablet from "./onTablet/index";
import Footer from "../Footer";

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
      text: "Magazine",
      value: 1,
      pathname: "/magazine",

    },
    {
      key: 2,
      text: "Megazing",
      value: 3,
      pathname: "/location#XuanThuy",

    },
    {
      key: 3,
      text: "News",
      value: 4,
      pathname: "/location#XuanThuy",
    },
    {
      key: 4,
      text: "Promotions",
      value: 5,
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
    <div >
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
            <HeaderOnTablet
              children={children}
              handleToggle={handleToggle}
              numberCart={numberCart}
              handleSidebarHide={handleSidebarHide}
              sidebarOpened={sidebarOpened}
              toggleVisibility={toggleVisibility}
              visible={visible}
              locationOptions={locationOptions}
              toggleMenu={toggleMenu}
              visibleMenu={visibleMenu}
              menuOptions={menuOptions}
              visibleContact={visibleContact}
              toggleContact={toggleContact}
              Logo={Logo}
              navigateToLocation={navigateToLocation}
            />
          );
        }}
        onMobile={() => {
          return (
            <HeaderOnMobile
              children={children}
              handleSidebarHide={handleSidebarHide}
              handleToggle={handleToggle}
              numberCart={numberCart}
              sidebarOpened={sidebarOpened}
              toggleVisibility={toggleVisibility}
              visible={visible}
              locationOptions={locationOptions}
              Logo={Logo}
              navigateToLocation={navigateToLocation}
              toggleMenu={toggleMenu}
              visibleMenu={visibleMenu}
              menuOptions={menuOptions}
              toggleContact={toggleContact}
              visibleContact={visibleContact}
            />
          );
        }}
      />

      <Footer />

    </div>
  );
};
const mapStateToProps = (state) => ({
  numberCart: state.cart.numberCart,
});
export default memo(connect(mapStateToProps, null)(ResponsiveHeader));
