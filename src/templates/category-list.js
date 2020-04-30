import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const CategoryList = ({
	pageContext: { category },
	data: { allMdx },
		}) => (
		<Layout>
			<h1>{category} Articles</h1>

			<div className="flex justify-between flex-wrap p-6 bg-gray-300">
				{allMdx.edges.map(({ node }) => {
					return (
						<div key={node.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-3">
							<img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
							<div className="px-6 py-4">
								<div className="font-bold text-xl mb-2">{node.frontmatter.title}</div>
								<p className="text-gray-700 text-base">
									{node.excerpt}
								</p>
							</div>
							<div className="px-6 py-4">
								<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
									<Link to={node.fields.slug}>Read More</Link>
								</span>
							</div>
						</div>
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