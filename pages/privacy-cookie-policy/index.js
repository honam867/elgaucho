import { Container, Header } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import stylePrivacyCookie from "./privacycookie.module.css";

const CustomHeader = styled(Header)`
  color: black !important;
  font-weight: 300 !important;
`;

const PrivacyCookiePolicy = () => {
  return (
    <Layout>
      <div className={stylePrivacyCookie.bg}>
        <Container>
          <CustomHeader as="h2">
            Privacy <span style={{ color: "#cf1b15" }}>&</span> Cookie Policy
          </CustomHeader>
          <p style={{ textAlign: "justify" }}>
            El Gaucho Argentinian Steakhouse is committed to ensuring that your
            privacy on any information that you give to us is protected.
            Depending on your usage of our website or services, we might collect
            your name, contact information including Email address, demographic
            information such as postcode, preferences and interests as well as
            other information relevant to customer surveys and/or offers. We
            require this information to understand your needs and provide you
            with a better service, improve products and services, customise and
            optimise our website and send periodically promotional Email that
            might be of your interest. In order to prevent unauthorised access
            or disclosure we have put in place suitable physical, electronic and
            managerial procedures to safeguard and secure the information we
            collect online.
          </p>
          <p style={{ textAlign: "justify" }}>
            We use traffic log cookies to identify which pages are being used.
            This helps us analyse data about web page traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system. A cookie is a small file which asks
            permission to be placed on your computer’s hard drive. Once you
            agree, the file is added and the cookie helps analyse web traffic or
            lets you know when you visit a particular site. Cookies allow web
            applications to respond to you as an individual. The web application
            can tailor its operations to your needs, likes and dislikes by
            gathering and remembering information about your preferences. A
            cookie in no way gives us access to your computer or any information
            about you, other than the data you choose to share with us. You can
            choose to accept or decline cookies.
          </p>
          <p style={{ textAlign: "justify" }}>
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time
            by writing to or emailing us at{" "}
            <a href="mailto:privacy@elgaucho.asia">privacy@elgaucho.asia</a>. We
            will not sell, distribute or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. If you believe that any information we are holding on you
            is incorrect or incomplete, please write to or email us as soon as
            possible, at the above address. We will promptly correct any
            information found to be incorrect.
          </p>
        </Container>
      </div>
    </Layout>
  );
};
export default PrivacyCookiePolicy;
