import { Container, Grid, Header } from "semantic-ui-react";

import {FooterWapper } from "./style";
const Footer = () => {
    return <>
        <FooterWapper>
        <Container fluid className = "footer" textAlign="center">
            <Grid doubling columns={4}>
                <Grid.Column>
                    <Header as="h4">COMPANY DETAILS</Header>
                    <Header as="h6">Careers</Header>
                    <Header as="h6">Franchies</Header>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4">Contact Us</Header>
                    <Header as="h6">Get In Touch</Header>
                    <Header as="h6">FAQ's</Header>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4">Follow Us</Header>
                    <Header as="h6">Facebook</Header>
                    <Header as="h6">Instagram</Header>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4">Legal</Header>
                    <Header as="h6">Privacy & Cookie Policy</Header>
                    <Header as="h6">Terms & Conditions</Header>

                </Grid.Column>
            </Grid>
        </Container>
        </FooterWapper>
    </>
}
export default Footer;
