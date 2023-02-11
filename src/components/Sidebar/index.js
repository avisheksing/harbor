import React, { useState } from "react"
import {Col, Layout, List, Row} from "antd"
import "./index.css"
import { BackIcon } from "../Common/backIcon"
import { List_Item_Route } from "../../Constant"
import ListItemHeader from "./ListItemHeader"

const {Sider} = Layout

function SidebarComponanet(props){
    const [selectedKeys, setSelectedKeys] = useState("test_net")

    const onClickOptions = (key) => {
        setSelectedKeys(key)
    }

    return(
       <Sider width="300px" className="harbor-sidebar">
            <Row>
                <Col span={24} className="harbor-back-button"> <BackIcon className="harbor-back-icon"/> <span>Back to all projects</span> </Col>
                <Col span={24} className="harbor-side-panel-action">
                    <List dataSource={List_Item_Route} header={<ListItemHeader />} bordered={false} className="harbor-list-item" itemLayout="horizontal" renderItem={(item) => (
                        <List.Item
                            actions={[<span key={item.key} onClick={() => onClickOptions(item.key)}> {item.actionIcon} </span>]}
                            className={selectedKeys === item.key && "selected-list-item"}
                        >
                            {item.icon}
                            <span className="harbor-list-item-title">{item.title}</span>
                        </List.Item>
                    )} />
                </Col>
            </Row>
       </Sider>
    )
}

export default SidebarComponanet