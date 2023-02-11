import React, { useEffect, useState, } from 'react'
import {Layout, Col, Row, Menu} from "antd"
import { HarborIcon } from "../Common/harborIcon"
import {Menu_Item_Link, Menu_Item_Action, Session_Storage_Key} from "../../Constant"
import "./index.css"
import { getCustomSessionStorage } from '../../utils/customSessionStorage'
import UserInfo from './UserInfo'

const {Header}  = Layout

function HeaderComponent(props){
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const getUserData = getCustomSessionStorage(Session_Storage_Key.UserData, true)
        setUserData(getUserData)
    }, [])

    return(
        <Header className='harbor-header'>
            <Row>
                <Col span={2} className="header-element"> <HarborIcon className="harbor-logo-header"/> </Col>
                <Col span={16}>
                    <Menu items={Menu_Item_Link} mode="horizontal" className='harbor-menu'/>
                </Col>
                <Col span={5} >
                    <Menu items={Menu_Item_Action} mode="horizontal" className='harbor-menu item-to-right'/>
                </Col>
                <Col span={1}>
                    <UserInfo userData={userData}/>
                </Col>
            </Row>
        </Header>
    )
}

export default HeaderComponent