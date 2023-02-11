import {ReactComponent as DocSvg} from "../../assests/icons/Icons - Docs.svg"

export const DocIcon = (props) => {
    return(
        <DocSvg className={props.className} width={props.width} height={props.height}/>
    )
}