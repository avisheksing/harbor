import { Avatar } from "antd"
import Fantom from "../../assests/images/Fantom.png"

export const FantomAvatar = (props) => {
    return(<Avatar src={Fantom} className={props.className} shape={props.shape} style={{border: "1px solid #DDDDDD"}}/>)
}