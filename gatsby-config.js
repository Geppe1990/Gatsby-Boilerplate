/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: "vigneri.me",
		titleTemplate: "%s · The Real Hero",
		description: "Questa è la descrizione del sito",
		url: "http://localhost:8000", // No trailing slash allowed!
		image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
		twitterUsername: "@geppegram",
	},
	plugins: [
		'gatsby-remark-images',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
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
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		// 'gatsby-plugin-feed-mdx',
		'gatsby-plugin-mdx',
		'gatsby-plugin-postcss'
	],
}
