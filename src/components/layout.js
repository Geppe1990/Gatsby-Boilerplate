import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../css/global.css"

export default ({ children }) => {
	return (
		<div className="siteWrapper">
			<Header />
			<main>
				<div className="container mx-auto flex flex-wrap py-6 max-w-screen-lg">
					{children}
				</div>
			</main>
			<Footer />
		</div>
	)
}
