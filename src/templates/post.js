import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"
import Img from "gatsby-image"

export default ({ data }) => {
	const post = data.mdx
	const imageSource = post.frontmatter.image.childImageSharp.fluid

	return (
		<Layout>
			<SEO
				title={`${data.site.siteMetadata.title} - ${post.frontmatter.title}`}
				description={post.frontmatter.description || post.excerpt || ''}
				image={imageSource.src}
			/>

			<article className="flex flex-col shadow bg-white w-full px-6 py-4">
				<Img fluid={imageSource} />
				<h1 className="capitalize mt-4">{post.frontmatter.title}</h1>
				<div className="my-4">
					{post.frontmatter.category.map((category, i) =>
						<Link key={i} to={`/${category}/`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:no-underline">{category}</Link>
					)}
				</div>

				<div className="content">
					<MDXRenderer>{post.body}</MDXRenderer>
				</div>
			</article>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		site {
			siteMetadata {
			  title
			}
		}
		mdx(fields: {slug: {eq: $slug } }) {
			body
			excerpt
			frontmatter {
				title
				category
				image {
					childImageSharp {
						fluid(maxWidth: 1024) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			fields {
				slug
			}
		}
	}
`