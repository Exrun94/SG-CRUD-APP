import React, { useContext } from "react";
import { SearchInput } from "./Search.styles";
import { ProductContext } from "../../context/ProductContext";

const Search = () => {
  const { setOnSearch } = useContext(ProductContext);

  return (
    <>
      <SearchInput
        onChange={(e) => setOnSearch(e.target.value)}
        placeholder="Search..."
      />
    </>
  );
};

export default Search;
