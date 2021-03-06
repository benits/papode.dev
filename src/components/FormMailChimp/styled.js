import styled from "styled-components"
import media from "styled-media-query"

export const ContentWrapper = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    max-width: 100%;
  `}
`
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const InputStyled = styled.input`
  background: none;
  height: 42px;
  padding: 0 1rem;
  color: var(--texts);
  font-weight: 700;
  border-radius: 8px;

  margin: 0.5rem 0;

  border: 2px solid var(--borders);

  &::placeholder {
    color: var(--texts);
  }

  &:focus {
    outline: none;
  }
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
