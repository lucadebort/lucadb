import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import "../../styles/styles.scss"
import Layout from '../../components/layout'


const ProjectsPage = () => {

  return (
    <Layout pageTitle="projects" title="projects" description="projects and portfolio">
      <h2>things i have been working on</h2>
      <p>apps redesign, card sortings, semiotics analysys and so on</p>

      <h3>from my Medium publication:</h3>

      <StaticQuery
      query={graphql`
      query MyQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/projects/"} }) {
          edges {
            node {
              id
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
      `}
      render={({ allMarkdownRemark }) => (
        <div>
          {allMarkdownRemark.edges.map(post => (
          <Link to={post.node.frontmatter.path}>
              <div>
                <h4>{post.node.frontmatter.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    />


  
    </Layout>
  )
}

export default ProjectsPage