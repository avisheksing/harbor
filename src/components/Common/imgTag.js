import React from "react"

export const ImgTag = (props) => {
    return(
        <img src={props?.src} alt={props?.alt} className={props.className}/>
    )
}