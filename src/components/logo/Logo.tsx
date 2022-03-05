import React, { useContext } from 'react'
import { Header, Span } from './Logo.styles'
import { PermissionsContext } from '../../context/PermissionsContext'

const Logo = () => {
  const { setOnCreatePermission, setOnReadPermission, setOnUpdatePermission, setOnDeletePermission, onCreatePermission, onReadPermission, onUpdatePermission, onDeletePermission } = useContext(PermissionsContext);
  const logo = ['C', 'R', 'U', 'D'];

  //toggles 'active' class on clicked letter
  const toggle = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if(e.target) {
      (e.target as HTMLSpanElement).classList.toggle('active')
      const ch =  (e.target as HTMLSpanElement).innerText;

      switch(ch) {
        case 'C':
          setOnCreatePermission(!onCreatePermission);
          break;
        case 'R':
          setOnReadPermission(!onReadPermission);
          break;
        case 'U': 
          setOnUpdatePermission(!onUpdatePermission);
          break;
        case 'D': 
          setOnDeletePermission(!onDeletePermission);
          break;
    }
  }
}

  return (
    <>  
      <Header>
        {logo.map((ch: string, index: number) => {
            return <Span
                key={index}
                animationDelay={ (0.5 + index / 10) + "s" }
                onClick={(e) => toggle(e)}

                >{ch}</Span>
        })}
      </Header>
    </>
  )
}

export default Logo;