import React from "react";
import Boxe from "./Boxe";

function InputBoxe({ title, value, onChange, name }) {
    return (
        <Boxe title={title}>
            <input name={name} type="text" value={value} onChange={onChange} />
        </Boxe>
    )
}

export default InputBoxe;