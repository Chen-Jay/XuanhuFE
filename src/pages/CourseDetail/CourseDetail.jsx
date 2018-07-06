import React, { Component } from 'react';
import ArticleList from './components/ArticleList';


/*********************************************** */
import { Grid } from "@icedesign/base";
const { Row, Col } = Grid;

import { Card,Timeline } from "@icedesign/base";
const { Item: TimelineItem } = Timeline;

/*********************************************** */


export default class CourseDetail extends Component {
  static displayName = 'Course Detail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div>

      <Row>
        <Col span='3'></Col>
          <Col span='7'>
            <Card style={{ width: '100%' }}
              title="软件需求分析、设计与建模"
            >
              <Timeline>
                <TimelineItem title="授课教师：林连南" />
                <TimelineItem title="课程属性：专业必修课" />
                <TimelineItem title="上课时间：每周4学时" />
              </Timeline>
            </Card>
          </Col>
          <Col span='1'/>
          <Col span='10'>
            <Card 
              title="课程简介"
          >
            <p>
                课程简介：林连南，中科院软件与理论专业博士，讲师。研究方向：软件工程与智能人机交互技术。个人荣誉：多次获得省级、国家级软件比赛一等奖；授课主讲软件需求分析、设计与建模，软件体系结构，智能人机交互技术；指导核心软件工程实践课程；项目：主持科研、教研、企业和政府项目近15项；指导学生研究项目，国家级学生创新创业项目近20项。
                </p>
            </Card>
          </Col>
        <Col span="3"></Col>
      </Row>

      <Row>
        <Col span="3"></Col>
        <Col span="18">
          <div className="coursepage-page">
            <ArticleList />
          </div>
        </Col>
        <Col span="3"></Col>
      </Row>
    </div>);
  }
}
