import React from "react";
import { NavContainer, IconContainer, Icon, Span } from "./Nav.styles";
import SortByAscName from "../../images/sort-asc.svg";
import SortByPrice from "../../images/sort-by-price.svg";
import SortByDate from "../../images/sort-by-date.svg";
import useSort from "../../hooks/useSort";

const Nav = () => {
  const {
    sortByName,
    sortByPrice,
    sortByDate,
    activeName,
    activePrice,
    activeDate,
  } = useSort();

  return (
    <>
      <NavContainer>
        <IconContainer
          onClick={sortByName}
          className={activeName ? "active" : ""}
        >
          <Icon icon={SortByAscName} />
          <Span>Sort by name</Span>
        </IconContainer>
        <IconContainer
          onClick={sortByPrice}
          className={activePrice ? "active" : ""}
        >
          <Icon icon={SortByPrice} />
          <Span>Sort by price</Span>
        </IconContainer>
        <IconContainer
          onClick={sortByDate}
          className={activeDate ? "active" : ""}
        >
          <Icon icon={SortByDate} />
          <Span>Sort by date</Span>
        </IconContainer>
      </NavContainer>
    </>
  );
};

export default Nav;
