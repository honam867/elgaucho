import Slider from "react-slick";
import { useState } from "react";
import styled from "styled-components";

const SliderHomePage = ({ Images }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        arrows: true,
        adaptiveHeight: true,
        beforeChange: (current, next) => { setActiveSlide(next) },
        appendDots: dots => (
            <div
                style={{
                    marginBottom: "29px"
                }}
            >
                <ul style={{ margin: "30px" }}> {dots} </ul>
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
    return (
        <div>
            <Slider   {...settings}>
                {Images.map((item, i) =>
                    <div
                        key={i}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${item.imgUrl})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: 'no-repeat',
                                width: '100%',
                                height: '80vh',
                                color: 'white', outline: "none"
                            }}>
                        </div>
                    </div>
                )}
            </Slider>
        </div>

    )
}
export default SliderHomePage;