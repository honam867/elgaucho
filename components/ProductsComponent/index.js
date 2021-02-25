import { Container, Divider, Header } from "semantic-ui-react";
import ProductItem from "../ProductItemComponent";
import CustomHeader from "./product.module.css";
const ProductsComponent = ({ subcategories, products }) => {
  // const test = subcategories.map(item => );
  return (
    <Container >
      {subcategories.map(item => {
        return (
          <div key={item.id}>
            <Divider horizontal>
              <Header as='h2' className={CustomHeader.customHeaderColor}>
                {item.name}
              </Header>
            </Divider>
            <ProductItem products={products.filter(product => product.subcategoryId === item.id)} />
          </div>
        )
      })}
    </Container>
  )
}
export default ProductsComponent;