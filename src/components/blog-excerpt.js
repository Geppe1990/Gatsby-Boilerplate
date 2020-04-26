import React from "react"
import { Link } from "gatsby"

export default ({ id, slug, title, date, timeToRead, excerpt }) => {
	return (
		// <div key={id}>
		//     <Link to={slug}>
		//         <h3>
		//             {" "}
		//             <span>— </span>
		//         </h3>
		//     </Link>
		//     <small></small>
		//     <p></p>
		// </div>
		<div key={id} className="column is-half">

			<div className="card">
				<div className="card-content">
					<p className="title">
						<Link to={slug}>
							{title}
						</Link>
						</p>
					<small className="excerpt">{excerpt}</small>
				</div>
				<footer className="card-footer">
					<div className="card-footer-item">
						<span>
							{date}
						</span>
					</div>
					<div className="card-footer-item">
						<span>
							{timeToRead} mins
						</span>
					</div>
				</footer>
			</div>
		</div>
	)
}
