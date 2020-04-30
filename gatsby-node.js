const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

function dedupeCategories(allMdx) {
	const uniqueCategories = new Set()

	allMdx.edges.forEach(({ node }) => {

		node.frontmatter.categories.forEach(category => {
		uniqueCategories.add(category)
		})
	})

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
						id
						frontmatter {
							categories
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	//Creo le pagine archivio blog
	result.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve('./src/templates/post.js'),
			context: {
				slug: node.fields.slug
			},
		})
	})


	//Creo le pagine archivio di categoria
	const dedupedCategories = dedupeCategories(result.data.allMdx)

	dedupedCategories.forEach(category => {
		reporter.info(`Creating page: category/${category}`)
		createPage({
			path: `category/${category}`,
			component: require.resolve("./src/templates/category-list.js"),

			context: {
				category,

				ids: result.data.allMdx.edges
				.filter(({ node }) => {
					return node.frontmatter.categories.includes(category)
				})
				.map(({node}) => node.id),
			},
		})
	})
}