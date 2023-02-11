import { Avatar } from "antd"
import Arbituram from "../../assests/images/Arbitrum.png"

export const ArbitrumAvatar = (props) => {
    return(<Avatar src={Arbituram} className={props.className} shape={props.shape} style={{border: "1px solid #DDDDDD"}}/>)
}