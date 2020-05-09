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
			<div className="">
				<span className="text-xl">
					<Link to={`/`}>{`< ${data.site.siteMetadata.title} />`}</Link>
				</span>
			</div>

			<div>
				<Link to={`/blog/`} className="font-black inline-block mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
					Blog
				</Link>
				<Link to={`/about/`} className="font-black inline-block mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
					About
				</Link>
				<Link to={`/test/`} className="font-black inline-block mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
					Test
				</Link>
			</div>
		</nav>
	)
}