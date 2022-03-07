import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  height: 100%;
  overflow: auto;
  justify-content: center;
  z-index: -2;
  background-color: var(--primary-dark-800);
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.2fr, 1fr;
  gap: 2em 4em;
  grid-template-areas:
    "nav"
    "head"
    "search"
    "productHeader"
    "main";
`;

export const ProductHeader = styled.h1`
  grid-area: productHeader;
  font-size: 2.5em;
  font-weight: bold;
  color: white;
  margin-top: 1em;
  text-align: center;

  span {
    color: var(--accent-dark-400);
  }
`;

export const UtilsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  grid-area: search;
  padding-bottom: 5em;
`;

export const InvalidPermissions = styled.h1`
  color: var(--primary-dark-400);
  font-size: 2em;
  margin-top: 2em;
  overflow-wrap: break-word;
  text-align: center;
`;
