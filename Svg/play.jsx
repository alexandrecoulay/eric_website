import React from "react";

function PlaySvg({ setClass, onSvgClick }) {
    return (
        <svg onClick={onSvgClick ? onSvgClick : undefined} className={setClass ? setClass : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentcolor" d="M228.5 147.5C224.7 145.2 220.3 144 216 144C202.2 144 192 155.3 192 168v176c0 12.8 10.31 24 24 24c4.344 0 8.68-1.18 12.52-3.523l144-88C379.6 272.1 384 264.4 384 256c0-8.359-4.352-16.12-11.48-20.48L228.5 147.5zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
        </svg>
    )
}

export default PlaySvg;