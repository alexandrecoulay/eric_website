import React, { useState } from "react";
import Boxe from "./Boxe";
import styles from "../../../Style/Global.module.scss";
import Svg from "../../Svg/Svg";

function CheckListBoxe({ children, title, text, input, list = [] }) {
    const [edit, setEdit] = useState(false);

    return (
        <Boxe title={title}>
            <div className="list-boxe">
                <div className={`${styles.row} ${styles.padding_5}`} >
                    {
                        list.map((e, index) => <span key={index} className={`${styles.padding_5}`}>{e}</span>)
                    }
                </div>
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
                    <div className="options">
                        { children }
                    </div>
            }
            </div>
        </Boxe>
    )
}

export default CheckListBoxe;