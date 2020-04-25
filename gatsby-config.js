/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: "Severus Snape",
		titleTemplate: "%s · The Real Hero",
		description: "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
		url: "https://www.doe.com", // No trailing slash allowed!
		image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
		twitterUsername: "@geppegram",
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
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: [".mdx", ".md"],
				gatsbyRemarkPlugins: [
					'gatsby-remark-copy-linked-files',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1500,
							linkImagesToOriginal: false,
							withWebp: true,
						},
					},
				],
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		// 'gatsby-plugin-feed-mdx',
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
