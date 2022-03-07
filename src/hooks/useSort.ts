import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { SortContext } from "../context/SortContext";

const useSort = () => {
  const { productsList, setProductsList } = useContext(ProductContext);
  const { setSortBy } = useContext(SortContext);
  const [activeName, setActiveName] = useState(true);
  const [activePrice, setActivePrice] = useState(false);
  const [activeDate, setActiveDate] = useState(false);

  const sortByName = () => {
    const sortedProducts = [...productsList].sort((a, b) =>
      a.productName.localeCompare(b.productName)
    );
    setProductsList(sortedProducts);

    setSortBy("name");
    setActiveName(true);
    setActivePrice(false);
    setActiveDate(false);
  };

  const sortByPrice = () => {
    const sortedProducts = [...productsList].sort((a, b) => a.price - b.price);
    setProductsList(sortedProducts);

    setSortBy("price");
    setActiveName(false);
    setActivePrice(true);
    setActiveDate(false);
  };

  const sortByDate = () => {
    const sortedProducts = [...productsList].sort((a, b) => a.date - b.date);
    setProductsList(sortedProducts);

    setSortBy("date");
    setActiveName(false);
    setActivePrice(false);
    setActiveDate(true);
  };

  return {
    sortByName,
    sortByPrice,
    sortByDate,
    activeName,
    activePrice,
    activeDate,
  };
};

export default useSort;
