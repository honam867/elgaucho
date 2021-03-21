import { memo } from "react"
import ShowMoreText from "react-show-more-text";
import { Button, Card, Grid, Icon, Image } from "semantic-ui-react";
import { PriceCustomFromHeader } from "../style";
import { ProductItemOnMobileWrapper } from "./style";
const ProductItemOnMobile = ({ productList, addCart }) => {
    console.log(productList);
    return (
        <ProductItemOnMobileWrapper>
            {
                productList.length > 0
                    ?
                    productList.map(item => {
                        return <Card className="card" key={item.name}>
                            <Card.Content className="card-content">
                                <Image
                                    floated='left'
                                    className="card-image"
                                    src={item.imageUrl}
                                    inline
                                />
                                <Card.Header className="card-name">{item.name}</Card.Header>
                                <div className="card-group">
                                    <div className="card-prices">
                                        {item.promotedPrice > 0 ?
                                            <div>

                                                <del className="card-prices-promote"> {item.promotedPrice.toLocaleString("en-US")}</del>
                                                <span className="card-prices-price">
                                                    {item.price.toLocaleString("en-US")} VND
                                            </span>
                                            </div>
                                            :
                                            <span className="card-prices-price">
                                                {item.price.toLocaleString("en-US")} VND
                                            </span>
                                        }
                                    </div>
                                    <div className="card-group-number">
                                        <Button className="card-group-button" onClick={() => addCart(item)} size='mini' >
                                            <Icon name="add" />
                                        </Button>
                                    </div>
                                </div>
                                <Card.Description style={{ paddingLeft: "40px" }}>
                                    <ShowMoreText
                                        lines={1}
                                        more="Show"
                                        less="Hide"
                                        anchorClass="my-anchor-css-class"
                                        expanded={false}
                                        width={300}
                                    >
                                        {item.description}
                                    </ShowMoreText>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    })
                    :
                    <div>No Data</div>
            }
        </ProductItemOnMobileWrapper >
    )
}
export default memo(ProductItemOnMobile);