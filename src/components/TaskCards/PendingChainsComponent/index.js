import { Col, Row } from "antd"
import React from "react"
import { InProgressIcon } from "../../Common/inProgressIcon"

function PendingChainsComponent(props){
    return(
        <Col span={24} className="task-details-column">
            <Row>
                <Col span={8}>
                    <Row>
                        {props.testOffChainPendingCount > 0 && (<Col span={10} className="in-progress-off-chain"> <InProgressIcon /> <span> {props.testOffChainPendingCount} off-chain updating</span> </Col>) }
                        <Col span={1} className="dot-div"> <span className="move-top"></span> </Col>
                        {props.testnetChainPendingCount > 0 && <Col span={10} className="in-progress-off-chain text-to-right" offset={1}> <InProgressIcon /> <span> {props.testnetChainPendingCount} Blockchains updating</span> </Col> }
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}

export default PendingChainsComponent