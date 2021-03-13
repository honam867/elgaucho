import { Button, Container, Form, Header, Input } from "semantic-ui-react";
import styled from "styled-components";
import Layout from "../../components/ResponsiveHeader/index";
import styleCareers from "./careers.module.css";
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
  color: black !important;
  font-weight: 200 !important;
`;
const CustomLabel = styled.label`
  color: black !important;
  text-align: left !important;
`;

const countryOptions = [
  { key: "Vietnam", text: "Vietnam", value: "Vietnam" },
  { key: "Thailand", text: "Thailand", value: "Thailand" },
  { key: "Philippines", text: "Philippines", value: "Philippines" },
  { key: "Hong Kong", text: "Hong Kong", value: "Hong Kong" },
];
const cityOptions = [
  {
    key: "Ho Chi Minh City",
    text: "Ho Chi Minh City",
    value: "Ho Chi Minh City",
  },
  { key: "Hanoi", text: "Hanoi", value: "Hanoi" },
  { key: "Danang", text: "Danang", value: "Danang" },
  { key: "Bangkok", text: "Bangkok", value: "Bangkok" },
  { key: "Danang", text: "Danang", value: "Danang" },
  { key: "Koh Samui", text: "Koh Samui", value: "Koh Samui" },
  { key: "Phuket", text: "Phuket", value: "Phuket" },
  { key: "Manila", text: "Manila", value: "Manila" },
  { key: "Hong Kong", text: "Hong Kong", value: "Hong Kong" },
];

const Careers = () => {
  return (
    <Layout>
      <div className={styleCareers.bg}>
        <Container className={styleCareers.background}>
          <CustomHeader as="h4">EMPLOYMENT APPLICATION</CustomHeader>
          <p style = {{textAlign: 'justify'}}>
            With our continuous expansion, we always appreciate the application
            of potential new staff on all levels. Whether you have years of
            experience or have never worked in the food and beverage business
            before, in the end, it is about your personal approach to learning
            and growing and in how far you want to go and to become a valuable
            member of the team. Tell us more about yourself!
          </p>
          <Form>
            <Form.Field>
              <CustomLabel className={styleCareers.label}>
                First Name: *
              </CustomLabel>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleCareers.label}>
                Last Name: *
              </CustomLabel>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleCareers.label}>Phone: *</CustomLabel>
              <input placeholder="Phone" />
            </Form.Field>
            <Form.Field>
              <Form.Field>
                <CustomLabel className={styleCareers.label}>
                  Address: *
                </CustomLabel>
                <input placeholder="Address" />
              </Form.Field>
              <Form.Field>
                <CustomLabel className={styleCareers.label}>
                  City: *
                </CustomLabel>
                <input placeholder="City" />
              </Form.Field>
              <Form.Field>
                <CustomLabel className={styleCareers.label}>
                  Country of Residence: *
                </CustomLabel>
                <input placeholder="Country of Residence" />
              </Form.Field>
              <CustomLabel className={styleCareers.label}>
                Email Address: *
              </CustomLabel>
              <input placeholder="Email Address" />
            </Form.Field>

            <Form.Field>
              <CustomLabel className={styleCareers.label}>
                Country Applying For: *
              </CustomLabel>
              <Form.Select
                fluid
                options={countryOptions}
                placeholder="Country Applying For"
              />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleCareers.label}>
                City Applying For: *
              </CustomLabel>
              <Form.Select
                fluid
                options={cityOptions}
                placeholder="City Applying For"
              />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleCareers.label}>
                Position Applying For: *
              </CustomLabel>
              <input placeholder="Position Applying For" />
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleCareers.label}>
                Cover Letter:
              </CustomLabel>
              <Form.TextArea></Form.TextArea>
            </Form.Field>
            <Form.Field>
              <CustomLabel className={styleCareers.label}>
                Upload Resume File:
              </CustomLabel>
              <Input type="text"  action>
                <input />
                <Button type="button">upload</Button>
                <CustomButton type="button">browse for file</CustomButton>
              </Input>
            </Form.Field>
            <p style = {{textAlign: 'justify'}}>
              Please submit your request by selecting the button below. In a few
              seconds you will receive a notification on successful submission.
              NOTE: Please do not click the button more than once to prevent
              duplicate entries.
            </p>
            <CustomButton type="submit">Submit your request</CustomButton>
          </Form>
        </Container>
      </div>
    </Layout>
  );
};
export default Careers;
