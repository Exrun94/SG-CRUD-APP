import React from "react";
import dropIn from "../../utils/dropIn";
import { Container, Wrapper, MotionMenu, Heading } from "./MotionFrame.styles";

const MotionFrame: React.FC<React.ReactNode> = ({ children }) => {
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
            <Heading>Enter Product 🔥</Heading>
            {children}
          </MotionMenu>
        </Wrapper>
      </Container>
    </>
  );
};

export default MotionFrame;
