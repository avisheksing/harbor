import React from "react"
import { StarIcon } from "../Common/starIcon"

function ListItemHeader(props){
    return (
        <div className="harbor-list-item-header"> <StarIcon className="harbor-route-item-icon"/>  <span>Acme Frontend</span> </div>
    )
}

export default ListItemHeader