import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { DiscussionEmbed } from "disqus-react"
import SEO from "../components/SEO"

export default ({ data }) => {
    const post = data.mdx
    const slug = post.fields.slug
    const title = post.frontmatter.title
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: slug, title },
    }
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
                <DiscussionEmbed {...disqusConfig} />
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