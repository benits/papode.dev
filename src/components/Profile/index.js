import React from "react"

import { useStaticQuery, graphql } from "gatsby"

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
      <h2>
        {author} - {position}
      </h2>
      <p>{description}</p>
    </div>
  )
}

export default Profile
