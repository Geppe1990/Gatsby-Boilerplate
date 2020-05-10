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

	return (
		<Layout>
			<SEO
				title={`${data.site.siteMetadata.title} - Blog`}
			/>
			<div className="w-full">
				<h1 className="mb-16 text-center">Blog {data.site.siteMetadata.title}</h1>
			</div>
			<div className="w-full flex flex-col items-center flex-wrap">
				<div className="flex justify-between flex-wrap max-w-full">
					{data.allMdx.edges.map(({ node }) => (
						<PostExcerpt
							key={node.id}
							id={node.id}
							img={node.frontmatter.image.childImageSharp.fluid.src}
							title={node.frontmatter.title}
							excerpt={node.excerpt}
							slug={node.fields.slug}
							category={node.frontmatter.category}
							date={node.frontmatter.date}
						/>
					))}
				</div>
				<div className="flex justify-between flex-wrap">
					{!isFirst && (
						<Link
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2"
							to={`/blog/${prevPage}`} rel="next">← Previous Page</Link>
					)}
					{Array.from({ length: numPages }, (_, i) => (
						<Link 
							className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2"
							key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
						{i + 1}
						</Link>
					))}
					{!isLast && (
						<Link 
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2"
						to={`/blog/${nextPage}`} rel="next">Next Page →</Link>
					)}
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		  ) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						category
						title
						date(formatString: "DD MMMM, YYYY", locale: "it")
						image {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
									src
								}
							}
						}
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