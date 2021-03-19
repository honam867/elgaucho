import { Dropdown, Image, Menu } from "semantic-ui-react";
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

