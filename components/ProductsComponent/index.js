import { Divider, Header } from "semantic-ui-react";
import ProductItem from "../ProductItemComponent";
import CustomHeader from "./product.module.css";
const ProductsComponent = ({ categories }) => {
    return (
        <div>
            {categories.map(item => {
                return (
                    <div key={item.id}>
                        <Divider horizontal>
                            <Header as='h2' className={CustomHeader.customHeaderColor}>
                                {item.name}
                            </Header>
                        </Divider>
                        <ProductItem categoriesItem={item.categoryItem} />
                    </div>
                )
            })}
        </div>
    );
}
export default ProductsComponent;