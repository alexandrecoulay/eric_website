import React from "react";
import NextLink from "next/link";

function CreateLink({ children, text, href, className = null, onClick = undefined }) {
    return (
        <NextLink href={href}>
            <a onClick={onClick} className={className && className}>
                { text ?? children }
            </a>
        </NextLink>
    )
}

export default CreateLink;