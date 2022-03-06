import React from 'react'
import { SidebarContainer, IconContainer, Icon } from './Sidebar.styles'
import IconFavorite from '../../images/sort-by-favorite.svg';
import SortByAscName from '../../images/sort-asc.svg'
import SortByPrice from '../../images/sort-by-price.svg'
import SortByDate from '../../images/sort-by-date.svg'

const Sidebar = () => {

  return (
    <>
      <SidebarContainer>
        <IconContainer>
          <Icon icon={IconFavorite}/>
        </IconContainer>
        <IconContainer>
          <Icon icon={SortByAscName}/>
        </IconContainer>
        <IconContainer>
          <Icon icon={SortByPrice}/>
        </IconContainer>
        <IconContainer>
          <Icon icon={SortByDate}/>
        </IconContainer>
      </SidebarContainer>
    </>
  )
}

export default Sidebar