import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useState} from "react";
import {
  Divider,
  Icon,
  Label,
  Menu,
  Sidebar,
  Transition,
  Modal,
  List,
  Button,
  Image
} from "semantic-ui-react";
import {
  MenuItemMobileTablet,
  MenuItemLink,
  MenuItemLinkImage,
} from "../style";
import {
  IconPhoneHover,
  IconBookHover,
  ButtonCustom,
} from "./style";
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
const HeaderOnTablet = ({
  children,
  handleToggle,
  numberCart,
  handleSidebarHide,
  sidebarOpened,
  toggleVisibility,
  visible,
  locationOptions,
  toggleMenu,
  visibleMenu,
  menuOptions,
  visibleContact,
  toggleContact,
  Logo,
  navigateToLocation,
}) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [datas, setDatas] = useState(locationOptions);
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
        <MenuItemLink>
          <a target="_blank" href="https://www.facebook.com/ElGauchoVietnam/">
            <Icon size="large" name="facebook" color="blue" />
          </a>
        </MenuItemLink>
        <MenuItemLink>
          <a target="_blank" href="https://www.instagram.com/elgauchovietnam/">
            <Icon size="large" name="instagram" color="violet" />
          </a>
        </MenuItemLink>
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
            <Transition visible={visible} animation="fade down" duration={50}>
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
            {datas.map((item, i) => {
              return (
                <List.Item>
                  <List.Content style={{ textAlign: "center" }}>
                    <ButtonCustom onClick = {() =>{
                      item.visible = !item.visible;
                      setDatas([...datas])}} fluid>
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
                          flipped = "horizontally"
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
export default memo(HeaderOnTablet);
