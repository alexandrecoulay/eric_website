import React from "react";
import NextLink from "next/link";

interface CreateLinkProps {
    children?: React.ReactNode;
    /** Alternative à `children` pour un libellé simple. */
    text?: React.ReactNode;
    href: string;
    className?: string | null;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

function CreateLink({ children, text, href, className = null, onClick }: CreateLinkProps) {
    return (
        <NextLink href={href} onClick={onClick} className={className ?? undefined}>
            { text ?? children }
        </NextLink>
    )
}

export default CreateLink;
