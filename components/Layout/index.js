import { Container } from "semantic-ui-react";
import Footer from "../Footer";
import ResponsiveProvider from "../ResponsiveProvider";
const Layout = ({ children }) => {
    return <>
        <ResponsiveProvider>
            <main >
                {children}
            </main>
            <Footer />
        </ResponsiveProvider>
    </>
}
export default Layout;
