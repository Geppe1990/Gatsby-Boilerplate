import React from "react"
import Menu from "./menu"
import Sidebar from "../components/sidebar"

export default ({ children }) => {
	return (
		<main>
			<Menu />
			<div className="container">
				<div className="columns">
					<div className="column is-10">
						{children}
					</div>
					<Sidebar>
						Contenuto sidebar
					</Sidebar>
				</div>
			</div>
		</main>
	)
}
