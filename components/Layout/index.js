import { Container } from "semantic-ui-react";
import Footer from "../Footer";
import ResponsiveProvider from "../ResponsiveProvider";
const Layout = ({ children }) => {
    return <>
        <ResponsiveProvider>
            <Container>
                <main style={{ height: "700px" }}>
                    {children}
                </main>
            </Container>
            <Footer />
        </ResponsiveProvider>
    </>
}
export default Layout;
