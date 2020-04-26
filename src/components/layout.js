import React from "react"
import Menu from "./menu"
import Sidebar from "../components/sidebar"

export default ({ children }) => {
	return (
		<main>
			<Menu />
			<div className="section">
				<div className="container content">
					<div className="columns">
						<div className="column is-9">
							{children}
						</div>
						<Sidebar>
							Contenuto sidebar
						</Sidebar>
					</div>
				</div>
			</div>
		</main>
	)
}
