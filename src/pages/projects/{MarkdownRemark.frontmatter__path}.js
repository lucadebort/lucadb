import React from "react"
import "../../styles/styles.scss"
import Layout from '../../components/layout'
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout title={frontmatter.seoTitle ? frontmatter.seoTitle : frontmatter.title} description={frontmatter.seoDesc}>
    <div className="project-single-container">
      <div className="project-single-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="project-single-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        seoTitle
        seoDesc
      }
    }
  }
`