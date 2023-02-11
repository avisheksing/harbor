import { Avatar, Dropdown, Space } from "antd"
import React, { useEffect, useState } from "react"
import {DownOutlined} from "@ant-design/icons"

function UserInfo(props){
    const [dropDownOptions, setDropDownOptions] = useState([])

    useEffect(() => {
        let itemList = []
        Object.keys(props.userData).map((item) => {
            item !== "key" && item !== "avatar_url" && itemList.push({key: item, label: props.userData[item]})
            return true
        })

        itemList.push({type: "divider"})
        itemList.push({key: "logout", label: "Logout", danger: true})

        setDropDownOptions(itemList)
    }, [props?.userData])

    return(
        <Dropdown menu={{items: dropDownOptions}} className="user-drop-down" placement="bottomRight">
            <Space>
                <Avatar src={props.userData.avatar_url} size="default"/>
                <DownOutlined className="drop-down-icon-user"/>
            </Space>
        </Dropdown>
    )
}

export default UserInfo