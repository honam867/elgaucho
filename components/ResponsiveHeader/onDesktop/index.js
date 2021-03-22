import Link from "next/link";
import { memo, useState} from "react";
import {
  Icon,
  Label,
  Menu,
  Visibility,
  Modal,
  List,
  Image,
  Transition,
  Divider,
  Button
} from "semantic-ui-react";
import { MenuItemLink, MenuItemLinkImage } from "../style";
import {
  DropdownStyle,
  DropdownItemStyle,
  DropdownMenuStyle,
  IconPhoneHover,
  IconBookHover,
  ButtonCustom,
} from "./style";
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
  const [open, setOpen] = React.useState(false);
  const [locations, setDatas] = useState(locationOptions);
  function openLocationChild(locationObject) {
    console.log(locationObject)
    locationObject.visible = !locationObject.visible;
    setDatas([...locations])
  }
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
                style={menuFixed ? { width: "52px" } : { width: "72px" }}
              />
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
              >
                <DropdownMenuStyle>
                  {locationOptions.map((item, i) => {
                    return (
                      <DropdownItemStyle
                        key={i}
                        pathname={item.pathname}
                        onClick={navigateToLocation}
                      >
                        {item.text}
                      </DropdownItemStyle>
                    );
                  })}
                </DropdownMenuStyle>
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
              >
                <DropdownMenuStyle>
                  {newsOptions.map((item, i) => {
                    return (
                      <DropdownItemStyle
                        key={i}
                        pathname={item.pathname}
                        onClick={navigateToLocation}
                      >
                        {item.text}
                      </DropdownItemStyle>
                    );
                  })}
                </DropdownMenuStyle>
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
              >
                <DropdownMenuStyle>
                  {menuOptions.map((item, i) => {
                    return (
                      <DropdownItemStyle
                        key={i}
                        pathname={item.pathname}
                        onClick={navigateToLocation}
                      >
                        {item.text}
                      </DropdownItemStyle>
                    );
                  })}
                </DropdownMenuStyle>
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
              >
                <DropdownMenuStyle>
                  <DropdownItemStyle text="Get In Touch" />
                  <Link href="/careers">
                    <DropdownItemStyle text="Careers" />
                  </Link>
                  <Link href="/privacy-cookie-policy">
                    <DropdownItemStyle text="Privacy & Cookie Policy" />
                  </Link>
                </DropdownMenuStyle>
              </DropdownStyle>
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
          <MenuItemLink>
            <a target="_blank" href="https://www.facebook.com/ElGauchoVietnam/">
              <Icon name="facebook" color="blue" />
            </a>
          </MenuItemLink>
          <MenuItemLink>
            <a
              target="_blank"
              href="https://www.instagram.com/elgauchovietnam/"
            >
              <Icon name="instagram" color="violet" />
            </a>
          </MenuItemLink>
        </Menu>
      </Visibility>
      {children}

      <Modal
        size="mini"
        open={open}
        trigger={
          <IconPhoneHover size="large">
            <Icon color="red" size="big" name="circle outline" />
            <Icon color="red" name="phone" />
          </IconPhoneHover>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Content scrolling>
          <List divided>
            {locations.map((item, i) => {
              return (
                <List.Item>
                  <List.Content style={{ textAlign: "center" }}>
                    <ButtonCustom onClick = {() => openLocationChild(item)} fluid>
                      {item.text}
                    </ButtonCustom>
                    <Divider style = {{margin: "0px"}} hidden />
                    <Transition
                      visible={item.visible}
                      animation="slide down"
                      duration={150}
                    >
                      <div>
                      <List.Description>
                        <Icon flipped = "horizontally" link size="big" name="phone" />
                        <Icon
                          link
                          size="big"
                          color="blue"
                          name="facebook messenger"
                        />
                        <a href="" target="_blank">
                          <Image
                            size="mini"
                            spaced="right"
                            src="/static/img/zalo-icon.svg"
                          />
                        </a>
                      </List.Description>
                      </div>
                    </Transition>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button style = {{textAlign: "center"}} color="red" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>

      <Link href="/private-dining-events" forwardRef>
        <IconBookHover size="large">
          <Icon color="red" size="big" name="circle outline" />
          <Icon link color="orange" name="calendar check outline" />
        </IconBookHover>
      </Link>
    </>
  );
};

export default memo(HeaderOnDesktop);
