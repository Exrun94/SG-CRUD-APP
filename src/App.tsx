import Logo from "./components/logo/Logo";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import Search from "./components/search/Search";
import Button from "./components/buttons/Button";
import MotionFrame from "./components/form/MotionFrame";
import { GridContainer, MidContainer } from './App.styles';

import React from "react";

export default function App() {
  const state = false;
  return (
    <>
        <GridContainer>
            <Sidebar />
            <Logo />
            <MidContainer>
              <Search />
              <Button />
            </MidContainer>
            {state && <MotionFrame />}
            <Products />
        </GridContainer>
    </>
  );
}
