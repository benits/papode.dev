import styled from "styled-components"
import media from "styled-media-query"

import { CompareArrows as Revert } from "@styled-icons/material-twotone/CompareArrows"

export const ContentWrapper = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    max-width: 100%;
  `}
`

export const ConvertWrapper = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 0;

  ${media.lessThan("large")`
    margin: 2rem 0;
    max-width: 100%;
  `}
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  ${media.lessThan("large")`
    flex-direction: column;
    align-items: center;
  `}
`

export const InputStyled = styled.input`
  background: none;
  height: 42px;
  padding: 0 1rem;
  color: var(--texts);
  font-weight: 700;
  width: 40%;

  margin: 0.5rem 0;

  border: none;
  border-bottom: 1px solid var(--borders);
  transition: all 0.5s ease-in-out;

  &:hover {
    border-bottom: 2px solid var(--highlight);
    transition: all 0.5s ease-in-out;
  }

  &::placeholder {
    color: var(--texts);
  }

  &:focus {
    outline: none;
  }

  ${media.lessThan("large")`
    width: 100%;
  `}
`

export const ResultStyled = styled.input`
  background: none;
  height: 42px;
  padding: 0 1rem;
  color: var(--highlight);
  font-weight: 700;
  width: 40%;
  border-radius: 4px;
  margin: 0.5rem 0;

  border: 1px solid var(--highlight);
  transition: all 0.5s ease-in-out;

  &:hover {
    border: 2px solid var(--highlight);
    transition: all 0.5s ease-in-out;
  }

  &::placeholder {
    color: var(--highlight);
  }

  &:focus {
    outline: none;
  }

  ${media.lessThan("large")`
    width: 100%;
  `}
`

export const ButtonStyled = styled.input`
  background: none;
  height: 42px;
  padding: 0 1rem;
  color: var(--texts);
  font-weight: 700;
  border-radius: 8px;

  margin: 0.5rem 0;

  border: 2px solid var(--borders);
`

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: var(--postColor);
`
export const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0.2rem 0 0.5rem;
  color: var(--texts);
`
export const IconRevert = styled(Revert)`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0.2rem 0 0.5rem;
  color: var(--texts);
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.5);
    transition: all 0.5s ease-in-out;
  }

  ${media.lessThan("large")`
     transform: rotate(90deg);
     height: 42px;
  `}
`
export const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: var(--postColor);
`
