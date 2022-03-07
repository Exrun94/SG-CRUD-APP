import styled, { keyframes, css } from "styled-components";
import iconEdit from "../../images/edit.svg";
import iconDelete from "../../images/delete.svg";

// a loop to cycle each nthChild in Card component and increase animation delay for each next card
function nthChild() {
  let styles = "";
  for (let i = 0; i < 50; i++) {
    styles += `
            &:nth-child(${i + 1}) {
                animation-delay: ${`${100 * i}ms`};
            }
        `;
  }
  return css`
    ${styles}
  `;
}

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-row-gap: 2em;
  grid-template-columns: repeat(auto-fill, 23em);
  padding-top: 5em;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  top: -7em;
  text-align: center;
  opacity: 0;
  transition: 0.3s ease-in-out;
`;

export const MainData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8em;
`;

const cardAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(.3);
        filter: hue-rotate(180deg);
    }
    100% {
        opacity: 1;
        transform: scale(1);
        filter: hue-rotate(0deg);
    }
`;

export const Card = styled.div`
  position: relative;
  width: 20em;
  height: 15em;
  background-color: var(--primary-dark-700);
  margin: 2em 0;
  padding: 1.5em 0.7em;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  border-radius: 1em;
  animation: ${cardAnimation} 1s ease-out;
  animation-fill-mode: backwards;

  &:before {
    background: rgba(41, 41, 41, 0.2);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }

  &:hover {
    height: 18em;

    ${DescriptionContainer} {
      margin-top: 2em;
      visibility: visible;
      opacity: 1;
      transition-delay: 0.2s;
    }

    ${MainData} {
      display: none;
      transition-delay: 0.2s;
    }
  }

  ${nthChild()}
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 17em;
  height: 16em;
  top: -40%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  filter: (0);
`;

export const Image = styled.img`
  width: 17em;
  height: 10em;
  border-radius: 1em;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.5em 0.5em 0.5em 0.5em;
  transition: 0.5s;
`;

export const DescriptionHeader = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  color: var(--primary-dark-200);
  margin-bottom: 0.5em;
  transition: 0.5s;
  align-self: flex-start;
`;

export const ProductPrice = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  color: white;
  align-self: flex-end;
  background-color: var(--accent-dark-400);
  padding: 0.5em 1.5em;
  margin-bottom: 0.5em;
  border-radius: 0.7em;

  sup {
    font-size: 0.5em;
  }
`;

export const ProductName = styled.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: var(--accent-dark-400);
`;

export const Description = styled.p`
  font-size: 0.7em;
  color: var(--primary-dark-100);
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  margin-top: 1em;
`;

export const IconEdit = styled.img`
  width: 20px;
  height: 20px;
  content: url(${iconEdit});

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export const IconDelete = styled.img`
  width: 20px;
  height: 20px;
  content: url(${iconDelete});
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

export const DateAdded = styled.p`
  font-size: 0.7em;
  color: white;
  margin: 0.5em 0 0.5em 0;

  span {
    color: var(--accent-dark-400);
  }
`;
