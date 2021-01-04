import Link from "next/link";
import React, { useState } from "react";
import {
  Icon,
  Menu,
  Sidebar,
  Visibility,
  Image,
  Ref,
} from "semantic-ui-react";
import Logo from "../../public/static/img/elgauchologo.png";
import styled from "styled-components";
import Responsive from "../../components/Responsive";
import { useRouter } from "next/router";
import Footer from "../Footer/index"
const MenuItemLink = styled(Menu.Item)`
  &:hover {
    color: #cf1b15 !important;
    background: none !important;
  }
  border-right: 1px solid #c0c0c0 !important;
  border-radius: 0px !important;
  font-weight: bold !important;
`;
const CustomMenu = styled(Menu)`
  margin: 0px !important;
`
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
  overflow: "hidden",
  transition: "height 0.2s",
  borderBottom: "1px solid #cf1b15",
};
const noFixedMenuStyle = {
  backgroundColor: "#fff",
  transition: "height 0.1s",
  height: "76px",
  maxHeight: "600px",
  overflow: "hidden",
};
const noFixedMenuStyleOnMobile = {
  backgroundColor: "#fff",
  transition: "height 0.1s",
  height: "60px",
  margin: "0px !important",
  maxHeight: "600px",
  margin: "0px !important"

};

const ResponsiveHeader = ({ children }) => {
  const router = useRouter();
  const [menuFixed, setFixedMenu] = useState(false);
  const hideFixedMenu = () => {
    console.log('hide')
    setFixedMenu(false);
  };
  const showFixedMenu = () => {
    console.log('show')
    setFixedMenu(true);
  };
  const handleToggle = () => {
    setSidebarOpened(true);
  };
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const handleSidebarHide = () => {
    setSidebarOpened(false);
  };
  const segmentRef = React.useRef()
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
                      size={menuFixed ? "mini" : "tiny"}
                    />
                  </Link>
                </Menu.Item>

                <Link href="/location">
                  <MenuItemLink
                    name="Locations"
                    active={router.pathname == "/location"}
                    position="right"
                  ></MenuItemLink>
                </Link>
                <Link href="/delivery" forwardRef>
                  <MenuItemLink
                    name="EL Delivery & Take out"
                    active={router.pathname == "/delivery"}
                  >
                    EL Delivery & Take out
            </MenuItemLink>
                </Link>
                <Link href="/menu" forwardRef>
                  <MenuItemLink
                    name="Menus"
                    active={router.pathname == "/menu"}
                  ></MenuItemLink>
                </Link>
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
                <Link href="/get-in-touch" forwardRef>
                  <MenuItemLink
                    name="Contact Us"
                    active={router.pathname == "/get-in-touch"}
                  ></MenuItemLink>
                </Link>
                <Link href="/" forwardRef>
                  <MenuItemLink>
                    <Icon name="cart" />
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
          </>
        )
      }}
      onMobile={() => {
        return (
          <>
            <CustomMenu
              secondary
              style={noFixedMenuStyleOnMobile}
            >
              <Menu.Item style={{ paddingTop: "20px" }}>
                <Link href="/home" forwardRef>
                  <MenuItemLinkImage
                    src={Logo}
                    alt="website logo"
                    size="tiny"
                  />
                </Link>
              </Menu.Item>
              <Menu.Item position="right" onClick={handleToggle}>
                <Icon name="bars" />
              </Menu.Item>
            </CustomMenu>
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
                <Menu.Item as='a'>Home</Menu.Item>
                <Menu.Item as='a'>Games</Menu.Item>
                <Menu.Item as='a'>Channels</Menu.Item>
              </Sidebar.Pusher>
            </Sidebar>
            {children}
            <Footer />
          </>
        )
      }}
    />
  )
};
export default ResponsiveHeader;
