import React from "react";
import Boxe from "./Boxe";

function InputBoxe({ title, value, onChange, name }) {
    return (
        <Boxe title={title} className="input-boxe">
            <input name={name} type="text" value={value} onChange={onChange} />
        </Boxe>
    )
}

export default InputBoxe;