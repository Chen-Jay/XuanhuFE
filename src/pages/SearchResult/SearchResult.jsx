import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import { Grid } from "@icedesign/base";
const { Row, Col } = Grid;

export default class SearchResult extends Component {
  static displayName = 'SearchResult';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="SearchResult-page">
      <Row>
        <Col span="3"/>
        <Col span="18">
          <ArticleList />
        </Col>
        <Col span="3"/>
      </Row>
      </div>
    );
  }
}
