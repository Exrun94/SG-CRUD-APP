import React, { createContext, useState } from 'react';
import IProduct from '../interfaces/Product';


interface ContextType {
    onProductChange: boolean;
    setOnProductChange: React.Dispatch<React.SetStateAction<boolean>>
    productsList: IProduct[];
    setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>
}

interface ProductProvider {
    children: React.ReactNode;
};
  
export const ProductContext = createContext({} as ContextType);

export const ProductContextProvider = ({ children }: ProductProvider) => {
    const [onProductChange, setOnProductChange] = useState(false);
    const [productsList, setProductsList] = useState<IProduct[]>([]);
  
    return (
        <ProductContext.Provider value={{ 
            onProductChange,
            setOnProductChange,
            productsList,
            setProductsList
            }}>
            {children}
        </ProductContext.Provider>
    );
};