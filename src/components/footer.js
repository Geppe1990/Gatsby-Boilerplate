import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export default () => {

    return (
        <footer className="p-6 flex justify-between xs:block">
            <ul className="text-center inline-block xs:block">
                <li className="inline-block mx-2">
                    <a className="block" href="https://www.linkedin.com/in/giuseppevigneri/">
                        <FontAwesomeIcon icon={faLinkedin} />&nbsp;
                         <span>LinkedIn</span>
                    </a>
                </li>
                <li className="inline-block mx-2">
                    <a className="block" href="https://github.com/Geppe1990">
                    <FontAwesomeIcon icon={faGithub} />&nbsp;
                         <span>Github</span>
                    </a>
                </li>
                <li className="inline-block mx-2">
                    <a className="block" href="https://twitter.com/ioSonoGeppe">
                        <FontAwesomeIcon icon={faTwitter} />&nbsp;
                         <span>Twitter</span>
                    </a>
                </li>
                <li className="inline-block mx-2">
                    <a className="block" href="https://www.instagram.com/geppegram/">
                        <FontAwesomeIcon icon={faInstagram} />&nbsp;
                         <span>Instagram</span>
                    </a>
                </li>
            </ul>
            <div className="text-center inline-block xs:block">
                Made with <FontAwesomeIcon className="text-customRed" icon={faHeart} />&nbsp;and <a href="https://www.gatsbyjs.org/">GatsbyJS</a> by Giuseppe Vigneri
            </div>
        </footer>
	)
}