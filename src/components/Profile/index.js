import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"

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
    <div className="Profile-wrapper">
      <h1>{title}</h1>
      <Avatar />
      <h2>{author}</h2>
      <h3>{position}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Profile
