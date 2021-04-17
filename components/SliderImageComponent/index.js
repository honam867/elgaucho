/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import Slider from "react-slick";
const SliderImage = ({ images, className }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    // eslint-disable-next-line react/display-name
    appendDots: (dots) => (
      <div
        style={{
          paddingBottom: "30px",
        }}
      >
        <ul style={{ paddingLeft: "0px" }}> {dots} </ul>
      </div>
    ),
    // eslint-disable-next-line react/display-name
    customPaging: (i) => {
      const style = {
        width: "20px",
        height: "20px",
        color: "black",
        border: "1px solid #FFFFFF",
        borderRadius: "50%",
        margin: "2px",
      };
      const activeStyle = {
        width: "20px",
        height: "20px",
        border: "1px solid #FFFFFF",
        borderRadius: "50%",
        margin: "2px",
        background: "#cf1b15",
      };
      return <div style={i === activeSlide ? activeStyle : style}></div>;
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "0px",
          zIndex: "100",
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "0px",
          zIndex: "100",
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <Slider {...settings} className={className}>
      {images.map((item, i) => {
        return <img key={i} alt="" src={item.imgUrl}></img>;
      })}
    </Slider>
  );
};
export default SliderImage;
