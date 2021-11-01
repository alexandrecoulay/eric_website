import React from "react";
import Image from "next/image";
import { isMobile } from 'react-device-detect';

import styles from "../../Style/Global.module.scss"
import { userPath } from "../../Services/constante";
import { SimpleColor } from "../../Services/Canvas";

function Avatar({ user_id, name, disconnected = null, size = 33, onClick = undefined, pointer = undefined, border, className = "" }) {
    return (
        <Image onClick={onClick} className={`${styles.rounded} ${pointer && styles.pointer} ${border && styles.border_color_primary} ${className}`} draggable="false" width={`${isMobile && size > 33 ? 50 : size}px`} height={`${isMobile && size > 33 ? 50 : size}px`} src={disconnected ? SimpleColor('#141418') : userPath(user_id, name, "avatars")} alt="User Avatar" objectFit="cover" />
    )
}

export default Avatar;