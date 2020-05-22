import React from "react"
import Layout from "../components/layout"

export default function Template(
  {pageContext}, // this prop will be injected by the GraphQL query below.
) {
    const { projects } = pageContext // data.markdownRemark holds your post data

  return (
      <Layout>
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{pageContext.element}</h1>
                    {projects.map(({node}, key) =>
                        <h2 key={key}>{node.frontmatter.title}</h2> 
                    )}
                </div>
            </div>
      </Layout>
  )
}
