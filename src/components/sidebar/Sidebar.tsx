import React from 'react'
import { SidebarContainer, IconContainer, Icon } from './Sidebar.styles'
import IconFavorite from '../../images/sort-by-favorite.svg';
import SortByAscName from '../../images/sort-asc.svg'
import SortByPrice from '../../images/sort-by-price.svg'
import SortByDate from '../../images/sort-by-date.svg'
import useSort from '../../hooks/useSort'

const Sidebar = () => {

  const { sortByName, sortByPrice, sortByDate} = useSort()

  return (
    <>
      <SidebarContainer>
        <IconContainer>
          <Icon icon={IconFavorite}/>
        </IconContainer>
        <IconContainer>
          <Icon icon={SortByAscName} onClick={sortByName}/>
        </IconContainer>
        <IconContainer>
          <Icon icon={SortByPrice} onClick={sortByPrice}/>
        </IconContainer>
        <IconContainer>
          <Icon icon={SortByDate} onClick={sortByDate}/>
        </IconContainer>
      </SidebarContainer>
    </>
  )
}

export default Sidebar