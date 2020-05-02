const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const blogLayout = path.resolve("./src/templates/blog-list.js")
const blogCategoryLayout = path.resolve(`./src/templates/category-list.js`)
const postLayout = path.resolve('./src/templates/post.js')

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === 'Mdx') {
		let slug = typeof node.frontmatter.path === "undefined" ? createFilePath({ node, getNode, basePath: 'pages' }) : `blog/${node.frontmatter.path}`

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
							category
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)

	//Creo le pagine da mdx
	result.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: postLayout,
			context: {
				slug: node.fields.slug
			},
		})
	})

	//Creo la paginazione dell'archivio blog
	const posts = result.data.allMdx.edges
	const postsPerPage = 6
	const numPages = Math.ceil(posts.length / postsPerPage)

	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blog` : `/blog/${i + 1}`,
			component: blogLayout,
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		})
	})


	//Creo le pagine archivio di categoria
	const categories = []
	posts.forEach((post, index) => {
		post.node.frontmatter.category.forEach(cat => categories.push(cat))
		createPage({
			path: post.node.fields.slug,
			component: postLayout,
			context: {
				slug: post.node.fields.slug,
			},
		})
	})

	const countCategories = categories.reduce((prev, curr) => {
		prev[curr] = (prev[curr] || 0) + 1
		return prev
	}, {})

	const allCategories = Object.keys(countCategories)
	allCategories.forEach((cat, i) => {
		const link = `${cat}`
		Array.from({
			length: Math.ceil(countCategories[cat] / postsPerPage),
		}).forEach((_, i) => {
			createPage({
				path: i === 0 ? link : `${link}/${i + 1}`,
				component: blogCategoryLayout,
				context: {
					allCategories: allCategories,
					category: cat,
					limit: postsPerPage,
					skip: i * postsPerPage,
					currentPage: i + 1,
					numPages: Math.ceil(countCategories[cat] / postsPerPage),
				},
			})
		})
	})
}