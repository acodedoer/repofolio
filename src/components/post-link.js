import React from "react"
import { Link } from "gatsby"
import Tag from '../components/tag'
const PostLink = ({ post }) => (
  <div id="post">
    <h3>
      <Link to={post.frontmatter.slug}>
        {post.frontmatter.title}
      </Link>
    </h3>
    <div>
      <Tag clr= {post.frontmatter.levels.toLowerCase()} item={post.frontmatter.levels}/>
      <Tag clr= {'levels'} item={`Level: ${post.frontmatter.sublevels}`}/>
      {post.frontmatter.tags.map((item,key)=><Tag key={key} clr= {item.toLowerCase()} item={item}/>)}
      <Tag clr= {post.frontmatter.types.toLowerCase()} item={post.frontmatter.types}/>
    </div>
  </div>
)
export default PostLink