import Slider from "react-slick";
import { useState } from "react";
import styled from "styled-components";
import { Header, Icon } from "semantic-ui-react";
const CustomHeader = styled(Header)`
font-size: 40px !important;
color: white !important;
`
const AngleDownButton = styled(Icon)`
position: relative !important;
cursor: pointer !important;
color: #FFFFFF  !important;
width: 100% !important;
font-size: 50px !important;
textAlign: center !important;
z-index: 1 !important;
animation: mymove 3s infinite !important;
animation-timing-function: ease-in-out !important;
@keyframes mymove {
0% {top:0px; opacity: 1;}
25% {top: 80px; opacity: 1;}
100% {top:80px; opacity: 0;}
}
`;
const SliderComponent = ({ Images, height, ...props }) => {
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
    const CustomBackground = {
        position: 'relative'
    }
    const CustomBackgroundOpacity = {
        position: 'relative',
        backgroundColor: "black"
    }
    const SlideShowAlignCaption = {
        color: "white !important",
        position: "absolute",
        top: "45%",
        width: "100%",
        textAlign: "center"
    }
    const gotoMainSection = () => {
        props.gotomainsection();
    }
    return (
        <div style={props.backgroundOpacity ? CustomBackgroundOpacity : CustomBackground}>
            <div style={{ width: "100%", height: height }}>
                <Slider   {...settings} style={{ width: "100%", height: "100%" }}>
                    {Images.map((item, i) =>
                        <div key={item.id}>
                            <div
                                style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundImage: `url(${item.imgUrl})`,
                                    width: '100%',
                                    height: `${height}`,
                                    opacity: `${item.opacity}`,
                                }}
                            ></div>
                        </div>
                    )}
                </Slider>

            </div>
            <div style={SlideShowAlignCaption}>
                <CustomHeader as="h1">{props.captionTitle}</CustomHeader>
                <p style={{ fontSize: "18px", color: "white" }}>{props.captionContent}</p>
                {props.angleDown ?
                    <div style={{ position: 'absolute', top: "350px", width: "100%" }}>
                        <AngleDownButton onClick={gotoMainSection} name="angle down"></AngleDownButton>
                    </div>
                    : null
                }

            </div>
        </div >

    )
}
export default SliderComponent;