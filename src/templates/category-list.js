import React from "react"
import { Link, graphql } from "gatsby"

const CategoryList = ({
    pageContext: { category },
    data: { allMdx },
}) => (
    <div>
        <h1>{category} Articles</h1>
        <ul>
            {allMdx.edges.map(({ node }) => {
                return (
                    <li key={node.frontmatter.title}>
                    <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                    </Link>
                    <div>
                        <time>{node.frontmatter.date}</time>
                    </div>
                    </li>
                )
            })}
        </ul>
    </div>
)

export const query = graphql`
  query CategoryListQuery($ids: [String]!) {
    allMdx(filter: { id: { in: $ids } }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default CategoryList