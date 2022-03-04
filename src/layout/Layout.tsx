import React, { useContext } from "react";
import { GridContainer, UtilsContainer } from "./Layout.styles"
import { FrameMotionContext } from "../context/FrameMotionContext";
import HeaderComponent from "./HeaderComponent"
import SidebarComponent from "./SidebarComponent"
import ProductsComponent from "./ProductsComponent"
import Search  from '../components/search/Search';
import Button from "../components/buttons/Button";
import MotionFrame from "../components/form/MotionFrame";


const Layout = () => {
    const { isToggled } = useContext(FrameMotionContext)
  return (
    <>
        <GridContainer>
            <HeaderComponent />
            <SidebarComponent />
            <UtilsContainer>
                <Search />
                <Button />
            </UtilsContainer>
            {isToggled && <MotionFrame />}
            <ProductsComponent />
        </GridContainer>
    </>
  )
}

export default Layout