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
				<span className="font-bold text-xl">
					<Link className="text-gray-900" to={`/`}>{data.site.siteMetadata.title}</Link>
				</span>
			</div>

			<div className="">
				<Link to={`/blog/`} className="inline-block text-gray-900 mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-customRed">
					Blog
				</Link>
				<Link to={`/about/`} className="inline-block text-gray-900 mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-customRed">
					About
				</Link>
				<Link to={`/test/`} className="inline-block text-gray-900 mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-customRed">
					Test
				</Link>
			</div>
		</nav>
	)
}