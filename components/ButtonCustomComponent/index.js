import Link from "next/link";
import { Button } from "semantic-ui-react";
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
            <CustomButton>{name}</CustomButton>
        </Link>

    )
}
export default ButtonCustomComponent;