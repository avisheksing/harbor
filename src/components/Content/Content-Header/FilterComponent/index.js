import React, {useState} from "react"
import {  Dropdown, Space } from "antd"
import {Filter_Type_Data} from "../../../../Constant"
import {DownOutlined} from "@ant-design/icons"

function FilterComponent(props){
    const [showSelectedOptions, setShowSelectedOption] = useState(Filter_Type_Data[0])

    const onChangeFilter = (key) => {
        const getChangedFilterData = Filter_Type_Data.find((item) => item.key === key)
        setShowSelectedOption(getChangedFilterData)
        props?.onUpdateFilter(key)
    }

    return(
        <Dropdown menu={{items: Filter_Type_Data,selectable: true, defaultSelectedKeys: [props.selectedFilter], onClick: (e) => onChangeFilter(e?.key), className:"filter-options" }} className="harbor-filter" size="large">
            <Space>
                Filter By : <span className={showSelectedOptions.className}>{showSelectedOptions.icon} {showSelectedOptions.label}</span>
                <DownOutlined />
            </Space>
        </Dropdown>
    )
}

export default FilterComponent