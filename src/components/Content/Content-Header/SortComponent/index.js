import { Dropdown, Space } from "antd"
import React, {useState} from "react"
import {DownOutlined} from "@ant-design/icons"
import { Sort_Filter_Type } from "../../../../Constant"

function SortComponent(props){
    const [showSelectedOptions, setShowSelectedOption] = useState(Sort_Filter_Type[2])

    const onChangeFilter = (key) => {
        const getChangedFilterData = Sort_Filter_Type.find((item) => item.key === key)
        setShowSelectedOption(getChangedFilterData)
        props?.onUpdateSort(key)
    }

    return(
        <Dropdown menu={{items: Sort_Filter_Type,selectable: true, defaultSelectedKeys: [props.sortFilter], onClick: (e) => onChangeFilter(e?.key), className:"filter-options" }} className="harbor-filter" >
            <Space>
                Sort By : <span className={showSelectedOptions.className}>{showSelectedOptions.label}</span>
                <DownOutlined />
            </Space>
        </Dropdown>
    )
}

export default SortComponent