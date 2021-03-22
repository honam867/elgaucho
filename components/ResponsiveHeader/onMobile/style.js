import {Icon, Button } from "semantic-ui-react";
import styled from "styled-components";

export const IconPhoneHover = styled(Icon.Group)`
  &:hover {
    text-shadow: 3px 3px 6px !important;
  }
  position: fixed !important;
  top: 94% !important;
  right: 12% !important;
`;

export const ButtonCustom = styled(Button)`
  color: #cf1b15 !important;
  background: #fff !important;
  border: 1px solid #cf1b15 !important;
`;

export const IconBookHover = styled(Icon.Group)`
  &:hover {
    text-shadow: 3px 3px 6px !important;
  }
  position: fixed !important;
  top: 94% !important;
  right: 1% !important;
`;