import Link from "next/link";
import { memo } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import { FooterWapper } from "./style";
const Footer = () => {
  return (
    <>
      <FooterWapper>
        <Container fluid className="footer" textAlign="center">
          <Grid doubling columns={4}>
            <Grid.Column>
              <Header as="h4">Company Details</Header>
              <Link href="/careers">
                <a>
                  <Header as="h6">Careers</Header>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Header as="h6">Franchies</Header>
                </a>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Contact Us</Header>
              <Link href="/get-in-touch">
                <a>
                  <Header as="h6">Get In Touch</Header>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Header as="h6">FAQ's</Header>
                </a>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Follow Us</Header>
              <Link href="https://www.facebook.com/ElGauchoVietnam/">
                <a target="_blank">
                  <Header as="h6">Facebook</Header>
                </a>
              </Link>
              <Link href="https://www.instagram.com/elgauchovietnam/">
                <a target="_blank">
                  <Header as="h6">Instagram</Header>
                </a>
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4">Legal</Header>
              <Link href="/privacy-cookie-policy">
                <a>
                  <Header as="h6">Privacy & Cookie Policy</Header>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Header as="h6">Terms & Conditions</Header>
                </a>
              </Link>
            </Grid.Column>
          </Grid>
        </Container>
        <Container style={{ marginTop: "10px" }} fluid>
          <div className="copyright">
            © Copyright - El Gaucho Argentinian Steakhouse 2021
          </div>
        </Container>
      </FooterWapper>
    </>
  );
};
export default memo(Footer);
