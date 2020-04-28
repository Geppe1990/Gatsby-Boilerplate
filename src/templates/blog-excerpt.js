import React from "react"
import { Link } from "gatsby"

export default ({ id, slug, title, date, timeToRead, excerpt }) => {
	return (
		<div key={id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-3">
			<img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">
					{excerpt}
				</p>
			</div>
			<div className="px-6 py-4">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
					<Link to={slug}>Read More</Link>
				</span>
			</div>
		</div>
	)
}
