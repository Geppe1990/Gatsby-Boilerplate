import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostExcerpt from "../components/post-excerpt"
import SEO from "../components/SEO"

export default ({ data, pageContext }) => {
	const { currentPage, numPages } = pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();
	const category = pageContext.category;

	return (
		<Layout>
			<SEO
				title={`${data.site.siteMetadata.title} - ${category}`}
			/>
			<div className="w-full p-3">
				<h1><span className="capitalize">{category}</span> Articles</h1>
			</div>
			<div className="w-full flex flex-col items-center">
				<div className="flex justify-between flex-wrap">
					{data.allMdx.edges.map(({ node }) => {
						return (
							<PostExcerpt
								key={node.id}
								id={node.id}
								img={node.frontmatter.image.childImageSharp.fluid}
								title={node.frontmatter.title}
								excerpt={node.excerpt}
								slug={node.fields.slug}
							/>
						)
					})}
				</div>
				<div className="flex justify-between flex-wrap">
					{!isFirst && (
						<Link
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
							to={`/${category}/${prevPage}`} rel="next">← Previous Page</Link>
					)}
					{Array.from({ length: numPages }, (_, i) => (
						<Link
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
							key={`pagination-number${i + 1}`} to={`/${category}/${i === 0 ? "" : i + 1}`}>
						{i + 1}
						</Link>
					))}
					{!isLast && (
						<Link
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
							to={`/${category}/${nextPage}`} rel="next">Next Page →</Link>
					)}
				</div>
			</div>
		</Layout>
)}

export const query = graphql`
	query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
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
					excerpt
					frontmatter {
						title
						date
						category
						image {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	}
`