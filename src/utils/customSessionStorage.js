export function customSessionStorage(data, type = "", parse = false){
    let returnValue

    if(type !== "" && data && parse){
        returnValue = sessionStorage.setItem(type, JSON.stringify(data))
    }

    if(type !== "" && data && parse === false){
        returnValue = sessionStorage.setItem(type, data)
    }

    return returnValue
}

export function getCustomSessionStorage(type, parse){
    let returnValue

    if(type !== "" && parse){
        returnValue = JSON.parse(sessionStorage.getItem(type))
    }else{
        returnValue = sessionStorage.getItem(type)
    }

    return returnValue
}