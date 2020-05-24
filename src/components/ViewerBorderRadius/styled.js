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
export const CardWrapper = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  border: var(--borders) dashed 1px;
  height: auto;
  width: 100%;
`

export const CodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 16px 0;

  ${media.lessThan("large")`
     flex-direction: column;    
  `}
`

export const BorderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 32px;
  border-radius: ${props => props.borderRadius};
  border: var(--highlight) solid 2px;
  background-color: var(--postColor);
  height: 60vh;
  width: 100%;
`
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  height: 100%;
  width: 50%;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px;
  width: 50%;
  height: 100%;
`

export const CodeLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--mediumBackground);
  border: var(--borders) 1px solid;
  border-radius: 8px;
  padding: 16px;
  height: auto;
  width: auto;
  ${media.lessThan("large")`
     margin: 16px 0;
  `}
`

export const CodeRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--mediumBackground);
  border: var(--borders) 1px solid;
  border-radius: 8px;
  padding: 16px;
  width: auto;

  height: auto;
  ${media.lessThan("large")`
     margin: 16px 0;
  `}
`

export const InputStyled = styled.input`
  background: none;
  height: 42px;
  padding: 8px;
  color: var(--texts);
  font-weight: 700;
  font-size: 18px;
  width: 70px;
  border: none;
  border-radius: 8px;
  border: 1px solid var(--borders);
  background-color: var(--postColor);

  &::placeholder {
    color: var(--texts);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    border: 2px solid var(--highlight);
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

export const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
  color: var(--postColor);
`

export const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0.6rem 0 0.5rem;
  color: var(--texts);
`
export const Username = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0.2rem 0 0.5rem;
  color: var(--postColor);
`
export const ItemLink = styled.a`
  cursor: pointer;
  color: var(--highlight);
  border-bottom: var(--highlight) 1px dashed;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`

export const Code = styled.pre`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6rem;

  color: var(--postColor);
`
