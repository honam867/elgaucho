import { memo } from "react";
import { Container, Dropdown, Grid, Menu, Visibility } from "semantic-ui-react";
import ProductsComponent from "../../../ProductsComponent";
import ViewCartComponent from "../../../ViewCart";
import { ElDevlieryOnDesktopWrapper } from "./style";
const ElDevlieryOnDesktop = (
    {
        AreaData,
        activeArea,
        choosingArea,
        stickOverlay,
        unStickOverlay,
        Categories,
        activeItem,
        handleItemClick,
        SubCategories,
        subcategoryId,
        Products,
        areaId,
    }
) => {
    return (
        <ElDevlieryOnDesktopWrapper>
            <Container
                style={{ margin: "10px 0px", width: "100%", padding: "0px 30px", background: "#F2F2F2" }}
                fluid
            >
                <Grid doubling columns={3}  >
                    <Grid.Column width={3} >
                        <div style={{ position: "sticky", top: "50px", zIndex: 1 }}>
                            <Menu style={{ background: "#FFF", width: "100%" }} secondary vertical>
                                <Dropdown item text='Choosing a location' >
                                    <Dropdown.Menu style={{ background: "#FFF" }}>
                                        <Dropdown.Header>Location</Dropdown.Header>
                                        {
                                            AreaData.map(item => {
                                                return (
                                                    <Dropdown.Item active={activeArea === item.name} key={item.id} onClick={choosingArea} value={item}>{item.name}</Dropdown.Item>
                                                )
                                            })
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu>
                            <Visibility
                                offset={80}
                                once={false}
                                onTopPassed={stickOverlay}
                                onTopVisible={unStickOverlay}
                            />
                            <Menu
                                style={{ background: "#FFF", width: "100%" }}
                                secondary
                                vertical
                            >
                                {Categories.length > 0 ? Categories.map((item) => {
                                    return (
                                        <Menu.Item
                                            className="customCorlor"
                                            key={item.id}
                                            name={item.name}
                                            active={activeItem === item.name}
                                            onClick={handleItemClick}
                                            value={item}
                                        >
                                            {item.name}

                                        </Menu.Item>

                                    );
                                })
                                    :
                                    <div>No data</div>
                                }
                            </Menu>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={9} style={{ background: "#FFF", margin: "15px 0px", padding: "30px 0px" }}>
                        <div>
                            <ProductsComponent subcategories={SubCategories.filter(sub => sub.categoryId === subcategoryId)} products={Products} areaId={areaId}></ProductsComponent>
                        </div>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <div style={{ position: "sticky", top: "50px", zIndex: 1 }}>
                            <ViewCartComponent></ViewCartComponent>
                        </div>
                    </Grid.Column>
                </Grid>
            </Container>
        </ElDevlieryOnDesktopWrapper>

    );
};

export default memo(ElDevlieryOnDesktop);