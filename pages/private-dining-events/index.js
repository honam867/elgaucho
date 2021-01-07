import { Button, Container, Form, Grid, Header, List, Segment, TextArea } from "semantic-ui-react"
import styled from "styled-components"
import Layout from "../../components/ResponsiveHeader/index";
import SliderComponent from "../../components/SliderComponent"
import SrcImg1 from "../../public/static/img/El-Gaucho-Argentinian-Steakhouse-Restaurant-Private-Dining-Event-2.jpg"
import SrcImgLocation1 from "../../public/static/img/Estellla.jpg"
import SrcImgLocation2 from "../../public/static/img/Hai-Ba-Trung-2.jpg"
import SrcImgLocation3 from "../../public/static/img/Hai-Ba-Trung-Private-1.jpg"
import SrcImgLocation4 from "../../public/static/img/Phu-My-Hung-3.jpg"
import SrcImgLocation5 from "../../public/static/img/Phu-My-Hung-7.jpg"
const CustomButton = styled(Button)`
 &:hover {
color: #cf1b15  !important;
background: #FFF !important;
border: 1px solid #cf1b15;
 }
 background: #cf1b15 !important;
 color: #fff  !important;
`;

const ContentAnimationLeft = styled.div`
animation: LocationSection 1s  !important;
@keyframes LocationSection {
    0% {
       opacity: 0;
       transform: translateX(-700px);
    }
    100% {
       opacity: 1;
       transform: translateX(0);
    }
 }
`
const ContentAnimationRight = styled.div`
animation: FormSection 1s  !important;
@keyframes FormSection {
    0% {
       opacity: 0;
       transform: translateX(700px);
    }
    100% {
       opacity: 1;
       transform: translateX(0);
    }
 }
`

const Images = [
    {
        id: 1,
        name: "Img 1",
        imgUrl: SrcImg1,
        title: "PRIVATE DINING | EVENTS",
        opacity: 0.8
    }
]
const ImagesLocation = [
    {
        id: 1,
        name: "ESTELLA PLACE",
        imgUrl: SrcImgLocation1,
        opacity: 1
    },
    {
        id: 1,
        name: "HAI BA TRUNG",
        imgUrl: SrcImgLocation2,
        opacity: 1
    },
    {
        id: 1,
        name: "HAI BA TRUNG",
        imgUrl: SrcImgLocation3,
        opacity: 1
    },
    {
        id: 1,
        name: "PHU MY HUNG",
        imgUrl: SrcImgLocation4,
        opacity: 1
    },
    {
        id: 1,
        name: "PHU MY HUNG",
        imgUrl: SrcImgLocation5,
        opacity: 1
    }
]
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const PrivateDiningEvent = () => {
    return (
        <Layout>
            <SliderComponent
                Images={Images}
                height="45vh"
                fromPrivateDiningEventPages={true}
                backgroundOpacity={true}
            />
            <Container style={{ background: "#eaeaea", paddingTop: "20px", paddingBottom: "20px" }} fluid>
                <Container textAlign='center' style={{ color: "black" }}>
                    <Header textAlign='center' as='h3' >
                        OUR EL GAUCHO STEAKHOUSE – CONTEMPORARY AND SPECIALISED
                    </Header>
                    <p>
                        Some of our restaurants have designated private dining rooms, event spaces or fully dedicated event floors, where we regularly host business and private lunches, dinners, functions and parties. Private rooms, event spaces and exclusive floors are based on consumption of the guests only and no additional room or floor charge is applicable.                </p>
                </Container>
            </Container>
            <div>
                <Container fluid style={{ padding: "15px" }}>
                    <Grid columns={2} stackable>

                        <Grid.Column width={10}>
                            <ContentAnimationLeft>
                                <Header textAlign='center' >
                                    We are offering three options for private dining and larger event groups:
                    </Header>
                                <Container textAlign="left">
                                    <List bulleted >
                                        <List.Item style={{ lineHeight: "1.65em" }}>
                                            The first option is that your group dines based on our a la carte menu.
                                            This option is not only the recommended option by our restaurant, but also the preferred option of all larger groups we are hosting,
                                            as it allows the full dining experience and the uniqueness of what our restaurant stands for.
                            </List.Item>
                                        <List.Item style={{ lineHeight: "1.65em" }}>
                                            As a second option, we can offer you a set menu containing of a variety of our bestsellers with a fixed sum per person on the food.
                                            In this case, we can order for you in advance, all to share, that you can fully concentrate on your dining,
                                            enjoying the company of your guests, while having a clear pricing in your mind.
                            </List.Item>
                                        <List.Item style={{ lineHeight: "1.65em" }}>
                                            Furthermore, casual and standing events with pass-around food
                                            are possible as well and we would discuss this with you to find the individual approach you wish for.
                            </List.Item>
                                    </List>
                                </Container>
                                <Header as="h5" textAlign="center" style={{ color: "#CF1315" }}>Here are a few examples of the venues available</Header>
                                <Container>
                                    <SliderComponent
                                        Images={ImagesLocation}
                                        height="60vh"
                                        backgroundOpacity={true}
                                        fromPrivateDiningEventPagesSection={true}
                                    />
                                </Container>
                            </ContentAnimationLeft>
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContentAnimationRight>
                                <Header textAlign='center' as='h5' >
                                    Please complete the form below while choosing your desired location and we will be glad to support you in creating a memorable experience.
                                </Header>
                                <Segment style={{ background: "#f5f5f5" }}>
                                    <Header as="h5">
                                        Private Dining | Event Request
                                    </Header>
                                    <p>
                                        Plan your special occasion or event with us. Simply fill out the form below and we will contact you promptly to organise and support you in creating a memorable experience. If you would like to check availability or special requests immediately,
                                    please feel free to call us directly at <span style={{ color: "#CF1315" }}>+84 28 38 272 090</span> .
                                    </p>
                                    <Form>
                                        <Form.Field>
                                            <Form.Select
                                                fluid
                                                label='Location: *'
                                                options={options}
                                                placeholder='Location'
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Select
                                                fluid
                                                label='Event Type: *'
                                                options={options}
                                                placeholder='Location'
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Select
                                                fluid
                                                label='Party Size: *'
                                                options={options}
                                                placeholder='Party Size'
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Form.Select
                                                fluid
                                                label='Time: *'
                                                options={options}
                                                placeholder='Time'
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>First Name: *</label>
                                            <input placeholder='First Name' />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Last Name: *</label>
                                            <input placeholder='Last Name' />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Email: *</label>
                                            <input placeholder='Email' />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Phone: *</label>
                                            <input placeholder='Phone' />
                                        </Form.Field>
                                        <Form.Field
                                            id='form-textarea-control-opinion'
                                            control={TextArea}
                                            label='Message'
                                            placeholder='Message'
                                        />
                                        <CustomButton type='submit'>Submit</CustomButton>
                                    </Form>
                                </Segment>
                            </ContentAnimationRight>

                        </Grid.Column>
                    </Grid>

                </Container>

            </div>

        </Layout>
    )

}
export default PrivateDiningEvent;