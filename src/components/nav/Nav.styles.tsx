import styled from "styled-components";

export const NavContainer = styled.div`
  grid-area: nav;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 3em;
  background-color: var(--accent-dark-600);
  box-shadow: 0 8px 2px -2px rgba(0, 0, 0, 0.1);

`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 2em;
  margin-right: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  &:hover {
    cursor: pointer;
  }

  &.active {
    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 2em;
      height: 2em;
      background-color: var(--primary-dark-800);
      bottom: -3.5em;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      z-index: 2;
    }
  }
`;

export const Icon = styled.img<{ icon: string }>`
  margin-top: 1.5em;
  width: 30px;
  height: 30px;
  fill: white;
  content: url(${(props) => props.icon});

  &:hover {
    transform: scale(1.1);
  }
`;

export const Span = styled.span`
  color: black;
  font-size: 8px;
  font-weight: bold;
  margin-top: 1em;

`;