import { notification } from "antd"
import axios from "axios"

export function apiController (method = "GET", url = "", body ){

    if(url !== "" && method === "GET"){
        return axios({
            method: method,
            url: url
        }).then(response => {
            if(response?.status && response.status === 200 && response?.data){
                return response.data
            }else{
                notification.error({
                    message: "Not able to get data. Please try again."
                })
            }
        }).catch(error => {
            notification.error({
                message: "Not able to get data. Please try again."
            })

            console.log(error)
        })
    }
}
