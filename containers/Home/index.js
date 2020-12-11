import Layout from "../../components/Layout";
import Link from "next/link";
import SrcImg1 from "../../public/static/img/El-Gaucho-Dine-With-Us.jpg"
import SrcImg2 from "../../public/static/img/El-Gaucho-Argentinian-Steakhouse-Restaurant-Homepage-Welcome-1920-x-800.jpg"
import SrcImg3 from "../../public/static/img/VN04-2017_1036_37_38_39_40.jpg";
import { Image, Button } from "semantic-ui-react";
import SliderHomePage from "../../components/SliderHomePage";
const Home = () => {

    // TODO Fake data Image
    const Images = [
        {
            id: 1,
            name: "Img 1",
            imgUrl: SrcImg1,
            size: "450px"
        },
        {
            id: 2,
            name: "Img 2",
            imgUrl: SrcImg2,
            size: "450px"
        },
        {
            id: 3,
            name: "Img 3",
            imgUrl: SrcImg3,
            size: "450px"
        }
    ];



    return (
        <Layout>
            <SliderHomePage Images={Images} />
            <Link href="/about">go to another pages</Link>
        </Layout>
    )
}
export default Home;