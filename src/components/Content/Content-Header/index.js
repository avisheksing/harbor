import { Col, Row } from "antd"
import React from "react"
import { AddIcon } from "../../Common/addIcon"
import FilterComponent from "./FilterComponent"

import "./index.css"
import SortComponent from "./SortComponent"

function ContentHeader(props){

    return(
        <Row className="content-header-action">
            <Col span={15}>
                <Row>
                    <Col span={5}> <h3 className="harbor-content-title"> Testnets ({props.count})</h3> </Col>
                    <Col span={4} className="harbor-header-content-anchor"> <AddIcon className="harbor-icon-content-anchor"/>  <span> New Testnet </span> </Col>
                </Row>
            </Col>
            <Col span={9}>
                <Row>
                    <Col span={9} className="harbor-filter-div" >
                        <FilterComponent selectedFilter={props.selectedFilter} onUpdateFilter={props?.onUpdateFilter}/>
                    </Col>
                    <Col span={1} offset={2} className="dot-div" style={{top: "4px", textAlign: "left"}}> <span></span> </Col>
                    <Col span={9} className="harbor-filter-div">
                        <SortComponent sortFilter={props.sortFilter} onUpdateSort={props.onUpdateSort}/>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ContentHeader