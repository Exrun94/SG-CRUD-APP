import React, { useContext } from 'react'
import { PrimaryButton } from './Button.styles'
import { FrameMotionContext } from '../../context/FrameMotionContext'


const Button = () => {
  const { setIsCreate } = useContext(FrameMotionContext)

  return (
    <>
        <PrimaryButton onClick={() => setIsCreate(true)}>Add Product</PrimaryButton>
    </>
  )
}

export default Button