import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/style.scss"

export default ({ data }) => {
	return (
		<Layout>
			<div>
				<h1>Amazing Pandas Eating Things</h1>
				<h4>{data.allMdx.totalCount} Posts</h4>
				{data.allMdx.edges.map(({ node }) => (
					<div key={node.id}>
						<Link to={node.fields.slug}>
							<h3>
								{node.frontmatter.title}{" "}
								<span>— {node.frontmatter.date}</span>
							</h3>
						</Link>
						<small>{node.timeToRead} mins</small>
						<p>{node.excerpt}</p>
					</div>
				))}
			</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
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