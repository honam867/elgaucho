import { Divider, Header } from "semantic-ui-react";
import ProductItem from "../ProductItemComponent";
import CustomHeader from "./product.module.css";
const ProductsComponent = ({ categories }) => {
  return (
    <div >

      <Divider horizontal>
        <Header as='h2' className={CustomHeader.customHeaderColor}>

        </Header>
      </Divider>

    </div>
  )
}
export default ProductsComponent;