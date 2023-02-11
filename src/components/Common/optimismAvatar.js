import { Avatar } from "antd"
import Optimism from "../../assests/images/Optimism.png"

export const OptimismAvatar = (props) => {
    return(<Avatar src={Optimism} className={props.className} shape={props.shape} style={{border: "1px solid #DDDDDD"}}/>)
}