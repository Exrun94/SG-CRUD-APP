import React from 'react'
import { Header, Span } from './Logo.styles'


const Logo: React.FC = () => {
  const logo = ['C', 'R', 'U', 'D'];

  return (
    <>  
      <Header>
        {logo.map((ch: string, index: number) => {
    
            return <Span
                key={index}
                animationDelay={ (0.5 + index / 10) + "s" }
                >{ch}</Span>
        })}
      </Header>
    </>
  )
}

export default Logo