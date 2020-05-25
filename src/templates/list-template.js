import React from "react"
import Layout from "../components/layout"
import Filter from '../components/filter'
import "../components/layout.css"
import PostLink from '../components/post-link'
import SEO from "../components/seo"

export default function Template(
  data, // this prop will be injected by the GraphQL query below.
) {
    const projects = data.pageContext.projects // data.markdownRemark holds your post data

  return (
      <Layout drawerStyle={'fixed'}>
        <SEO title={`${data.pageContext.element} Projects`} />
        <div id="posts">
            {projects.map(({node}, key) =>
                <PostLink key={key} post={node} />
            )}
        </div>
      </Layout>
  )
}
