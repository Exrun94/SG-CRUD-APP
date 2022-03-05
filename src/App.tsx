import React from 'react';
import Layout from './layout/Layout'
import { FrameMotionContextProvider } from './context/FrameMotionContext'
import { ProductContextProvider } from './context/ProductContext'
import { PermissionsContextProvider } from './context/PermissionsContext'

export default function App() {

  return (
    <>
      <PermissionsContextProvider>
      <ProductContextProvider>
      <FrameMotionContextProvider>
        <Layout />
      </FrameMotionContextProvider>
      </ProductContextProvider>
      </PermissionsContextProvider>
    </>
  );
}
