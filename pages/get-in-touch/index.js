import { Button, Container, Form, Header, TextArea } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import styleGetInTouch from "./getintouch.module.css";
const CustomButton = styled(Button)`
  &:hover {
    color: #cf1b15 !important;
    background: #fff !important;
    border: 1px solid #cf1b15;
  }
  background: #cf1b15 !important;
  color: #fff !important;
`;

const CustomHeader = styled(Header)`
  color: white !important;
  font-weight: 300 !important;
`;
const CustomLabel = styled.label`
  color: white !important;
  text-align: left !important;
`;

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const GetInTouch = () => {
  return (
    <Layout>
      <div className={styleGetInTouch.bg}>
        <Container fluid>
          <CustomHeader as="h2">GET IN TOUCH!</CustomHeader>
          <p>
            Please complete all information below so we can address your request
            promptly.
          </p>
        </Container>
        <Container fluid>
          <Form style={{ margin: "auto", width: "50%", color: "white" }}>
            <Form.Field>
              <CustomLabel className={styleGetInTouch.label}>
                First Name: *
              </CustomLabel>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleGetInTouch.label}>
                Last Name: *
              </CustomLabel>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleGetInTouch.label}>
                Email: *
              </CustomLabel>
              <input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleGetInTouch.label}>
                Phone: *
              </CustomLabel>
              <input placeholder="Phone" />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleGetInTouch.label}>
                Locations: *
              </CustomLabel>
              <Form.Select fluid options={options} placeholder="Location" />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleGetInTouch.label}>
                Messages: *
              </CustomLabel>
              <Form.TextArea></Form.TextArea>
            </Form.Field>
            <p>
              Please submit your request by selecting the button below. In a few
              seconds you will receive a notification on successful submission
            </p>
            <CustomButton type="submit">Submit</CustomButton>
          </Form>
        </Container>
      </div>
    </Layout>
  );
};
export default GetInTouch;
