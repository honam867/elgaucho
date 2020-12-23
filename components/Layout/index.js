import { Container } from "semantic-ui-react";
import Footer from "../Footer";
import ResponsiveHeader from "../ResponsiveHeader";
const Layout = ({ children }) => {
    return <>
        <ResponsiveHeader>
            <main >
                {children}
            </main>
            <Footer />
        </ResponsiveHeader>
    </>
}
export default Layout;
