import { Row, Skeleton } from "antd"
import React, { useEffect, useState } from "react"
import { sortData } from "../../../utils/sortData"
import TaskCardComponent from "../../TaskCards"
import "./index.css"

function ContentBody(props){
    const [allTaskDetails, setAllTaskDetails] = useState([])
    const [showLoadMore, setShowLoadMore] = useState(true)

    useEffect(() => {
        const allTaskDetails = sortData(props.taskData, props.showTaskType, props.sortFilter)
        
        setAllTaskDetails(allTaskDetails)
        
    }, [props?.taskData, props?.showTaskType, props?.sortFilter])

    const onClickSetting = (id) => {
        console.log(id)
    }

    return(
        <Row className="harbor-content-body-main">
            {
                props.loading && <Skeleton active/>
            }
            {
                !props.loading && allTaskDetails.map((task) => (
                    <TaskCardComponent 
                        name={task.name} 
                        testChainCount={task.testnetChainRunning.length} 
                        testOffChainCount={task.testOffChainRunning.length}
                        updatedTime = {task.updated_at}
                        key={task.id} 
                        taskId={task.id}
                        testnetChains={task.testnetChainRunning}
                        testOffChainPendingCount = {task.testOffChainPending.length}
                        testnetChainPendingCount = {task.testnetChainPending.length}
                        hasPendingTask={task.hasPendingTask}
                        type={task.type}
                        onClickSetting={onClickSetting}
                    />
                ))
            }
        </Row>
    )
}

export default ContentBody