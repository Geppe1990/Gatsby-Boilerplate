const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

function dedupeCategories(allMdx) {
	const uniqueCategories = new Set()
	// Iterate over all articles
	allMdx.edges.forEach(({ node }) => {
		// Iterate over each category in an article
		node.frontmatter.categories.forEach(category => {
		uniqueCategories.add(category)
		})
	})
	// Create new array with duplicates removed
	return Array.from(uniqueCategories)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === 'Mdx') {
		const slug = createFilePath({ node, getNode, basePath: 'pages' })
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		})
	}
}

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions
	const result = await graphql(`
		query {
			allMdx {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`)
	const {
		data: { allMdx },
	  } = await graphql(`
		query {
			allMdx {
				edges {
					node {
						id
						frontmatter {
							categories
							slug
						}
					}
				}
			}
		}
	`)
	result.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve('./src/templates/blog-post.js'),
			context: {
				slug: node.fields.slug
			},
		})
	})

	// Create array of every category without duplicates
	const dedupedCategories = dedupeCategories(allMdx)
	// Iterate over categories and create page for each
	dedupedCategories.forEach(category => {
		reporter.info(`Creating page: category/${category}`)
		createPage({
			path: `category/${category}`,
			component: require.resolve("./src/templates/CategoryList.js"),
			// Create props for our CategoryList.js component
			context: {
				category,
				// Create an array of ids of articles in this category
				ids: allMdx.edges
				.filter(({ node }) => {
					return node.frontmatter.categories.includes(category)
				})
				.map(({node}) => node.id),
			},
		})
	})
}