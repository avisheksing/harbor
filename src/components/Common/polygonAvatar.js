import {Avatar} from "antd"
import PolygonLogo from "../../assests/images/Polygon.png"

export const PolygonAvatar = (props) => {
    return(<Avatar src={PolygonLogo} className={props.className} shape={props.shape} style={{border: "1px solid #DDDDDD"}}/>)
}