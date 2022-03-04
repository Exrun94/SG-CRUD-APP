import React, { useContext } from 'react'
import { PrimaryButton } from './Button.styles'
import { FrameMotionContext } from '../../context/FrameMotionContext'


const Button = () => {
  const { isToggled, setIsToggled } = useContext(FrameMotionContext)

  return (
    <>
        <PrimaryButton onClick={() => setIsToggled(!isToggled)}>Add Product</PrimaryButton>
    </>
  )
}

export default Button