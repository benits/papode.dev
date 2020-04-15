import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled.section`
  align-items: center;
  color: #111;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "San Francisco",
    "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial,
    sans-serif;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  width: 100vw;
  @media screen and (max-width: 768px) {
    background-size: 280px;
  }
`

export const Title = styled.h1`
  background: var(--background);
  color: var(--texts);
  font-size: 120px;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`

export const Text = styled.p`
  background: var(--background);
  color: var(--texts);
  font-family: Courier, monospace;
`

export const Button = styled(AniLink)`
  background: var(--background);
  border: 1px solid var(--borders);
  border-radius: 6px;
  color: var(--texts);
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.06em;
  line-height: 32px;
  margin-top: 1rem;
  padding: 0 10px;
  text-decoration: none;
  text-transform: uppercase;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.6;
  }
`
