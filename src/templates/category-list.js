import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogExceprt from "../templates/blog-excerpt"

const CategoryList = ({
		pageContext: { category },
		data: { allMdx },
		}) => (
		<Layout>
			<h1>{category} Articles</h1>

			<div className="flex justify-between flex-wrap p-6 bg-gray-300">
				{allMdx.edges.map(({ node }) => {
					return (
						<BlogExceprt
							key={node.id}
							id={node.frontmatter.id}
							slug={node.fields.slug}
							title={node.frontmatter.title}
							date={node.frontmatter.date}
							timeToRead={node.timeToRead}
							excerpt={node.excerpt}
						/>
					)
				})}
			</div>
		</Layout>
)

export const query = graphql`
	query CategoryListQuery($ids: [String]!) {
		allMdx(filter: { id: { in: $ids } }) {
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMM D, YYYY")
					}
					fields {
						slug
					}
					excerpt
					timeToRead
				}
			}
		}
	}
`

export default CategoryList