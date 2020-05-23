import React from "react"
import { graphql } from "gatsby"
import ProjectLayout from "../components/projectLayout"
import '../components/layout.css'
import Summary from "../components/summary"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <ProjectLayout>
        <SEO title={`${frontmatter.title} Details`} />
        <Summary frontmatter={frontmatter} align={'center'}/>
          <div id="projectDetails">
              <div
                  dangerouslySetInnerHTML={{ __html: html }}
                />
          </div>
      </ProjectLayout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        types
        levels
        tags
        sublevels
      }
    }
  }
`