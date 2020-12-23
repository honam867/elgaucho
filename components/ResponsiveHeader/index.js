import { createMedia } from '@artsy/fresnel'
import Link from 'next/link';
import React, { useState } from 'react'
import {
    Button,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Visibility,
    Image,
} from 'semantic-ui-react';
import Logo from "../../public/static/img/elgauchologo.png"
import styled from "styled-components";
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})
import { useRouter } from "next/router";
const MenuItemLink = styled(Menu.Item)`
 &:hover {
    color: #cf1b15  !important;
    background: none !important;
 }
 border-right: 1px solid #C0C0C0 !important;
 border-radius: 0px !important;
 font-weight: bold !important;
`;

const MenuItemLinkImage = React.forwardRef(function MenuItemLinkImage(props, ref) {
    return (
        <Image
            {...props}
        />
    );
});

const fixedMenuStyle = {
    backgroundColor: '#fff',
    height: "10px",
    maxHeight: "600px",
    overflow: "hidden",
    transition: "height 0.2s",

}
const noFixedMenuStyle = {
    backgroundColor: '#fff',
    transition: "height 0.1s",
    height: "76px",
    maxHeight: "600px",
    overflow: "hidden"
}

const DesktopContainer = ({ children }) => {
    const router = useRouter();
    const [menuFixed, setFixedMenu] = useState(false);
    const hideFixedMenu = () => {
        setFixedMenu(false)
    }
    const showFixedMenu = () => {
        console.log('show')
        setFixedMenu(true)
    }
    return (
        <Media greaterThan='mobile'>
            <Visibility
                once={false}
                onTopPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
            >
                <Menu secondary fixed={menuFixed ? 'top' : undefined} style={menuFixed ? fixedMenuStyle : noFixedMenuStyle}>
                    <Menu.Item>
                        <Link href="/home" forwardRef>
                            <MenuItemLinkImage src={Logo} alt="website logo" size={menuFixed ? "mini" : "tiny"} />
                        </Link>
                    </Menu.Item>

                    <Link href="/location"  >
                        <MenuItemLink
                            name='Locations'
                            active={router.pathname == "/location"}
                            position="right"
                        >
                        </MenuItemLink>
                    </Link>
                    <Link href="/delivery" forwardRef>
                        <MenuItemLink
                            name='EL Delivery & Take out'
                            active={router.pathname == "/delivery"}
                        >
                            EL Delivery & Take out
                        </MenuItemLink>
                    </Link>
                    <Link href="/menu" forwardRef>
                        <MenuItemLink
                            name='Menus'
                            active={router.pathname == "/menu"}
                        >
                        </MenuItemLink>
                    </Link>
                    <Link href="/private-dining-events" forwardRef>
                        <MenuItemLink
                            name='Private Dining Events'
                            active={router.pathname == "/private-dining-events"}
                        >
                            Private | Dining Events
                        </MenuItemLink>
                    </Link>
                    <Link href="/" forwardRef>
                        <MenuItemLink
                            name='Gift Card'
                        >
                        </MenuItemLink>
                    </Link>
                    <Link href="/" forwardRef>
                        <MenuItemLink
                            name='Contact Us'
                        >
                        </MenuItemLink>
                    </Link>
                    <Link href="/" forwardRef>
                        <MenuItemLink
                        >
                            <Icon name='cart' />
                        </MenuItemLink>
                    </Link>
                    <Link href="/" forwardRef>
                        <MenuItemLink
                        >
                            <Icon name='facebook' color="blue" />
                        </MenuItemLink>
                    </Link>
                    <Link href="/" forwardRef>
                        <MenuItemLink
                        >
                            <Icon name='instagram' color="violet" />
                        </MenuItemLink>
                    </Link>
                </Menu>
            </Visibility>
            {children}
        </Media>
    )
}

const MobileContainer = ({ children }) => {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const handleSidebarHide = () => {
        setSidebarOpened(false);
    }
    const handleToggle = () => {
        setSidebarOpened(true)
    }
    const hideMenuSideBar = () => {
        console.log('test');
        setSidebarOpened(false)
    }
    return (
        <Media at='mobile'>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    inverted
                    onHide={handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        Home
                </Menu.Item>
                    <Menu.Item as='a'>Work</Menu.Item>
                    <Menu.Item as='a'>Company</Menu.Item>
                    <Menu.Item as='a'>Careers</Menu.Item>
                    <Menu.Item as='a'>Log in</Menu.Item>
                    <Menu.Item as='a'>Sign Up</Menu.Item>
                    <Menu.Item as='button' onClick={hideMenuSideBar} >Close</Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu inverted pointing secondary size='large'>
                            <Menu.Item onClick={handleToggle}>
                                <Icon name='sidebar' />
                            </Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' inverted>
                                    Log in
                        </Button>
                                <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                    Sign Up
                        </Button>
                            </Menu.Item>
                        </Menu>
                    </Segment>
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    )
}

const ResponsiveHeader = ({ children }) => (
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)
export default ResponsiveHeader;