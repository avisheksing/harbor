import {ReactComponent as CommandSvg} from "../../assests/icons/Icons - Command sheet.svg"

export const CommandIcon = (props) => {
    return (
        <CommandSvg width={props.width} height={props.height} className={props.className}/>
    )
}