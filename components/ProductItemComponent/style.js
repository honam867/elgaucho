import { Button, Item } from "semantic-ui-react";
import styled from "styled-components";

export const ProductItemWrapper = styled.div`
  .customHeightDescription {
    min-height: 100px !important;
    text-align: justify;
  }
  .lazy-style {
    padding: 10px 0px;
    border-bottom: 1px solid #dededf;
    :last-child {
      border: none;
    }
  }
`;

export const AddToCartButton = styled(Button.Content)`
  color: #fff !important;
  background: #cf1b15 !important;
`;

export const PriceCustomFromHeader = styled(Item.Header)`
  color: #cf1b15 !important;
  font-weight: 600 !important;
  font-size: 18px !important;
  margin-top: 10px !important;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-weight: bold !important;
    font-size: 15px !important;
  }
`;

export const PriceCustomFromModal = styled(Item.Header)`
  color: #cf1b15 !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  margin-top: 5px !important;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-weight: bold !important;
    font-size: 10px !important;
  }
`;

export const ItemHeaderCustom = styled(Item.Header)`
  &:hover {
    color: #cf1b15 !important;
    background: #fff !important;
  }
  font-size: 15px;
  font-weight: bold;
  color: black;
`;
