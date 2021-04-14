import { Button } from "semantic-ui-react";
import styled from "styled-components";

export const CustomButton = styled(Button)`
  color: #fff !important;
  background: #cf1b15 !important;
  font-weight: 300 !important;
  margin: 10px !important;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    color: white !important;
    font-size: 10px !important;
    @keyframes HeaderFullSlider {
      0% {
        opacity: 0;
        transform: translateY(-70px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;
