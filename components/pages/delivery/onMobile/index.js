import { memo } from "react";
import { Menu, Visibility } from "semantic-ui-react";
import styled from "styled-components";
import ProductsComponent from "../../../ProductsComponent";
import { ElDevlieryOnMobileWrapper } from "./style";
const MenuCustom = styled(Menu)`
.active.item{
  border-bottom: 2px solid red !important;
  border-radius: 0px !important;
}
`
const ElDevlieryOnMobile = (
    {
        stickOverlay,
        unStickOverlay,
        overlayFixed,
        fixedOverlayMenuMobileStyle,
        overlayMenuMobileStyle,
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
        <ElDevlieryOnMobileWrapper>
            <Visibility
                once={false}
                onBottomPassed={stickOverlay}
                onBottomVisible={unStickOverlay}
            />
            <MenuCustom
                fixed={overlayFixed ? "top" : undefined}
                style={
                    overlayFixed ? fixedOverlayMenuMobileStyle : overlayMenuMobileStyle
                }
                size="small"
                secondary
                className="customMobile"
            >
                {Categories.map((item) => {
                    return (
                        <Menu.Item
                            active={activeItem === item.name}
                            key={item.id}
                            name={item.name}
                            className="customCorlorMobile"
                            onClick={handleItemClick}
                            value={item}
                        ></Menu.Item>
                    );
                })}
            </MenuCustom>
            <ProductsComponent subcategories={SubCategories.filter(sub => sub.categoryId === subcategoryId)} products={Products} areaId={areaId}></ProductsComponent>
        </ElDevlieryOnMobileWrapper>
    );
};

export default memo(ElDevlieryOnMobile)