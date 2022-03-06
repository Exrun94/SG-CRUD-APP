import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`; 

export const StyledField = styled(Field)`
    all: unset;
    display: inline-block;
    width: 20em;
    padding: .7em;
    border: 3px solid transparent;
    border-radius: 2px;
    background: var(--primary-dark-800);
    color: var(--primary-dark-100);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    letter-spacing: 1px;

    &:focus {
        border-right: 4px solid green;
    }

    &:invalid {
      border-right: 4px solid red;
    }

`;

export const StyledLabel = styled.label`
  color: var(--accent-dark-200);
`;

export const Error = styled.div<{visible?: boolean}>`
  color: #F44444;
  font-size: .8em;
  margin-top: .5em;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
  gap: 12px;
`;


export const Button = styled.button<{fill: string}>`
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
  font-size:16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: #ffffff7f;
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: ${props => props.fill};
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #6400e7;
  }
`;

export const Unsplash = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  grid-gap: 1em;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .8em;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &.active {
    transform: scale(1.1);
    border: 2px solid var(--accent-dark-400);
    box-shadow: 0 0 10px var(--accent-dark-400);

  }
`;

export const Heading = styled.h1`
  font-size: 2em;
  font-weight: 400;
  color: var(--primary-dark-200);
  margin-bottom: .5em;
`;
