import React, { useContext } from 'react'
import { PrimaryButton } from './Button.styles'
import { FrameMotionContext } from '../../context/FrameMotionContext'
import { PermissionsContext } from '../../context/PermissionsContext'


const Button = () => {
  const { setIsCreate } = useContext(FrameMotionContext)
  const { onCreatePermission } = useContext(PermissionsContext);


  return (
    <>
        <PrimaryButton disabled={!onCreatePermission} onClick={() => setIsCreate(true)}>Add Product</PrimaryButton>
    </>
  )
}

export default Button