import React from "react";

function CircleMinusSvg({ setClass, onSvgClick }) {
    return (
        <svg onClick={onSvgClick ? onSvgClick : undefined} className={setClass ? setClass : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentcolor" d="M352 232h-192C146.7 232 136 242.7 136 256c0 13.25 10.75 24 24 24h192C365.3 280 376 269.3 376 256C376 242.7 365.3 232 352 232zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256S512 397.4 512 256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
        </svg>
    )
}

export default CircleMinusSvg;