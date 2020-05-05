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
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<span className="font-bold text-xl">
					<Link to={`/`}>{data.site.siteMetadata.title}</Link>
				</span>
			</div>

			<div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
				<div className="text-sm sm:flex-grow">
				<Link to={`/blog/`} className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						Blog
					</Link>
					<Link to={`/about/`} className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
						About
					</Link>
					<Link to={`/test/`} className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white">
						Test
					</Link>
				</div>
			</div>
		</nav>
	)
}