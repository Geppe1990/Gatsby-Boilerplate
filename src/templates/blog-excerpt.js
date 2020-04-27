import React from "react"
import { Link } from "gatsby"

export default ({ id, slug, title, date, timeToRead, excerpt }) => {
	return (
		<div key={id}>
			<Link to={slug}>
				{title}
			</Link>
			<small>{excerpt}</small>
			<span>
				{date}
			</span>
			<span>
				{timeToRead} mins
			</span>
		</div>
	)
}
