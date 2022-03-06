import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';

const useSort = () => {
    const { productsList, setProductsList } = useContext(ProductContext);
    
    const sortByName = () => {
        const sortedProducts = [...productsList].sort((a, b) => a.productName.localeCompare(b.productName));
        setProductsList(sortedProducts);
    }

    const sortByPrice = () => {
        const sortedProducts = [...productsList].sort((a, b) => b.price - a.price);
        setProductsList(sortedProducts);
    }

    const sortByDate = () => {
        const sortedProducts = [...productsList].sort((a, b) => a.date - b.date);
        setProductsList(sortedProducts);
    }

    return {sortByName, sortByPrice, sortByDate}

}

export default useSort;