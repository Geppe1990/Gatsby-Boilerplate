/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Pandas Eating Lots'
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/blog`
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [".mdx", ".md"],
				gatsbyRemarkPlugins: [],
			},
		},
		'gatsby-plugin-feed-mdx',
		'gatsby-plugin-mdx',
		'gatsby-plugin-emotion',
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography'
			},
		},
	],
}
