import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "./styled"

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar_profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <S.AvatarWrapper fluid={data.file.childImageSharp.fluid} />
}

export default Avatar
