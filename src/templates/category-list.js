import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostExcerpt from "../components/post-excerpt"

export default ({ data, pageContext }) => {
	const { currentPage, numPages } = pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();
	const category = pageContext.category;

	return (
		<Layout>
			<h1><span className="capitalize">{category}</span> Articles</h1>

			<div className="flex justify-between flex-wrap p-6 bg-gray-300">
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