import { Avatar } from "antd"
import Ethereum from "../../assests/images/Ethereum.png"

export const EthereumAvatar = (props) => {
    return(<Avatar src={Ethereum} className={props.className} shape={props.shape} style={{border: "1px solid #DDDDDD"}}/>)
}