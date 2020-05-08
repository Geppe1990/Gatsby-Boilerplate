import React from "react"

export default () => {

    return (
        <footer className="flex items-center justify-between flex-wrap p-6">
            <ul className="page-footer__social">
                <li>
                    <a className="border-customRed border-solid border-b py-1 my-1 block" href="https://codepen.io/bloqhead">
                        <span className="text-customRed">Codepen</span>
                    </a>
                </li>
                <li>
                    <a className="border-customRed border-solid border-b py-1 my-1 block" href="https://github.com/bloqhead">
                        <span className="text-customRed">Github</span>
                    </a>
                </li>
                <li>
                    <a className="border-customRed border-solid border-b py-1 my-1 block" href="https://twitter.com/bloqhead">
                        <span className="text-customRed">Twitter</span>
                    </a>
                </li>
                <li>
                    <a className="border-customRed border-solid border-b py-1 my-1 block" href="https://instagram.com/karmapizza">
                        <span className="text-customRed">Instagram</span>
                    </a>
                </li>
            </ul>
            <div className="">
                <p>© 2020 Vigneri Giuseppe</p>
                <p>
                    <div>Built with <a href="https://gridsome.org/">GatsbyJS</a>.</div>
                </p>
                <p>
                    <a className="block" href="/uses/">What I use.</a>
                    <a className="block" href="/privacy/" className="">Privacy.</a>
                </p>
            </div>
        </footer>
	)
}