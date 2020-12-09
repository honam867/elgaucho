import React, { useState } from 'react'
import { Menu, Image, Icon, Container, Visibility, Segment, Sidebar, Button } from 'semantic-ui-react';
import Logo from "../../public/static/img/elgauchologo.png"
import Link from "next/link";
import styled from 'styled-components';
import { createMedia } from '@artsy/fresnel';

const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024
    }
})


const MobileContainer = ({ children }) => {
    const [sidebarOpened, setSidebarOpened] = useState(false);
    const handleSidebarHide = () => {
        setSidebarOpened(false);
    }
    const handleToggle = () => {
        setSidebarOpened(true)
    }
    return (
        <Media as={Sidebar.Pushable} at='mobile'>
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
                    <Menu pointing secondary size='large'>
                        <Menu.Item onClick={handleToggle}>
                            <Icon name='sidebar' />
                        </Menu.Item>
                        <Menu.Item position='right'>
                            <Button as='a' >
                                Log in
                        </Button>
                            <Button as='a' style={{ marginLeft: '0.5em' }}>
                                Sign Up
                        </Button>
                        </Menu.Item>
                    </Menu>
                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    )
}

// const ResponsiveNavbar = ({ children }) => {
//     return <>
//         <MediaContextProvider>
//             <DesktopNavbar>{children}</DesktopNavbar>
//             <MobileContainer>{children}</MobileContainer>
//         </MediaContextProvider>
//     </>
// }

const Header = () => {
    return <>
    </>
}
export default Header;
