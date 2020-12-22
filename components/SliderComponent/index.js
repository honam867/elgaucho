import Slider from "react-slick";
import { useState } from "react";
import styled from "styled-components";
import { Button, Header, Icon } from "semantic-ui-react";
// import ButtonCustomComponent from "../ButtonCustomComponent";
import Link from "next/link";
import ButtonCustomComponent from "../ButtonCustomComponent";
const CustomHeaderFullSlider = styled(Header)`
font-size: 40px !important;
color: white !important;
animation: fadeInDown 1s  !important;
@keyframes fadeInDown {
    0% {
       opacity: 0;
       transform: translateY(-30px);
    }
    100% {
       opacity: 1;
       transform: translateY(0);
    }
 }
`
const CustomSubTitleLocations = styled.p`
font-size: 18px !important;
font-weight: bold !important;
color: white !important;
animation: fadeInTop 2s  !important;
@keyframes fadeInTop {
    100% {
       opacity: 1;
       transform: translateY(0px);
    }
    0% {
       opacity: 0;
       transform: translateY(30px);
    }
 } 
`
const CustomHeaderLocations = styled(Header)`
font-size: 40px !important;
color: white !important;
animation: fadeInDown 2s  !important;
@keyframes fadeInDown {
    0% {
       opacity: 0;
       transform: translateY(-30px);
    }
    100% {
       opacity: 1;
       transform: translateY(0);
    }
 }
`

const CustomButtonAtLocationPage = styled.div`
animation: fadeInDown 2s  !important;
@keyframes fadeInDown {
    0% {
       opacity: 0;
       transform: translateY(-30px);
    }
    100% {
       opacity: 1;
       transform: translateY(0);
    }
 }
`
const AngleDownButton = styled.div`
cursor: pointer !important;
position: absolute !important;
color: #FFFFFF  !important;
font-size: 40px !important;
z-index: 1 !important;
text-align: center !important;
width: 100% !important;
animation: fadeInDown 2.5s infinite !important;
animation-timing-function: ease-in-out !important;
@keyframes fadeInDown {
    0% {
       opacity: 1;
       transform: translateY(-70px);
    }
    100% {
       opacity: 0;
       transform: translateY(0);
    }
 }
}
`;
const AngleDowButtonPosition = styled.div`
position: relative !important;
top: 180px !important;
`
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
        top: "40%",
        width: "100%",
        textAlign: "center"
    }
    const SlideShowAlignCaptionFullSlider = {
        color: "white !important",
        position: "absolute",
        top: "40%",
        width: "100%",
        textAlign: "center"
    }
    const gotoMainSection = () => {
        props.gotomainsection();
    }
    // `onClick`, `href`, and `ref` need to be passed to the DOM element
    // for proper handling

    return (
        <div style={props.backgroundOpacity ? CustomBackgroundOpacity : CustomBackground}>
            <Slider   {...settings} style={{ width: "100%", height: "100%" }}>
                {Images.map((item, i) => {
                    return (
                        <div key={item.id}>

                            <div
                                style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: 'no-repeat',
                                    backgroundImage: `url(${item.imgUrl})`,
                                    width: '100%',
                                    height: height,
                                    opacity: `${item.opacity}`,
                                }}
                            >
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
                        </div>
                    )
                }
                )}
            </Slider>
            <div style={SlideShowAlignCaptionFullSlider}>
                <CustomHeaderFullSlider as="h1">{props.captionTitle}</CustomHeaderFullSlider>
                <p style={{ fontSize: "18px", color: "white" }}>{props.captionContent}</p>
                {props.angleDown ?
                    <AngleDowButtonPosition>
                        <AngleDownButton onClick={gotoMainSection} >
                            <Icon name="angle down" />
                        </AngleDownButton>
                    </AngleDowButtonPosition>
                    : null
                }
            </div>
        </div >

    )
}
export default SliderComponent;