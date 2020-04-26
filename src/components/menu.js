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
        <ol>
            <li><Link to={`/`}>{data.site.siteMetadata.title}</Link></li>
            <li><Link to={`/blog`}>Blog</Link></li>
            <li><Link to={`/about/`}>About</Link></li>
            <li><Link to={`/about/`}>Test</Link></li>
        </ol>
    )
}