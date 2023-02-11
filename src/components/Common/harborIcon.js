import {ReactComponent as HarborSvg} from "../../assests/icons/Harbor logo.svg"

export const HarborIcon = (props) => {
    return(
        <HarborSvg className={props.className} width={props.width} height={props.height}/>
    )
}