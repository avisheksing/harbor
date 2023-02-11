import { Col } from "antd"
import React from "react"
import { CircleTickIcon } from "../../Common/circleTickIcon"

function RunningTaskStatusComponent(props){
    return(
        <Col span={10} className="harbor-task-sucess-status">
            <CircleTickIcon />
            <span> Running </span>
        </Col>
    )
}

export default RunningTaskStatusComponent