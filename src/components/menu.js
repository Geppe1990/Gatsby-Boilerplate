import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
	const data= useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)

	return (
		<nav className="flex items-center justify-between flex-wrap p-6">
			<div>
				<span className="text-xl">
					<Link className="hover:no-underline font-black" to={`/`}>{`< ${data.site.siteMetadata.title} />`}</Link>
				</span>
			</div>

			<div>
				<Link to={`/blog/`} className="font-black inline-block mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:no-underline">
					Blog
				</Link>
				<Link to={`/about/`} className="font-black inline-block mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:no-underline">
					About
				</Link>
				<Link to={`/test/`} className="font-black inline-block mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:no-underline">
					Test
				</Link>
			</div>
		</nav>
	)
}