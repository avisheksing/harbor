import { ENUM_ALL, ENUM_STATUS_SORT } from "../Constant"

export const intialContentState = {
    data: {},
    dataCounts: 0,
    taskMap: {},
    loading: true,
    selectedFilter: ENUM_ALL,
    showTaskType: [],
    sortType: ENUM_STATUS_SORT
}

export const reducerContent = (state, action) => {
    switch(action.type){
        case "updateData":
            return {...state, data: action.payload}
        case "updateDataCount":
            return {...state, dataCounts: action.payload}
        case "updateTaskMap":
            return {...state, taskMap: action.payload}
        case "updateLoading":
            return {...state, loading: action.payload}
        case "updateFilterData":
            return {...state, selectedFilter: action.payload}
        case "updateShowTaskType":
            return {...state, showTaskType: action.payload}
        case "updateSortType":
            return {...state, sortType: action.payload}
        case "resetState":
            return {
                data: {}, 
                dataCounts: 0, 
                taskMap: {}, 
                loading: true, 
                selectedFilter: ENUM_ALL, 
                showTaskType: [],
                sortType: ENUM_STATUS_SORT
            }
        default:
            return state
    }
}