import { Image, Menu } from "semantic-ui-react";
import styled from "styled-components";

export const MenuItemMobileTablet = styled(Menu.Item)`
  border-bottom: 1px solid #c0c0c0 !important;
  color: #cf1b15 !important;
  font-size: 16px;
  font-family: "playfair display", "HelveticaNeue", "Helvetica Neue",
    "Helvetica-Neue", Helvetica, Arial, sans-serif !important;
  padding-top: 16px !important;
  padding-bottom: 16px !important;
`;

export const MenuItemLink = styled(Menu.Item)`
&:hover {
  color: #cf1b15 !important;
  background: none !important;
}
border-right: 1px solid #c0c0c0 !important;
border-radius: 0px !important;
font-weight: bold !important;
padding-top: 0px !important;
padding-bottom: 0px !important;
`;

export const MenuItemLinkImage = React.forwardRef(function MenuItemLinkImage(
  props
) {
  return <Image {...props} />;
});
