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

        <div className="flex justify-between flex-wrap p-6 bg-gray-300">
            {data.allMdx.edges.map(({ node }) => (
                <div key={node.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-3">
                    <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{node.frontmatter.title}</div>
                        <p className="text-gray-700 text-base">
                            {node.excerpt}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            <Link to={node.fields.slug}>Read More</Link>
                        </span>
                    </div>
                </div>
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