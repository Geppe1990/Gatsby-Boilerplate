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
		url: "http://localhost:8000",
		siteUrl: "http://localhost:8000",
		image: "/src/assets/image.jpg",
		twitterUsername: "@geppegram",
	},
	plugins: [
		'gatsby-remark-images',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`,
				maxWidth: 1920,
				linkImagesToOriginal: false,
				withWebp: true,
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
							maxWidth: 1920,
							linkImagesToOriginal: false,
							withWebp: true,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: "gatsby-plugin-page-progress",
			options: {
				includePaths: ["/", { regex: "^/blog/*" }],
				excludePaths: ["/"],
				height: 3,
				prependToBody: false,
				color: `#ef5350`
			}
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-mdx',
		'gatsby-plugin-postcss',
		'gatsby-plugin-sitemap',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'vigneri.me',
				short_name: 'vigneri',
				start_url: '/',
				background_color: '#ef5350',
				theme_color: '#ef5350',
				display: 'standalone',
				icon: 'src/assets/images/icon.png',
				crossOrigin: `use-credentials`,
			},
		},
		'gatsby-plugin-offline',
	],
}
