import { Col } from "antd"
import React from "react"
import { InProgressIcon } from "../../Common/inProgressIcon"

function PendingTaskStatusComponent(props){
    return(
        <Col span={2} className="harbor-task-in-progress-status">
            <InProgressIcon />
            <span> Updating </span>
        </Col>
    )
}

export default PendingTaskStatusComponent