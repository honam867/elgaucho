import Layout from "../../components/Layout";
import Link from "next/link";
import SrcImg1 from "../../public/static/img/El-Gaucho-Dine-With-Us.jpg"
import SrcImg2 from "../../public/static/img/El-Gaucho-Argentinian-Steakhouse-Restaurant-Homepage-Welcome-1920-x-800.jpg"
import SrcImg3 from "../../public/static/img/VN04-2017_1036_37_38_39_40.jpg";
import SrcImg4 from "../../public/static/img/IMG1jpg.jpg"
import SrcImg5 from "../../public/static/img/IMG2.jpg"
import SrcImg6 from "../../public/static/img/IMG3jpg.jpg"
import SrcImg7 from "../../public/static/img/IMG4jpg.jpg"
import { Container, Header } from "semantic-ui-react";
import SliderComponent from "../../components/SliderComponent";
const Location = () => {

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
    const Images2 = [
        {
            id: 1,
            name: "Img 1",
            imgUrl: SrcImg4,
            size: "450px"
        },
        {
            id: 2,
            name: "Img 2",
            imgUrl: SrcImg5,
            size: "450px"
        },
        {
            id: 3,
            name: "Img 3",
            imgUrl: SrcImg6,
            size: "450px"
        },
        {
            id: 3,
            name: "Img 3",
            imgUrl: SrcImg7,
            size: "450px"
        }
    ];



    return (
        <Layout>
            <SliderComponent Images={Images} height="960px" />
            <Container fluid >
                <Header textAlign='center' as='h3' style={{ marginTop: "30px" }}>

                    OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED
                    </Header>
                <Container textAlign='center'>
                    <p>
                        Food is our passion and it is our aim to establish the benchmark in Southeast Asia and beyond for a contemporary, specialised steakhouse concept. We opened our first restaurant in Vietnam in 2011 and went our way from Saigon to Hanoi and Danang; onward to Thailand to Bangkok, Koh Samui and Phuket; hopping to Slovakia and now recently opened in Manila, Phillipines; Hamburg, Germany and Hong Kong to expand our number of locations to seventeen restaurants and it is still the same joy.
                    </p>
                    <p>
                        We are proud to serve you the finest steakhouse-style food, using only the best available meat products sourced from selected farms in Victoria, New South Wales and individual farmers and ranchers in the United States. This is all about the original flavour of the naturally raised meat, paired with the offer of our own steakhouse classics, as well as a modern approach on ingredients, preparation and combinations.
                    </p>
                    <p>
                        Let your sense of taste be awakened with an aperitif, let the juicy meat melt in your mouth, dive into the latest wine treasures and find in a selection of premium cigars a peaceful retreat from the bustling world around.
                    </p>
                </Container>

            </Container>
            <Container style={{ background: "#eaeaea", marginTop: "15px", paddingTop: "20px" }} fluid>
                <Header textAlign='center' as='h3' >
                    OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED
                </Header>
                <Header textAlign="center" as='h5'>
                    Open Daily from 11AM to 10PM
                </Header>
                <Header textAlign="center" as='h5'>
                    Call Us: <a href="/" style={{ color: "#CF1315" }}>+84 972 697 654</a>
                </Header>
                <Container>
                    <SliderComponent Images={Images2} height="70vh" />
                </Container>
            </Container>

        </Layout>
    )
}
export default Location;