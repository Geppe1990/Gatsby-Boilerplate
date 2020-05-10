import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO"

export default ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.site.siteMetadata.title}
				description={data.site.siteMetadata.description || ''}
				pathname={data.site.siteMetadata.url}
			/>
			<div>
				<h1 className="text-center mb-16">{data.site.siteMetadata.title}</h1>
				<p>Questa è la homepage</p>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query MyQuery {
		site {
			siteMetadata {
				title
				description
				url
			}
		}
	}
`