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
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </Link>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
		        <div className="navbar-start">
                    <Link className="navbar-item" to={`/`}>{data.site.siteMetadata.title}</Link>
                    <Link className="navbar-item" to={`/blog`}>Blog</Link>
                    <Link className="navbar-item" to={`/about/`}>About</Link>
                    <Link className="navbar-item" to={`/about/`}>Test</Link>
                </div>
            </div>
        </nav>
    )
}