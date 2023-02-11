import React, { useEffect, useState } from "react"
import {Row, Col, Avatar} from "antd"
import RunningTaskStatusComponent from "./RunningTaskStatusComponent"
import KilledTaskStatusComponent from "./KillesTaskStatusComponent"
import PendingChainsComponent from "./PendingChainsComponent"
import PendingTaskStatusComponent from "./PendingTaskStatusComponent"
import FailedTaskStatusComponent from "./FailedTaskStatusComponent/FailedTaskStatus"
import { TimeIcon } from "../Common/timeIcon"
import { SettingIcon } from "../Common/settingIcon"
import {calcDate} from "../../utils/getTimeDiff"
import { ENUM_FAILED, ENUM_KILLED, ENUM_PENDING, WEB_3_LOGO } from "../../Constant"


function TaskCardComponent(props){
    const [timeDiff, setTimeDiff] = useState("")

    useEffect(() => {
        const timeDiff = calcDate(props.updatedTime)
        setTimeDiff(timeDiff)
    }, [props?.updatedTime])

    return(
        <Col span={24} className={props.type === ENUM_KILLED ? "harbor-content-card status-killed" : props.type === ENUM_FAILED ? "harbor-content-card status-failed" : "harbor-content-card"}>
            <Row>
                <Col span={24} className="task-details-column">
                    <Row>
                        <Col span={19} className="harbor-task-title">
                            {props.name.replace(/_|-/g, " ")}
                            <span className={props.type === ENUM_KILLED ? "span-tag border-gray" : "span-tag"}> 5321 </span>
                        </Col>
                        <Col span={5}>
                            <Row>
                                {
                                    props.type === ENUM_KILLED ? <KilledTaskStatusComponent /> : 
                                    props.type === ENUM_PENDING ? <PendingTaskStatusComponent /> : 
                                    props.type === ENUM_FAILED ? <FailedTaskStatusComponent /> :  <RunningTaskStatusComponent />
                                }
                                <Col span={1} className="dot-div" offset={3}> <span></span> </Col>
                                <Col span={10}  className={props.type === ENUM_PENDING ? "harbor-task-action-settings disable-now" : "harbor-task-action-settings"} onClick={props.type !== ENUM_PENDING && props.onClickSetting(props.taskId)} >
                                    <SettingIcon />
                                    <span> Settings </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={24} className="task-details-column">
                    <Row>
                        <Col span={19}>
                            <Row>
                                <Col span={7}>
                                    <Row>
                                    <Col span={10} className="task-off-chain-counter"> {props.testOffChainCount} off-chain actors </Col>
                                    <Col span={1} className="dot-div"> <span className="move-top"></span> </Col>
                                    <Col span={10} className="task-block-chain-counter" offset={1}> {props.testChainCount} Blockchain </Col>
                                    </Row>
                                </Col>
                                <Col span={16} className="task-block-chain-avatar-group" pull={1}>
                                    <Avatar.Group>
                                        {props.testnetChains.map((chain) => (
                                            WEB_3_LOGO[chain.chain]
                                        ))}
                                    </Avatar.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={5} className="task-timer-last-update">
                            <TimeIcon />
                            <span> Modified {timeDiff} ago </span>
                        </Col>
                    </Row>
                </Col>
                {
                    props.hasPendingTask  && <PendingChainsComponent testOffChainPendingCount={props.testOffChainPendingCount} testnetChainPendingCount={props.testnetChainPendingCount}/>
                }
            </Row>
        </Col>
    )
}

export default TaskCardComponent