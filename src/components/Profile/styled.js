import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
  color: #8899a6;
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: #8899a6;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`
export const ProfileTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  margin: 0.5rem auto 2rem;
`

export const ProfileAuthor = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
`
export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0.5rem auto 1.6rem;
`
export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
