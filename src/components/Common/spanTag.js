import React from "react"

export const SpanTag = (props) => {
    return(<span className={props.className}> {props.children} </span>)
}