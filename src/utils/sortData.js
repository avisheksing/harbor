import { ENUM_ASCESNDING_SORT, ENUM_CREATED_SORT, ENUM_DESCENDING_SORT, ENUM_UPDATED_SORT } from "../Constant";

export function sortData(data = {}, filterData = [], sortType = ""){
    const allTaskDetails = []

    if(!isEmptyObject(data)){
        filterData.map((key) => {
            if(data?.[key]?.length){
                allTaskDetails.push(...data?.[key])
            }

            return true
        })
    }

    if(sortType === ENUM_ASCESNDING_SORT){
        allTaskDetails.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }

    if(sortType === ENUM_DESCENDING_SORT){
        allTaskDetails.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
    }

    if(sortType === ENUM_CREATED_SORT){
        allTaskDetails.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    }

    if(sortType === ENUM_UPDATED_SORT){
        allTaskDetails.sort((a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime())
    }

    return allTaskDetails
}

const isEmptyObject = (obj = {}) => {
    return  obj && Object.keys(obj).length > 0 ? false : true
}