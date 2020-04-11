import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description, author },
    },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          position
          description
          author
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileTitle>{title}</S.ProfileTitle>
      <S.ProfileLink to="/">
        <Avatar />
        <S.ProfileAuthor>{author}</S.ProfileAuthor>
        <S.ProfilePosition>{position}</S.ProfilePosition>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
