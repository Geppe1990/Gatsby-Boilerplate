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
		<nav className="flex items-center justify-between flex-wrap p-6 bg-gray-800">
			<div className="">
				<span className="font-bold text-xl">
					<Link className="text-customRed" to={`/`}>{`<${data.site.siteMetadata.title}/>`}></Link>
				</span>
			</div>

			<div className="">
				<Link to={`/blog/`} className="text-white inline-block mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-customRed">
					Blog
				</Link>
				<Link to={`/about/`} className="text-white inline-block mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-customRed">
					About
				</Link>
				<Link to={`/test/`} className="text-white inline-block mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-customRed">
					Test
				</Link>
			</div>
		</nav>
	)
}