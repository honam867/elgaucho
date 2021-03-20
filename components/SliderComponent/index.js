import Slider from "react-slick";
import { memo, useState } from "react";
import { Header, Icon } from "semantic-ui-react";
import ButtonCustomComponent from "../ButtonCustomComponent";
import {
  CustomHeaderFullSlider,
  CustomHeaderFullSliderSubTitle,
  CustomSubTitleLocations,
  CustomHeaderLocations,
  CustomButtonAtLocationPage,
  AngleDownButton,
  CustomHeaderPrivateDining,
  NameLocationFromDiningPages,
  SlideShowAlignCaptionFullSlider,
  SliderWrapper
} from "./style";
const SliderComponent = ({ Images, height, ...props }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    fade: !props.slide,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    adaptiveHeight: true,
    beforeChange: (current, next) => { setActiveSlide(next) },
    appendDots: dots => (
      <div
        style={{
          paddingBottom: "30px"
        }}
      >
        <ul style={{ paddingLeft: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => {
      const style = {
        width: "20px",
        height: "20px",
        color: "black",
        border: "1px solid #FFFFFF",
        borderRadius: "50%",
        margin: "2px",
      }
      const activeStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid #FFFFFF",
        borderRadius: "50%",
        margin: "2px",
        background: "#cf1b15"
      };
      return (
        <div
          style={i === activeSlide ? activeStyle : style}
        >
        </div>
      )
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: 1,
          right: "0px",
          fontSize: "50px"
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "0px",
          zIndex: "100"
        }}
        onClick={onClick}
      />
    );
  }


  const SlideShowAlignCaption = {
    color: "white !important",
    position: "absolute",
    top: "40%",
    width: "100%",
    textAlign: "center"
  }
  // const SlideShowAlignCaptionFullSlider = {
  //     color: "white !important",
  //     position: "absolute",
  //     top: "40%",
  //     width: "100%",
  //     textAlign: "center",
  // }
  const gotoMainSection = () => {
    props.gotomainsection();
  }
  return (
    <SliderWrapper>
      {props.angleDown ?
        <AngleDownButton onClick={gotoMainSection} >
          <Icon name="angle down" />
        </AngleDownButton>
        : null
      }
      <Slider {...settings}>
        {Images.map((item) => {
          return (
            <div key={item.id}>
              <div
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${item.imgUrl})`,
                  backgroundAttachment: `${props.backgroundAttachment}`,
                  width: '100%',
                  height: height,
                  position: "relative"
                }}
              >
                {
                  item.opacityBlack &&
                  <div style={{
                    background: "rgba(0,0,0, .3)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}></div>
                }

              </div>
              {
                props.fromLocationPage ?
                  <div style={SlideShowAlignCaption}>
                    <CustomHeaderLocations>{item.title}</CustomHeaderLocations>
                    <CustomSubTitleLocations>{item.subTitle}</CustomSubTitleLocations>
                    <CustomButtonAtLocationPage>
                      <ButtonCustomComponent name={item.buttonName} url={item.url} />
                    </CustomButtonAtLocationPage>
                  </div>
                  : null
              }
              {
                props.fromPrivateDiningEventPages ?
                  <CustomHeaderPrivateDining>{Images[0].title}</CustomHeaderPrivateDining>
                  : null
              }
              {
                props.fromPrivateDiningEventPagesSection ?
                  <NameLocationFromDiningPages>
                    <Header style={{ color: "white" }}>
                      {item.name}
                    </Header>
                  </NameLocationFromDiningPages>
                  : null
              }
            </div>
          )
        }
        )}
      </Slider>
      <SlideShowAlignCaptionFullSlider>
        <CustomHeaderFullSlider as="h1">{props.captionTitle}</CustomHeaderFullSlider>
        <CustomHeaderFullSliderSubTitle>{props.captionContent}</CustomHeaderFullSliderSubTitle>
      </SlideShowAlignCaptionFullSlider>
    </SliderWrapper >

  )
}
export default memo(SliderComponent);