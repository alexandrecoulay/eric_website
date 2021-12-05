import React, { useState } from "react";
import Boxe from "./Boxe";
import styles from "../../../Style/Global.module.scss";
import Svg from "../../Svg/Svg";

function ListBoxe({ children, title, text, input }) {
    const [edit, setEdit] = useState(false);

    return (
        <Boxe title={title}>
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
        </Boxe>
    )
}

export default ListBoxe;