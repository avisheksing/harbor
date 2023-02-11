import { Avatar } from "antd"
import Alchemy from "../../assests/images/Alchemy.png"

export const AlchemymAvatar = (props) => {
    return(<Avatar src={Alchemy} className={props.className} shape={props.shape} style={{border: "1px solid #DDDDDD"}}/>)
}