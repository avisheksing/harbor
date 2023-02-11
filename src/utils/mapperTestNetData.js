import { TASK_TYPE_DATA } from "../Constant"

export function mapperTestNetData (data = [] ){
    let finalMapData = {}
    let taskMap = {}

    if(data.length > 0){
        for(let task of data){
            const taskType = TASK_TYPE_DATA[task?.status]
            if(finalMapData[taskType]){
                const filterData = formatTaskData(task)
                finalMapData[taskType].push(filterData)
            }else{
                const filterData = formatTaskData(task)
                finalMapData[taskType] = [filterData]
            }

            if(task?.id){
                taskMap[task?.id] = taskType
            }
        }
    }

    return {finalMapData , taskMap}
}

function formatTaskData(data) {
    let eachTask = {}

    eachTask.name = data?.name
    eachTask.id = data?.id
    eachTask.status = data?.status
    eachTask.created_at = data?.created_at
    eachTask.updated_at = data?.updated_at
    eachTask.testOffChainRunning = data?.testnet_off_chain_actors.filter((offChain) => offChain?.status === "RUNNING")
    eachTask.testnetChainRunning = data?.testnet_chains.filter((testNet) => testNet?.status === "RUNNING")
    eachTask.testOffChainPending = data?.testnet_off_chain_actors.filter((offChain) => offChain?.status === "PENDING")
    eachTask.testnetChainPending = data?.testnet_chains.filter((testNet) => testNet?.status === "PENDING")
    eachTask.hasPendingTask = eachTask.testOffChainPending.length > 0 || eachTask.testnetChainPending > 0 
    eachTask.type = TASK_TYPE_DATA[data.status]

    return eachTask
}