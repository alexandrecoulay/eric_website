import React, { useState } from "react";
import Boxe from "./Boxe";
import styles from "../../../Style/Global.module.scss";
import Svg from "../../Svg/Svg";

function LittleListBoxe({ children, title, text, input, onClick }) {
    const [edit, setEdit] = useState(false);

    return (
        <div className={`${styles.full_width} ${styles.radius_5} ${styles.second_background} ${styles.row} ${styles.padding_5}`} onClick={onClick}>
            <div className={` ${styles.row} ${styles.no_wrap}`}>
                <span className={`${styles.row} ${styles.justify_start} ${styles.input}`} style={{ minWidth: 50 }}>{title} :</span>
            </div>
            <div className={`${styles.row} ${styles.no_wrap} ${styles.full_width} ${styles.text_left} `}>  
                <div className="list-boxe">
                    {
                        !edit ?            
                            <div className="input" onClick={() => setEdit(true)}>
                                {text}
                                <Svg name="chevron-down" size={20} color="#F5F5F5" />
                            </div> :
                            <div className="input" >
                                { input }
                                <Svg name="chevron-up" size={20} color="#F5F5F5" onClick={() => setEdit(false)} />
                            </div>
                    }
                    {
                        edit &&
                            <div className="options" onClick={() => setEdit(false)}>
                                { children }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default LittleListBoxe;