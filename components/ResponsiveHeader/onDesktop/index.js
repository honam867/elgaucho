import Link from "next/link";
import { memo, useState } from "react";
import {
  Icon,
  Label,
  Menu,
  Visibility,
  Modal,
  List,
  Transition,
  Button,
  Dropdown,
} from "semantic-ui-react";
import { MenuItemLink, MenuItemLinkImage } from "../style";
import {
  DropdownStyle,
  ButtonCustom,
  Circle,
  WrappFullScreen,
  CircleClose,
  ContactWrapper,
  ViewCardWrapper,
} from "./style";
import ViewCartComponent from "../../ViewCart";
const noFixedMenuStyle = {
  borderBottom: "1px solid #cf1b15",
  backgroundColor: "#fff",
  transition: "height 0.1s",
  height: "60px",
  maxHeight: "600px",
  position: "relative",
  zIndex: "1",
};
const fixedMenuStyle = {
  backgroundColor: "#fff",
  height: "10px",
  maxHeight: "600px",
  transition: "height 0.2s",
  borderBottom: "1px solid #cf1b15",
};

const active = {
  color: "#cf1b15",
};
const unactive = {
  color: "#222222",
};
const viewCartWhenFixed = {
  top: "60px",
};
const HeaderOnDesktop = ({
  children,
  Logo,
  newsOptions,
  router,
  locationOptions,
  navigateToLocation,
  menuOptions,
  numberCart,
}) => {
  const [menuFixed, setFixedMenu] = useState(false);
  const hideFixedMenu = () => {
    setFixedMenu(false);
  };
  const showFixedMenu = () => {
    setFixedMenu(true);
  };
  const [visible, setvisible] = useState(true);
  const [open, setOpen] = useState(false);
  const handleVisibility = (e) => {
    console.log(e);
    e.stopPropagation();
    setvisible(!visible);
  };
  const [locations, setDatas] = useState(locationOptions);

  function OpenModal(state, action) {
    switch (action.type) {
      case "close":
        return { openModel: false };
      case "open":
        return { openModel: true, size: action.size };
      default:
        throw new Error("Unsupported action...");
    }
  }
  const [state, dispatch] = React.useReducer(OpenModal, {
    openModel: false,
    size: undefined,
  });
  const { openModel, size } = state;
  return (
    <>
      <Visibility
        once={false}
        onTopPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Menu
          onMouseLeave={() => setOpen(false)}
          secondary
          fixed={menuFixed ? "top" : undefined}
          style={menuFixed ? fixedMenuStyle : noFixedMenuStyle}
        >
          <Menu.Item>
            <Link href="/home" forwardRef>
              <a>
                <MenuItemLinkImage
                  src={Logo}
                  alt="website logo"
                  style={menuFixed ? { width: "52px" } : { width: "72px" }}
                />
              </a>
            </Link>
          </Menu.Item>

          <MenuItemLink
            position="right"
            active={router.pathname == "/location"}
          >
            <Link href="/location">
              <DropdownStyle
                icon={false}
                item
                simple
                text="Locations"
                style={router.pathname == "/location" ? active : unactive}
                open={false}
                onMouseOver={() => setOpen(false)}
              >
                <Dropdown.Menu>
                  {locationOptions.map((item, i) => {
                    return (
                      <Dropdown.Item
                        key={i}
                        pathname={item.pathname}
                        onClick={navigateToLocation}
                      >
                        {item.text}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </DropdownStyle>
            </Link>
          </MenuItemLink>
          <MenuItemLink active={router.pathname == "/news"}>
            <Link href="/news">
              <DropdownStyle
                open={false}
                icon={false}
                item
                simple
                text="News"
                style={router.pathname == "/news" ? active : unactive}
                onMouseOver={() => setOpen(false)}
              >
                <Dropdown.Menu>
                  {newsOptions.map((item, i) => {
                    return (
                      <Dropdown.Item
                        key={i}
                        pathname={item.pathname}
                        onClick={navigateToLocation}
                      >
                        {item.text}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </DropdownStyle>
            </Link>
          </MenuItemLink>

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
              <DropdownStyle
                open={false}
                icon={false}
                item
                simple
                text="Menus"
                style={router.pathname == "/menu" ? active : unactive}
                onMouseOver={() => setOpen(false)}
              >
                <Dropdown.Menu>
                  {menuOptions.map((item, i) => {
                    return (
                      <Dropdown.Item
                        key={i}
                        pathname={item.pathname}
                        onClick={navigateToLocation}
                      >
                        {item.text}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </DropdownStyle>
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
              <DropdownStyle
                open={false}
                icon={false}
                item
                simple
                text="Contact Us"
                style={router.pathname == "/get-in-touch" ? active : unactive}
                onMouseOver={() => setOpen(false)}
              >
                <Dropdown.Menu>
                  <Dropdown.Item text="Get In Touch" />
                  <Link href="/careers">
                    <Dropdown.Item text="Careers" />
                  </Link>
                  <Link href="/privacy-cookie-policy">
                    <Dropdown.Item text="Privacy & Cookie Policy" />
                  </Link>
                </Dropdown.Menu>
              </DropdownStyle>
            </Link>
          </MenuItemLink>

          <Link href="/cart" forwardRef onMouseLeave={() => setOpen(false)}>
            <MenuItemLink
              active={router.pathname == "/cart"}
              onMouseOver={() => setOpen(true)}
            >
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

          {open && (
            <ViewCardWrapper
              style={!menuFixed ? viewCartWhenFixed : null}
              onMouseLeave={() => setOpen(false)}
            >
              <ViewCartComponent></ViewCartComponent>
            </ViewCardWrapper>
          )}

          <MenuItemLink>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/ElGauchoVietnam/"
            >
              <Icon name="facebook" color="blue" />
            </a>
          </MenuItemLink>
          <MenuItemLink>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/elgauchovietnam/"
            >
              <Icon name="instagram" color="violet" />
            </a>
          </MenuItemLink>
        </Menu>
      </Visibility>
      {children}
      <ContactWrapper>
        <Transition.Group animation={"fade"} duration={400}>
          {visible && (
            <Circle className="zoom-animate" onClick={handleVisibility}>
              <div className="group-icon">
                <div className="icon-first">
                  <Icon name="map marker alternate" />
                </div>
                <div className="icon-second">
                  <Icon name="facebook messenger" />
                </div>
                <div className="icon-third">
                  <Icon name="call" />
                </div>
              </div>
            </Circle>
          )}
        </Transition.Group>
        {!visible && (
          <WrappFullScreen onClick={handleVisibility}>
            <div className="group-icon">
              <a onClick={(e) => e.stopPropagation()} href="#">
                <div className="icon-first">
                  Our Elgaucho{" "}
                  <span>
                    {" "}
                    <Icon name="map marker alternate" />
                  </span>
                </div>
              </a>
              <a onClick={() => dispatch({ type: "open", size: "mini" })}>
                <div className="icon-second ">
                  Free Call
                  <span>
                    <Icon name="call" />
                  </span>
                </div>
              </a>
              <div onClick={(e) => e.stopPropagation()} className="icon-third">
                Messenger
                <span>
                  {" "}
                  <Icon name="facebook messenger" />
                </span>
              </div>
              <div onClick={(e) => e.stopPropagation()} className="icon-four">
                Zalo
                <span>
                  {" "}
                  <img
                    size="mini"
                    spaced="right"
                    alt="#"
                    src="/static/img/zalo-icon.svg"
                  />
                </span>
              </div>
            </div>
            <CircleClose onClick={handleVisibility}>
              <Icon name="x" className="close-icon" />
            </CircleClose>
          </WrappFullScreen>
        )}
      </ContactWrapper>

      <Modal
        size={size}
        open={openModel}
        onClose={() => dispatch({ type: "close" })}
      >
        <Modal.Content scrolling>
          <List divided>
            {locations.map((item, i) => {
              return (
                <List.Item key={i}>
                  <List.Content style={{ textAlign: "center" }}>
                    <a href={item.phone}>
                      <ButtonCustom fluid>{item.text}</ButtonCustom>
                    </a>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button
            style={{ textAlign: "center" }}
            color="red"
            onClick={() => dispatch({ type: "close" })}
          >
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default memo(HeaderOnDesktop);
