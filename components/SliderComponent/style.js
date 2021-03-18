import { Header } from "semantic-ui-react";
import styled from "styled-components";
export const CustomHeaderFullSlider = styled(Header)`
font-size: 40px !important;
color: white !important;
animation: HeaderFullSlider 2s  !important;
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
 @media only screen and (min-width:320px) and (max-width:767px)  {
  color: white !important;
  font-size: 15px !important;
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
`

export const CustomHeaderFullSliderSubTitle = styled.p`
font-size: 18px !important;
color: white !important;
animation: fadeInTopSubTitle 2s  !important;
@keyframes fadeInTopSubTitle {
    100% {
       opacity: 1;
       transform: translateY(0px);
    }
    0% {
       opacity: 0;
       transform: translateY(30px);
    }
 }
 @media only screen and (min-width:320px) and (max-width:767px)  {
  color: white !important;
  font-size: 12px !important;
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
`

export const CustomSubTitleLocations = styled.p`
font-size: 18px !important;
font-weight: 300 !important;
color: white !important;
animation: fadeInTopSubTitle 2s  !important;
@keyframes fadeInTopSubTitle {
    100% {
       opacity: 1;
       transform: translateY(0px);
    }
    0% {
       opacity: 0;
       transform: translateY(30px);
    }
 }
 @media only screen and (min-width:320px) and (max-width:767px)  {
  font-size: 12px !important;
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
`

export const CustomHeaderLocations = styled(Header)`
font-size: 40px !important;
font-weight: bold !important;
color: white !important;
animation: fadeInDownLocations 2s  !important;
@keyframes fadeInDownLocations {
    0% {
       opacity: 0;
       transform: translateY(-30px);
    }
    100% {
       opacity: 1;
       transform: translateY(0);
    }
 }
 @media only screen and (min-width:320px) and (max-width:767px)  {
  color: white !important;
  font-size: 20px !important;
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
`

export const CustomButtonAtLocationPage = styled.div`
animation: fadeInDownButtonLocations 2s  !important;
@keyframes fadeInDownButtonLocations {
    0% {
       opacity: 0;
       transform: translateY(-30px);
    }
    100% {
       opacity: 1;
       transform: translateY(0);
    }
 }
 @media only screen and (min-width:320px) and (max-width:767px)  {
  color: white !important;
  font-size: 20px !important;
  position: relative;
  bottom: 10px;
}
`


export const AngleDownButton = styled.div`
cursor: pointer !important;
position: absolute !important;
color: #FFFFFF  !important;
font-size: 40px !important;
z-index: 1 !important;
text-align: center !important;
width: 100% !important;
animation: fadeInDownAngleDown 2.5s infinite !important;
animation-timing-function: ease-in-out !important;
@keyframes fadeInDownAngleDown {
    0% {
       opacity: 1;
       transform: translateY(-30px);
    }
    100% {
       opacity: 0;
       transform: translateY(0);
    }
 }

`

export const AngleDowButtonPosition = styled.div`
position: relative !important;
top: 150px !important;
@media only screen and (min-width:320px) and (max-width:767px)  {
    top: 120px !important;
  }
`

export const CustomHeaderPrivateDining = styled(Header)`
font-size: 40px !important;
color: white !important;
position: absolute !important;
width: 100% !important;
top: 35% !important;
text-align:center !important;
animation: PrivateDiningFullSlider 1s  !important;
@keyframes PrivateDiningFullSlider {
    0% {
       opacity: 0;
       transform: translateX(-700px);
    }
    100% {
       opacity: 1;
       transform: translateX(0);
    }
 }
 @media only screen and (min-width:320px) and (max-width:767px)  {
  color: white !important;
  font-size: 20px !important;
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
`


export const NameLocationFromDiningPages = styled.div`
    position: absolute;
    bottom: 10%;
    background-color: #000000;
    padding: 15px;
    opacity: 0.8;
    animation: PrivateDiningFullSliderLocationSection 1s  !important;
    @keyframes PrivateDiningFullSliderLocationSection {
    0% {
       opacity: 0;
       transform: translateX(-20px);
    }
    100% {
       opacity: 0.8;
       transform: translateX(0);
    }
 }
`

export const SlideShowAlignCaptionFullSlider = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    top: 45%;
    @media only screen and (min-width:320px) and (max-width:767px)  {
      top: 40%;
}
`
