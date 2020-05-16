import styled from "styled-components"
import media from "styled-media-query"
import { HamburgerElastic } from "react-animated-burgers"

export const Wrapper = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  width: 100vw;
  opacity: 1;
  transition: opacity 2s linear;
  margin-top: 80px;
  display: ${props => props.display};
`

export const SiderbarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 1rem;
  text-align: center;
  width: 20rem;
  overflow: auto;

  &::-webkit-scrollbar-track {
    background-color: var(--mediumBackground);
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: var(--mediumBackground);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--highlight);
  }

  ${media.lessThan("large")`
   align-items: flex-start;
   height: auto;
   padding: 1rem 0.5rem;
   flex-direction: row;
   width: 100%;
  `}
`

export const MenuMobile = styled.div`
  display: none;

  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
    outline: none;
    min-width: 250px;
    box-sizing: border-box;
    background-color: var(--mediumBackground);
    padding: 16px 16px 0 16px;
   
    nav {
        display: block;
      }
  `}
`

export const ToggleButton = styled(HamburgerElastic)`
  display: none;
  outline: none;
  &:active {
    outline: none;
  }
  ${media.lessThan("large")`
    display: block;
    outline: none;
    
    div span {
      background-color: var(--highlight);
      &::after {
        background-color: var(--highlight);
      }
      &::before {
        background-color: var(--highlight);
      }
  }
  `}
`
