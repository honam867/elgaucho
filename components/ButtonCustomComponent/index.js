import Link from "next/link";
import { Icon } from "semantic-ui-react";
import { CustomButton } from "../UiCustomElement/button";

const ButtonCustomComponent = ({ name, ...props }) => {
  return (
    <Link href={`${props.url}`} passHref>
      <CustomButton>
        {props.icon ? <Icon name={props.iconName} /> : null}
        {name}
      </CustomButton>
    </Link>
  );
};
export default ButtonCustomComponent;
