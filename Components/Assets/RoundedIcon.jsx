import React from "react";
import Image from "next/image";
import styles from "../../Style/Global.module.scss"

function Icon({ src, size = 33, onClick, className, notRounded }) {
    return (
        <Image onClick={onClick} className={`${notRounded ?? styles.rounded} ${className}`} draggable="false" width={`${size}px`} height={`${size}px`} src={src} alt="Image" objectFit="cover" />
    )
}

export default Icon;