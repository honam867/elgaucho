import { memo } from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import ProductItem from "../ProductItemComponent";
import CustomHeader from "./product.module.css";
const ProductsComponent = ({ subcategories, products, areaId }) => {
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
            <ProductItem products={products.filter(product => product.subCategory === item.id)} areaId={areaId} />
          </div>
        )
      })}
    </Container>
  )
}
export default memo(ProductsComponent);