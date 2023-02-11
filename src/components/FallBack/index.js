import React from "react"
import {LoadingOutlined} from "@ant-design/icons"

function FallBackComponent(){
    return(
        <div className="full-screen-div"><LoadingOutlined spin className="loading-icon" /></div>
    )
}

export default FallBackComponent