import { Divider, Row, Skeleton } from "antd"
import React, { useEffect, useState } from "react"
import { Data_Show_Limit } from "../../../Constant"
import { getTotalDataLength, sortData } from "../../../utils/sortData"
import TaskCardComponent from "../../TaskCards"
import InfiniteScroll from 'react-infinite-scroll-component';
import "./index.css"

function ContentBody(props){
    const [allTaskDetails, setAllTaskDetails] = useState([])
    const [countOfData, setCountOfData] = useState(Data_Show_Limit)
    const [dataLength, setDataLength] = useState(0)

    useEffect(() => {
        const getDataLength = getTotalDataLength(props.showTaskType, props.taskData)
        const allTaskDetails = sortData(props.taskData, props.showTaskType, props.sortFilter, countOfData)
        setDataLength(getDataLength)
        setAllTaskDetails(allTaskDetails)
    }, [props?.taskData, props?.showTaskType, props?.sortFilter,countOfData])

    const onClickSetting = (id) => {
        console.log(id)
    }

    const loadMoreData = () => {
        setCountOfData(countOfData + Data_Show_Limit)
    }

    return(
        <Row className="harbor-content-body-main" id="scrollableDiv">
            
            {
                props.loading && <Skeleton active/>
            }
            {
                !props.loading && 
                    <InfiniteScroll
                        dataLength={allTaskDetails.length}
                        next={loadMoreData}
                        hasMore={allTaskDetails.length < dataLength}
                        loader={<Skeleton active/>}
                        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                        scrollableTarget="scrollableDiv"
                     >
                        {allTaskDetails.map((task) => (
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
                </InfiniteScroll>
            }
        </Row>
    )
}

export default ContentBody