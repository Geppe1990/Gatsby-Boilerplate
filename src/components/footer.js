import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

export default () => {

    return (
        <footer className="flex items-center justify-between flex-wrap p-6">

            <ul className="page-footer__social">
                <li>
                    <a className="font-black border-customRed border-solid border-b py-1 my-1 block" href="https://codepen.io/bloqhead">
                        <FontAwesomeIcon icon={faLinkedin} />&nbsp;
                        <span className="text-customRed">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a className="font-black border-customRed border-solid border-b py-1 my-1 block" href="https://github.com/bloqhead">
                    <FontAwesomeIcon icon={faGithub} />&nbsp;
                        <span className="text-customRed">Github</span>
                    </a>
                </li>
                <li>
                    <a className="font-black border-customRed border-solid border-b py-1 my-1 block" href="https://twitter.com/bloqhead">
                        <FontAwesomeIcon icon={faTwitter} />&nbsp;
                        <span className="text-customRed">Twitter</span>
                    </a>
                </li>
                <li>
                    <a className="font-black border-customRed border-solid border-b py-1 my-1 block" href="https://instagram.com/karmapizza">
                        <FontAwesomeIcon icon={faInstagram} />&nbsp;
                        <span className="text-customRed">Instagram</span>
                    </a>
                </li>
            </ul>
            <div className="">
                <p>© 2020 Vigneri Giuseppe</p>
                <p>
                    Built with <a href="https://gridsome.org/">GatsbyJS.</a>
                </p>
                <p>
                    <a className="block" href="/uses/">What I use.</a>
                    <a className="block" href="/privacy/">Privacy.</a>
                </p>
            </div>
        </footer>
	)
}