import React from "react";

function VideoSimpleSvg({ setClass, onSvgClick }) {
    return (
        <svg onClick={onSvgClick ? onSvgClick : undefined} className={setClass ? setClass : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentcolor" d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96C512 60.65 483.3 32 448 32zM112 432H64c-8.822 0-16-7.178-16-16v-72h64V432zM112 296h-64v-80h64V296zM112 168h-64V96c0-8.822 7.178-16 16-16h48V168zM352 432H160v-352h192V432zM464 416c0 8.822-7.178 16-16 16h-48v-88h64V416zM464 296h-64v-80h64V296zM464 168h-64V80H448c8.822 0 16 7.178 16 16V168z"/>
        </svg>
    )
}

export default VideoSimpleSvg;