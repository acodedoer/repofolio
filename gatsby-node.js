exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const projectTemplate = require.resolve(`./src/templates/project-template.js`)
    const listTemplate = require.resolve(`./src/templates/list-template.js`)

    const result = await graphql(`
      {
        projects: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                types
                tags
                levels
                sublevels
              }
            }
          }
        }
        filters: allMarkdownRemark {
          types: distinct(field: frontmatter___types)
          tags: distinct(field: frontmatter___tags)
          levels: distinct(field: frontmatter___levels)
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      console.log(result)
      return
    }

    result.data.projects.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: projectTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })

    for (const parent in result.data.filters) {
        result.data.filters[parent].forEach((element,key) => {
          createPage({
            path: `/${element.toLowerCase()}/`,
            component: listTemplate,
            context: {
              filters: result.data.filters,
              element: element,
              projects: result.data.projects.edges.filter(({node}) => !Array.isArray(node.frontmatter[parent])? node.frontmatter[parent] == element : node.frontmatter[parent].includes(element))
            },
          })
        })
    } 
  }