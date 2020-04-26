import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogExceprt from "../components/blog-excerpt"

export default ({ data }) => (
    <Layout>
        <h1>Blog {data.site.siteMetadata.title}</h1>
        <p>
            We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food.
        </p>
        <h4>{data.allMdx.totalCount} Posts</h4>

        {data.allMdx.edges.map(({ node }) => (
            <BlogExceprt
                id={node.id}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.title}
                timeToRead={node.timeToRead}
                excerpt={node.excerpt}
            />
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