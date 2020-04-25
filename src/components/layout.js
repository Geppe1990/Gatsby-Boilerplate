import React from "react"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"
import Menu from "./menu"
import Sidebar from "../components/sidebar"

export default ({ children }) => {
	return (
		<>
			<Menu />
			<div
				css={css`
					margin: 0 auto;
					max-width: 800px;
					padding: ${rhythm(2)};
					padding-top: ${rhythm(1.5)};
				`}
			>
				{children}
				<Sidebar>
					Contenuto sidebar
				</Sidebar>
			</div>
		</>
	)
}
