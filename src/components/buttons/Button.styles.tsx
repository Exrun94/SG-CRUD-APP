import styled from "styled-components";

export const PrimaryButton = styled.button`
  color: var(--accent-dark-400);
  background-color: transparent;
  margin-left: auto;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: var(--accent-dark-400);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: var(--accent-dark-400);
    color: white;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
  }
`;
