import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: var(--light-3)
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
  width: 500px;
  height: 500px;
  background-color: var(--primary);
  padding: 25px;
`;

export const InputField = styled.input`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 18px;
  margin-bottom: 24px;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid var(--primary-light);
  color: var(--primary-200);
  outline: none;
  background: var(--light-1);
  transition: background-color 0.3s cubic-bezier(113, 0, 189, 1),
    transform 0.3s cubic-bezier(113, 0, 189, 1);
`;