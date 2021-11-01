import React from "react";
import Image from "next/image";
import { isMobile } from 'react-device-detect';

import styles from "../../Style/Global.module.scss"
import { userPath } from "../../Services/constante";
import { SimpleColor } from "../../Services/Canvas";

function Banner({ user_id, banner, onClick = undefined, pointer = undefined }) {
    return (
        <Image onClick={onClick} className={`${styles.background} ${pointer && styles.pointer}`} draggable="false" placeholder="blur" blurDataURL={SimpleColor("#141418")} priority unoptimized quality={100} width="100%" height={`${isMobile ? 100 : 200}px`} src={banner ? banner.image ? userPath(user_id, banner.image, "banners") : SimpleColor(banner.color) : SimpleColor("#141418")} alt="User Banner" objectFit="cover" />
    )
}

export default Banner;