import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default () => {
    return (
        <nav css={css`display:flex; justify-content:flex-end; padding:20px 0;`}>
            <Link to={`/`} css={css`padding:0 5px`}>
                Home
            </Link>
            <Link to={`/about/`} css={css`padding:0 5px`}>
                About
            </Link>
            <Link to={`/about/`} css={css`padding:0 0 0 5px`}>
                Test
            </Link>
        </nav>
    )
}