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
    Image
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
 font-weight:900 !important;
 }
 .ui.secondary.menu .active.item {
     background: red !important;
 }
`;

const MenuItemLinkImage = React.forwardRef(function MenuItemLinkImage(props, ref) {
    return (
        <Image
            {...props}
        />
    );
});


const DesktopContainer = ({ children }) => {
    const router = useRouter();

    const [fixed, setFixedMenu] = useState(false);
    const hideFixedMenu = () => {
        setFixedMenu(false)
    }
    const showFixedMenu = () => {
        setFixedMenu(true)
    }
    return (
        <Media greaterThan='mobile'>
            <Visibility
                once={false}
                onBottomPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
            >
                <Menu secondary >
                    <Menu.Item>
                        <Link href="/" forwardRef>
                            <MenuItemLinkImage src={Logo} alt="website logo" size="tiny" />
                        </Link>
                    </Menu.Item>

                    <Link href="/"  >
                        <MenuItemLink
                            name='Locations'
                            active={router.pathname == "/"}
                            position="right"
                        >
                        </MenuItemLink>
                    </Link>
                    <Link href="/about" forwardRef>
                        <MenuItemLink
                            name='EL Delivery & Take out'
                            active={router.pathname == "/about"}

                        >
                        </MenuItemLink>
                    </Link>
                    <Link href="/" forwardRef>
                        <MenuItemLink
                            name='Menus'
                        >
                        </MenuItemLink>
                    </Link>
                    <Link href="/" forwardRef>
                        <MenuItemLink
                            name='Private Dining Events'
                        >
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

const ResponsiveProvider = ({ children }) => (
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)
export default ResponsiveProvider;