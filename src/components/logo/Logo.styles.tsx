import styled from "styled-components";

interface styledProps {
  animationDelay: string;
}


export const Header = styled.header`
  display: flex;
  margin: 0 auto;
  gap: 2.1em;
  grid-area: head;
`;

export const Span = styled("span")`
  position: relative;
  font-family: "Orbitron", sans-serif;
  font-size: 4em;
  animation: wave 1s forwards;
  bottom: -1em;
  opacity: 0;
  animation-delay: ${(props: styledProps) => props.animationDelay};

  &.active {
    color: var(--accent-dark-400) !important;
    font-size: 4.5em;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @keyframes wave {
    0% {
      bottom: -0.2em;
      opacity: 1;
      color: var(--accent-dark-800);
    }

    50% {
      bottom: 0.2em;
      color: var(--accent-dark-100);
    }

    100% {
      bottom: 0;
      opacity: 1;
      color: white;
    }
  }
`;

