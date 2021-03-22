import styled from "styled-components";

export const ProductItemOnMobileWrapper = styled.div`

.ui.card{
    width: 100%;
    border-bottom: 1px solid rgba(34,36,38,.1);
    :last-child{
        border: none !important;
    }
}
.ui.card .content img, .ui.cards>.card .content img{
    margin: 0px;
}
.card{

    &-name{
        font-size: 1rem !important;
        padding-left: 40px !important;
    }
    &-image{
        height: 35px !important;
        width: 35px;
        object-fit: cover;
    }
    &-content{
        padding: 20px 0px !important;
    }
    &-group{
        display:flex;
        justify-content: space-between;
        &-number{

        }
        &-button{
        font-size: 0.6rem !important;
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
    &-prices{
        &-promote{
            font-weight: light;
            font-size: 0.9rem;
            padding: 0px 5px;
        }
        &-price{
            color: #cf1b15;
            font-weight: bold;
            padding: 0px 5px;
        }
    }
    

   
  i.icon{
    margin: 0px !important;
  } 
    
}
`