import styled from "styled-components"
import media from "styled-media-query"
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt"
import { Star } from "@styled-icons/boxicons-solid/Star"
import { GitRepoForked } from "@styled-icons/boxicons-regular/GitRepoForked"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ContentWrapper = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  ${media.lessThan("large")`
    max-width: 100%;
  `};
`
export const CardWrapper = styled.div`
  background-color: var(--mediumBackground);
  border-radius: 6px;
  width: 100%;
  border: var(--borders) 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 8px;
  padding: 1rem 1.5rem;

  ${media.lessThan("large")`
    max-width: 100%;
  `}
`

export const Title = styled.h1`
  color: var(--postColor);
  font-size: 1.5rem;
  font-weight: bold;
  ${media.lessThan("large")`
    max-width: 100%;
  `};
`

export const SubTitle = styled.h2`
  color: var(--postColor);
  font-size: 1rem;
  font-weight: 300;
  font-weight: 500;
  ${media.lessThan("large")`
    max-width: 100%;
  `};
`
export const Description = styled.p`
  color: var(--texts);
  font-size: 0.8rem;
  font-weight: bold;
  margin: 8px 0;
  ${media.lessThan("large")`
    max-width: 100%;
  `};
`

export const ItemDescription = styled.span`
  color: var(--texts);
  font-size: 0.8rem;
  font-weight: bold;
  margin: 8px 0;
  ${media.lessThan("large")`
    max-width: 100%;
  `};
`

export const DateDescription = styled.p`
  color: var(--texts);
  font-size: 0.6rem;
  font-weight: bold;
  margin-right: 8px;
  ${media.lessThan("large")`
    max-width: 100%;
  `};
`
export const TechsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 8px 0;
  color: var(--postColor);
  font-weight: bold;
`

export const Code = styled(CodeAlt)`
  width: 32px;
  fill: var(--texts);
  margin-right: 8px;
`
export const Starr = styled(Star)`
  width: 32px;
  fill: var(--texts);
  margin-right: 8px;
`
export const Forks = styled(GitRepoForked)`
  width: 32px;
  fill: var(--texts);
  margin-right: 8px;
`
export const ItemLink = styled(AniLink)`
  cursor: pointer;
  color: var(--texts);
  display: flex;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.04);

    div {
      p {
        color: var(--highlight);
      }
      span {
        color: var(--highlight);
      }
      div {
        svg {
          fill: var(--highlight);
        }
      }
    }
  }

  ${media.lessThan("large")`
    max-width: 100%;
  `}
`
