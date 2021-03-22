import { Dropdown, Icon, Button } from "semantic-ui-react";
import styled from "styled-components";

export const DropdownStyle = styled(Dropdown)`
  &:hover {
    color: #cf1b15 !important;
    background: none !important;
  }
  .none {
    display: none !important;
  }
  border-radius: 0px !important;
  font-weight: bold !important;
  padding: 0px !important;
`;


export const IconPhoneHover = styled(Icon.Group)`
  &:hover {
    text-shadow: 3px 3px 6px !important;
  }
  position: fixed !important;
  bottom: 70px !important;
  right: 12px !important;
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
  bottom: 20px !important;
  right: 12px !important;
`;

export const DropdownMenuStyle = styled(Dropdown.Menu)`
.item:hover{
  background: yellow !important;
}

`
export const DropdownItemStyle = styled(Dropdown.Item)`
:hover{
  background: yellow !important;
}
`;

