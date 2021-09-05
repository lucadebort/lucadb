import React from "react"
import "../styles/styles.scss"
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"
import MarkdownContent from "../components/markdownContent"

import * as styles from "./project-single.module.scss"

export default function ProjectTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout title={frontmatter.seoTitle ? frontmatter.seoTitle : frontmatter.title} description={frontmatter.seoDesc}>
    <Link to="/projects">← progetti</Link>
    <div className={styles.projectcontainer}>
      <div className="project-post">
        <div className="project-header">  
          <h1>{frontmatter.title}</h1>
          <p className={styles.projectTag}>{frontmatter.tags}</p>
          <p className={styles.projectDate}>{frontmatter.date}</p>
          <MarkdownContent className = {styles.projectIntro} content={frontmatter.intro} />
        </div>
        <div className="project-body">
          <div className="project-content">
          {frontmatter.paragraphs.map((paragraph, index) => (
            <div className={styles.paragraph} key={index}>
              <h2 className={styles.titoletto}> {paragraph.titoletto} </h2>
              <MarkdownContent className = "paragraph-content" content={paragraph.testo} />
            </div>
          ))}
          </div>
        </div>

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
        date(formatString: "MMMM YYYY", locale: "it")
        path
        seoDesc
        seoTitle
        title
        tags
        intro
        paragraphs {
          titoletto
          testo
        }
      }
      html
    }
  }
  
`