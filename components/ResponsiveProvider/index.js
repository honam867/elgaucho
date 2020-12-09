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
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

const CustomMenuItem = React.forwardRef(function CustomMenuItem(props, ref) {
    return (
        <Menu.Item
            {...props}
        >
        </Menu.Item>
    );
});

const CustomMenuItemImage = React.forwardRef(function CustomMenuItemImage(props, ref) {
    return (
        <Image
            {...props}
        />
    );
});


const DesktopContainer = ({ children }) => {
    const [fixed, setFixedMenu] = useState(false);
    const hideFixedMenu = () => {
        setFixedMenu(false)
    }
    const showFixedMenu = () => {
        setFixedMenu(true)
    }
    const [activeItem, setstate] = useState("");
    const handleItemClick = (e, { name }) => {
        e.preventDefault();
        const activeItem = name;
        setstate(activeItem);
    }
    return (
        <Media greaterThan='mobile'>
            <Visibility
                once={false}
                onBottomPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
            >
                <Segment
                >
                    <Menu stackable secondary >
                        <Menu.Item>
                            <Link href="/" forwardRef>
                                <CustomMenuItemImage src={Logo} alt="website logo" size="tiny" />
                            </Link>
                        </Menu.Item>

                        <Link href="/" onClick={handleItemClick} passHref>
                            <CustomMenuItem
                                name='home'
                                active={activeItem === 'home'}
                                as="a"
                                position="right"
                            >
                            </CustomMenuItem>
                        </Link>
                        <Link href="/about" onClick={handleItemClick} forwardRef>
                            <CustomMenuItem
                                name='About'
                                active={activeItem === 'About'}
                                as="a"
                            >
                            </CustomMenuItem>
                        </Link>
                        <Link href="/" onClick={handleItemClick} forwardRef>
                            <CustomMenuItem
                                name='login'
                                active={activeItem === 'About'}
                                as="a"
                            >
                            </CustomMenuItem>
                        </Link>
                        <Link href="/" onClick={handleItemClick} forwardRef>
                            <CustomMenuItem
                            >
                                <Icon name='cart' />
                            </CustomMenuItem>
                        </Link>
                    </Menu>
                </Segment>
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