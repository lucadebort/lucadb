import React from "react"
import "../styles/styles.scss"
import Layout from '../components/layout'
import { graphql } from "gatsby"

export default function ProjectTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout title={frontmatter.seoTitle ? frontmatter.seoTitle : frontmatter.title} description={frontmatter.seoDesc}>
    <div className="blog-single-container">
      <div className="blog-single-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <h3>PROGETTO!</h3>
        <div
          className="blog-single-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        date
        path
        seoDesc
        seoTitle
        title
      }
      html
    }
  }
  
`