import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ id, img, title, excerpt, slug }) => {

	return (
        <div key={id} className="flex flex-col shadow my-4 bg-white w-full">
            {/* <Img fluid={img} /> */}
            {/* <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" /> */}
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2 uppercase">{title}</h2>
                <p className="text-gray-700 text-base">
                    {excerpt}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    <Link className="text-customRed" to={slug}>Read More</Link>
                </span>
            </div>
        </div>
	)
}
