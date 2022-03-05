import React, { createContext, useState } from 'react';
import IProduct from '../interfaces/Product';


interface ContextType {
    onProductChange: boolean;
    setOnProductChange: React.Dispatch<React.SetStateAction<boolean>>
    productsList: IProduct[];
    setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>
    onSearch: string;
    setOnSearch: React.Dispatch<React.SetStateAction<string>>
}

interface ProductProvider {
    children: React.ReactNode;
};
  
export const ProductContext = createContext({} as ContextType);

export const ProductContextProvider = ({ children }: ProductProvider) => {
    const [onProductChange, setOnProductChange] = useState(false);
    const [productsList, setProductsList] = useState<IProduct[]>([]);
    const [onSearch, setOnSearch] = useState('');
  
    return (
        <ProductContext.Provider value={{ 
            onProductChange,
            setOnProductChange,
            productsList,
            setProductsList,
            onSearch,
            setOnSearch
            }}>
            {children}
        </ProductContext.Provider>
    );
};