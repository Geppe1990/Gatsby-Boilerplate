import React from "react"
import Menu from "./menu"
import Sidebar from "../components/sidebar"
import "../css/global.css"

export default ({ children }) => {
	return (
		<main>
			<Menu />
			{children}
			<Sidebar>
				Contenuto sidebar
			</Sidebar>
		</main>
	)
}
