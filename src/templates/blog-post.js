import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/SEO"

export default ({ data }) => {
    const post = data.mdx
    return (
        <Layout>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt || ''}
                // image={post.frontmatter.image.childImageSharp.sizes.src}
                //pathname={post.fileAbsolutePath}
                article
            />

            <div>
                <h1>{post.frontmatter.title}</h1>

                {post.frontmatter.categories.map((category, i) =>
                    <Link key={i} to={'/category/'+category} className="tag is-primary is-small">{category}</Link>
                )}

                <MDXRenderer>{post.body}</MDXRenderer>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: {slug: {eq: $slug } }) {
            body
            excerpt
            frontmatter {
                title
                categories
            }
            fields {
                slug
            }
        }
    }
`