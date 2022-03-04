import React from 'react'
import FormData from './FormData';
import { Container, Wrapper, MotionMenu, Heading  } from './MotionFrame.styles';

const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

const MotionFrame = () => {
  return (
    <>
        <Container>
            <Wrapper>
                <MotionMenu
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    >
                    <Heading>Enter Product</Heading>
                    <FormData />
                </MotionMenu>
            </Wrapper>
        </Container>
    </>
  )
}

export default MotionFrame