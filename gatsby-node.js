const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const projects = await graphql(
    `
      {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects)/"  }}) {
            edges {
              node {
                frontmatter {
                  path
                }
                id
              }
            }
          }
      }
    `
  )

  const blogposts = await graphql(
    `
      {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"  }}) {
            edges {
              node {
                frontmatter {
                  path
                }
                id
              }
            }
          }
      }
    `
  )

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query on projects.`)
    return
  }

  // Create pages for each markdown file.
  const projectTemplate = path.resolve(`src/templates/project-single.js`)
  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = '/projects/' + node.frontmatter.path
    createPage({
      path,
      component: projectTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: node.id
      },
    })
  })

  const blogTemplate = path.resolve(`src/templates/blog-single.js`)
  blogposts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = '/blog/' + node.frontmatter.path
    createPage({
      path,
      component: blogTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        id: node.id
      },
    })
  })
}