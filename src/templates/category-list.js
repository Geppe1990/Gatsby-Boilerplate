import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data, pageContext }) => {
	const { currentPage, numPages } = pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();
	const category = pageContext.category;

	return (
		<Layout>
			<h1>{category} Articles</h1>

			<div className="flex justify-between flex-wrap p-6 bg-gray-300">
				{data.allMdx.edges.map(({ node }) => {
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
			<div className="flex justify-between flex-wrap">
				{!isFirst && (
					<Link to={`/${category}/${prevPage}`} rel="next">← Previous Page</Link>
				)}
				{Array.from({ length: numPages }, (_, i) => (
					<Link key={`pagination-number${i + 1}`} to={`/${category}/${i === 0 ? "" : i + 1}`}>
					{i + 1}
					</Link>
				))}
				{!isLast && (
					<Link to={`/${category}/${nextPage}`} rel="next">Next Page →</Link>
				)}
			</div>
		</Layout>
)}

export const query = graphql`
	query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { category: { in: [$category] } } }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						date
						category
					}
				}
			}
		}
	}
`