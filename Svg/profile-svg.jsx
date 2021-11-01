import React from "react";

function ProfileSvg({ setClass = [], onSvgClick }) {
    return (
        <svg onClick={onSvgClick ? onSvgClick : undefined} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path className={setClass[0] ? setClass[0] : ""} fill="currentColor" d="M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z"/>
            <path className={setClass[1] ? setClass[1] : ""} fill="currentColor" d="M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301zM451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z"/>
        </svg>
    )
}

export default ProfileSvg;