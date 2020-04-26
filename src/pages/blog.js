import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
    <Layout>
        <h1>Blog {data.site.siteMetadata.title}</h1>
        <p>
            We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food.
        </p>
        <h4>{data.allMdx.totalCount} Posts</h4>

        {data.allMdx.edges.map(({ node }) => (
            <div key={node.id}>
                <Link to={node.fields.slug}>
                    <h3>
                        {node.frontmatter.title}{" "}
                        <span>— {node.frontmatter.date}</span>
                    </h3>
                </Link>
                <small>{node.timeToRead} mins</small>
                <p>{node.excerpt}</p>
            </div>
        ))}
    </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                    timeToRead
                }
            }
        }
    }
`