const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
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

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const projectTemplate = path.resolve(`src/templates/project-single.js`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
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
}