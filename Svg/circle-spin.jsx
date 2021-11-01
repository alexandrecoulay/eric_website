import React from "react";

function SpinCircleSvg({ setClass, onSvgClick }) {
    return (
        <svg onClick={onSvgClick ? onSvgClick : undefined} className={setClass ? setClass : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentcolor" d="M256 512c-141.2 0-256-114.8-256-256c0-113.7 76.25-214.9 185.4-246.1c12.59-3.656 26.03 3.719 29.66 16.47c3.656 12.75-3.719 26.03-16.47 29.69C109.9 81.41 48 163.6 48 256c0 114.7 93.31 208 208 208s208-93.31 208-208c0-92.36-61.94-174.6-150.6-199.1c-12.75-3.656-20.12-16.94-16.47-29.69c3.625-12.75 17.06-20.08 29.66-16.47C435.8 41.13 512 142.3 512 256C512 397.2 397.2 512 256 512z"/>
        </svg>
    )
}

export default SpinCircleSvg;