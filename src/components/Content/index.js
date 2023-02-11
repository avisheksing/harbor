import React, {Suspense, useEffect, useReducer} from "react"
import {Layout, notification} from "antd"
import "./index.css"
import FallBackComponent from "../FallBack";
import { ENUM_ALL, Filter_Type, GET_TASK_DATA_URL } from "../../Constant";
import { apiController } from "../../utils/apiController";import { intialContentState, reducerContent } from "../../Reducer/contentComponent";
import { mapperTestNetData } from "../../utils/mapperTestNetData";

const ContentHeader = React.lazy(() => import('./Content-Header'));
const ContentBody = React.lazy(() => import('./Content-Body'));
const {Content} = Layout

function ContentComponent(props){
    const [state, dispatch] = useReducer(reducerContent, intialContentState)

    useEffect(() => {
        apiController("GET", GET_TASK_DATA_URL).then(response => {
            if(response?.data?.testnet?.length){
                const taskCount = response.data.testnet.length
                const {finalMapData, taskMap} = mapperTestNetData(response.data.testnet)

                dispatch({type: "updateDataCount", payload: taskCount})
                dispatch({type: "updateData", payload: finalMapData})
                dispatch({type: "updateTaskMap", payload: taskMap})
                dispatch({type: "updateShowTaskType", payload: Filter_Type[ENUM_ALL]})
                dispatch({type:"updateLoading", payload: false})
            }
        })
    }, [])

    const onUpdateFilter = (key) => {
        if(key !== "" && Filter_Type?.[key]){
            const showItems = Filter_Type[key]
            dispatch({type: "updateShowTaskType", payload: showItems})

            if(key !== ENUM_ALL){
                const hasTaskForSelectedFilter = showItems.every((type) => {
                    if(state.data?.[type]?.length > 0){
                        return true
                    }
    
                    return false
                })
                if(hasTaskForSelectedFilter === false){
                    notification.info({
                        message: "Don't have any task for selected criteria",
                    })
                }
            }
        }
    }

    const onUpdateSort = (key) => {
        dispatch({type: "updateSortType", payload: key})
    }


    return(
        <Content className="harbor-main-content"> 
            <Suspense fallback={<FallBackComponent />}>
                <ContentHeader 
                    count={state.dataCounts} 
                    selectedFilter={state.selectedFilter} 
                    onUpdateFilter={onUpdateFilter}
                    sortFilter={state.sortType}
                    onUpdateSort={onUpdateSort}
                />
                <ContentBody 
                    taskData={state.data} 
                    loading={state.loading} 
                    showTaskType={state.showTaskType}
                    sortFilter={state.sortType}
                />
            </Suspense> 
        </Content>
    )
}

export default ContentComponent