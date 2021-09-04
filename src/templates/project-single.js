import React from "react"
import "../styles/styles.scss"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import MarkdownContent from "../components/markdownContent"

export default function ProjectTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout title={frontmatter.seoTitle ? frontmatter.seoTitle : frontmatter.title} description={frontmatter.seoDesc}>
    <div className="project-container">
      <div className="project-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <h3>PROGETTO!</h3>
        

      {frontmatter.paragraphs.map((paragraph, index) => (
          <div className="paragraph" key={index}>
          <h2> {paragraph.titoletto} </h2>
          <MarkdownContent content= {paragraph.testo} />
          </div>

          ))}
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
        date(formatString: "MMMM DD, YYYY")
        path
        seoDesc
        seoTitle
        title
        paragraphs {
          titoletto
          testo
        }
      }
      html
    }
  }
  
`