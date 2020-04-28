import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogExceprt from "../templates/blog-excerpt"

export default ({ data }) => (
    <Layout>
        <h1>Blog {data.site.siteMetadata.title}</h1>
        <p>
            We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food.
        </p>
        <h4>{data.allMdx.totalCount} Posts</h4>

        <div className="flex justify-between flex-wrap p-6 bg-gray-300">
            {data.allMdx.edges.map(({ node }) => (
                <BlogExceprt
                    key={node.id}
                    id={node.id}
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    timeToRead={node.timeToRead}
                    excerpt={node.excerpt}
                />
            ))}
        </div>
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