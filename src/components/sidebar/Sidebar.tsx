import React from 'react'
import { SidebarContainer, IconContainer, Icon } from './Sidebar.styles'
import IconFavorite from '../../images/sort-by-favorite.svg';
import SortByAscName from '../../images/sort-asc.svg'
import SortByPrice from '../../images/sort-by-price.svg'
import SortByDate from '../../images/sort-by-date.svg'
import useSort from '../../hooks/useSort'

const Sidebar = () => {

  const { sortByName, sortByPrice, sortByDate, activeName, activePrice, activeDate} = useSort()

  return (
    <>
      <SidebarContainer>
        <IconContainer  onClick={sortByName} className={activeName ? 'active' : '' }>
          <Icon icon={SortByAscName}/>
        </IconContainer>
        <IconContainer onClick={sortByPrice} className={activePrice ? 'active' : '' }>
          <Icon icon={SortByPrice}/>
        </IconContainer>
        <IconContainer onClick={sortByDate} className={activeDate ? 'active' : '' }>
          <Icon icon={SortByDate}/>
        </IconContainer>
      </SidebarContainer>
    </>
  )
}

export default Sidebar