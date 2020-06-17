import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from "../components/Post/styled"
import RecommendedPosts from "../components/RecommendedPost"
import Comments from "../components/Comments"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark

  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  const image = `${data.site.siteMetadata.siteUrl}/${post.frontmatter.thumbnail}`
  console.log(image)

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={`/${post.frontmatter.thumbnail}`}
        isArticle={true}
        slugPath={post.fields.slug}
        category={post.frontmatter.category}
        publishedTime={post.frontmatter.date}
      />
      <S.PostHeader>
        <S.PostImage src={image} alt={post.frontmatter.description} />
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
          <br />
          Author: {data.site.siteMetadata.author}
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        description
        title
        thumbnail
        category
      }
      html
      timeToRead
    }
    site {
      siteMetadata {
        siteUrl
        author
      }
    }
  }
`

export default BlogPost
