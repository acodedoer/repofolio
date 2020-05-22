import React from "react"
import Layout from "../components/layout"
import Filter from '../components/filter'
import "../components/layout.css"
import PostLink from '../components/post-link'
import "../components/layout.css"

export default function Template(
  data, // this prop will be injected by the GraphQL query below.
) {
    const projects = data.pageContext.projects // data.markdownRemark holds your post data
    const filters = data.pageContext.filters
    console.log(data)

  return (
      <Layout>
        <Filter tags={filters.tags} levels={filters.levels} types={filters.types}/>
        <div id="posts">
            {projects.map(({node}, key) =>
                <PostLink key={key} post={node} />
            )}
        </div>
      </Layout>
  )
}
