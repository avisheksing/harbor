import { Col } from "antd"
import React from "react"
import { FailedIcon } from "../../Common/failedIcon"

function FailedTaskStatusComponent(props){
    return(
        <Col span={10} className="harbor-task-failed-status">
            <FailedIcon />
            <span> Failed </span>
        </Col>
    )
}

export default FailedTaskStatusComponent