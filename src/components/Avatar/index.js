import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar_profile.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return <S.AvatarWrapper fixed={data.file.childImageSharp.fixed} />
}

export default Avatar
