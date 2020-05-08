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
					<Link className="text-customRed" to={`/`}>{`< ${data.site.siteMetadata.title} />`}</Link>
				</span>
			</div>

			<div className="">
				<Link to={`/blog/`} className="text-customRed inline-block mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
					Blog
				</Link>
				<Link to={`/about/`} className="text-customRed inline-block mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
					About
				</Link>
				<Link to={`/test/`} className="text-customRed inline-block mr-4 font-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
					Test
				</Link>
			</div>
		</nav>
	)
}