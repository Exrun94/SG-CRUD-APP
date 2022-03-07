import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  background-color: var(--accent-dark-600);
`;

export const IconContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3em;
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
      width: 0.7em;
      height: 2em;
      background-color: var(--primary-dark-800);
      left: 53px;
      border-top-left-radius: 0.6em;
      border-bottom-left-radius: 0.6em;
      z-index: 2;
    }
  }
`;

export const Icon = styled.img<{ icon: string }>`
  width: 30px;
  height: 30px;
  fill: white;
  content: url(${(props) => props.icon});

  &:hover {
    transform: scale(1.1);
  }
`;
