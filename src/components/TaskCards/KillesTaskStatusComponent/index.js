import { Col } from "antd"
import React from "react"
import { KilledIcon } from "../../Common/killedIcon"

function KilledTaskStatusComponent(props){
    return(
        <Col span={10} className="harbor-task-killed-status">
            <KilledIcon />
            <span> Killed </span>
        </Col>
    )
}

export default KilledTaskStatusComponent