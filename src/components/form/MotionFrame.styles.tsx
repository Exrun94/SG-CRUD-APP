import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

export const MotionMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40em;
  height: 30em;
  background-color: var(--primary-dark-700);
  padding: 25px;
  border-radius: .8em;
`;

export const Heading = styled.h1`
  font-size: 2em;
  font-weight: 400;
  color: var(--primary-dark-200);
  margin-top: 2em;
`;
