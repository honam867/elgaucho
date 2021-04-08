import { memo } from "react";
import LazyLoad from "react-lazyload";
import { Container, Divider, Header, Placeholder } from "semantic-ui-react";
import ProductItem from "../ProductItemComponent";
import CustomHeader from "./product.module.css";
const Loading = () => {
  return <div style={{ margin: "30px 0px" }}>
    <Placeholder fluid>
      <Placeholder.Header image >
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>

  </div>
}
const ProductsComponent = ({ subcategories, products, areaId }) => {
  return (
    <Container >
      {subcategories.map(item => {
        return (
          <LazyLoad once={true} key={item.id} height={400} offset={30} placeholder={<Loading />}>
            <div key={item.id}>
              <Divider horizontal>
                <Header as='h2' className={CustomHeader.customHeaderColor}>
                  {item.name}
                </Header>
              </Divider>
              <ProductItem products={products.filter(product => product.subCategory === item.id)} areaId={areaId} />
            </div>
          </LazyLoad>
        )
      })}
    </Container>
  )
}
export default memo(ProductsComponent);