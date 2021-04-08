import styled from "styled-components";
import { Icon, Label } from "semantic-ui-react";

export const ViewCartWrapper = styled.div`
  span{
    padding: 0px 5px;
  }
  i.icon{
    margin: 0px !important;
  }
  
  p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
  }
  .ui.active.button:active, .ui.button:active{
    color: white !important;
  }
  .ui.card>.extra, .ui.cards>.card>.extra{
    min-height: fit-content !important;
  }
  .viewcart{
    max-height: 450px !important;
    overflow: auto;
    overflow-x: hidden;
    &-item{
        border-bottom: 1px solid rgba(34,36,38,.1);
        padding: 10px; 
    }
    &-button{
      font-size: 0.4rem !important;
      background: #cf1b15;
      color: white;
      :hover{
        background: #cf1b15;
        color: white;
      }
      :focus{
        background: #cf1b15;
      }
    }
  }
`

export const LabelCustom = styled(Label)`
  background: none !important;
`

export const IconCustom = styled(Icon)`
  color: red !important;
`

