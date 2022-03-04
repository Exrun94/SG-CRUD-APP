import React, {useContext} from 'react'
import { SearchInput } from './Search.styles'
import { ProductContext } from '../../context/ProductContext';
import IProduct from '../../interfaces/Product';


const Search = () => {
    const { productsList, setProductsList } = useContext(ProductContext);

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        const filteredProducts = productsList.filter((product: IProduct) => {
            return product.productName.toLowerCase().includes(searchValue.toLowerCase())
        })
        setProductsList(filteredProducts)
    }
  return (
    <>
        <SearchInput onChange={(e) => onSearch(e)} placeholder="Search..." />
    </>
  )
}

export default Search