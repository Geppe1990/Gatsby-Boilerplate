import React from "react"
import { Link } from "gatsby"

export default ({ id, slug, title, date, timeToRead, excerpt }) => {
	return (
        <div key={id}>
            <Link to={slug}>
                <h3>
                    {title}{" "}
                    <span>— {date}</span>
                </h3>
            </Link>
            <small>{timeToRead} mins</small>
            <p>{excerpt}</p>
        </div>
	)
}
