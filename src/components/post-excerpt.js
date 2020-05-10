import React from "react"
import { Link } from "gatsby"

export default ({ id, img, title, excerpt, slug, category, date}) => {

	return (
		<div className="w-full lg:flex mb-4 xs:px-4">
			<div className="h-48 lg:h-auto lg:w-56 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${img})`}}></div>
			<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
				<div className="mb-8">
					{category.map((cat, i) =>
						<p key={i} className="text-sm text-gray-600 inline items-center pr-1">
							{cat}
						</p>
					)}
					<Link to={slug} className="block text-gray-900 font-bold text-xl mb-2">{title}</Link>
				<p  className="text-grey-darker text-base">{excerpt}</p>
				</div>
				<div className="flex items-center">
				 <div className="text-sm">
					 <p className="text-gray-900 leading-none">Pubblicato il</p>
					 <p className="text-gray-600">{date}</p>
				 </div>
				</div>
			</div>
		</div>
	)
}
