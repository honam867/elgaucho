import Responsive from "../../components/Responsive";
import style from "./about.module.css";

const onDesktop = () => {
    return <div>On Desktop</div>
}
const onMobile = () => {
    return <div className={style.test}>On Mobile</div>
}


const About = () => {
    return (
        <Responsive onDesktop={onDesktop} onMobile={onMobile}>
        </Responsive>
    )
}
export default About;