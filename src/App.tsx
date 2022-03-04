import React from 'react';
import Layout from './layout/Layout'
import { FrameMotionContextProvider } from './context/FrameMotionContext'
import { ProductContextProvider } from './context/ProductContext'

export default function App() {

  return (
    <>
      <ProductContextProvider>
      <FrameMotionContextProvider>
        <Layout />
      </FrameMotionContextProvider>
      </ProductContextProvider>
    </>
  );
}
