import Link from "next/link";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";

const CustomButton = styled(Button)`
color: #fff  !important;
background: #cf1b15 !important;
font-weight:900 !important;
margin: 10px !important;
`;

const ButtonCustomComponent = ({ name, ...props }) => {
    return (
        <Link href={`${props.url}`} passHref>
            <CustomButton>
                {props.icon ?
                    <Icon name={props.iconName} />
                    : null}
                {name}</CustomButton>
        </Link>

    )
}
export default ButtonCustomComponent;