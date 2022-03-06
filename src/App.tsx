import React from 'react';
import Layout from './layout/Layout'
import { FrameMotionContextProvider } from './context/FrameMotionContext'
import { ProductContextProvider } from './context/ProductContext'
import { PermissionsContextProvider } from './context/PermissionsContext'
import { SortContextProvider } from './context/SortContext'

export default function App() {

  return (
    <>
      <SortContextProvider>
        <ProductContextProvider>
          <FrameMotionContextProvider>
            <PermissionsContextProvider>
              <Layout />
            </PermissionsContextProvider>
          </FrameMotionContextProvider>
        </ProductContextProvider>
      </SortContextProvider>
  </>
  );
}
