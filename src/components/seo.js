/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  image,
  isArticle,
  slugPath,
  category,
  publishedTime,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            position
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const url = site.siteMetadata.siteUrl

  const ogImage = `${url}${image || "/assets/img/papodedev.png"}`
  const slug = `${url}/${!!slugPath ? slugPath : ""}`

  let contentMeta = [
    {
      name: `author`,
      content: site.siteMetadata.author,
    },
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `image`,
      content: ogImage,
    },
    {
      name: `robots`,
      content: "index, follow",
    },
    {
      name: `googlebot`,
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: `bingbot`,
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:image`,
      content: ogImage,
    },
    {
      property: `og:locale`,
      content: "pt_BR",
    },
    {
      property: `og:type`,
      content: isArticle ? "article" : "website",
    },
    {
      property: `og:url`,
      content: slug,
    },
    {
      property: `og:site_name`,
      content: site.siteMetadata.title,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:image:src`,
      content: ogImage,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      property: `${isArticle ? "article:publisher" : ""}`,
      content: `${isArticle ? "http://papode.dev/" : ""}`,
    },
    {
      property: `${isArticle ? "article:section" : ""}`,
      content: `${isArticle ? category : ""}`,
    },
    {
      property: `${isArticle ? "article:published_time" : ""}`,
      content: `${isArticle ? publishedTime : ""}`,
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={contentMeta.concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
  isArticle: false,
  category: "",
  publishedTime: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  isArticle: PropTypes.bool,
  category: PropTypes.string,
  publishedTime: PropTypes.string,
}

export default SEO
