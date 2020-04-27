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
        <ul className="flex">
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800 " to={`/`}>{data.site.siteMetadata.title}</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800 " to={`/blog`}>Blog</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800 " to={`/about/`}>About</Link>
            </li>
            <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800 " to={`/about/`}>Test</Link>
            </li>
        </ul>
    )
}