import React from 'react'
import { Header, Span } from './Logo.styles'


const Logo: React.FC = () => {
  const logo = ['C', 'R', 'U', 'D'];

  //toggles 'active' class on clicked letter
  const toggle = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if(e.target) (e.target as HTMLSpanElement).classList.toggle('active') 
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

export default Logo