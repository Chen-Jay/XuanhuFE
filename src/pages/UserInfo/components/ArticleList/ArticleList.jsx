import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Icon, Dialog, Ballon, Grid, Feedback, Input, Button } from '@icedesign/base';
const { Row, Col } = Grid;

import IcePanel from '@icedesign/panel';
import ud from '../../../../utilities/UrlDictionary';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';

export default class ArticleList extends Component {
  static displayName = 'ArticleList';

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  generateReplyPanel(item) {
    var itemTimeDesc = (item.created_at == item.updated_at ? "创建于" : "编辑于") + " ";
    var userInfo = JSON.parse(window.localStorage.getItem("user_info"));
    if (userInfo == undefined || userInfo == null) {
      userInfo = {
        id: -1
      };
    }
    let commentator = userInfo.id != item.user.id ? " - " + item.user.name : "";
    return (
      <div>
          <IcePanel status="info" style={{ marginBottom: "5px" }}>
            <IcePanel.Header>
            <div style={{marginTop: "2px", marginBottom: "2px"}}>
            <span align="left"><a href={"/#/course/"+item.course.id} target="_blank"><u>{item.course.title}</u></a>{commentator}</span>
              &nbsp; &nbsp;<span>{itemTimeDesc}{(item.created_at == item.updated_at ? item.created_at : item.updated_at).substring(0, 19).split("T").map(i => {return i + " ";})}</span>
              <span style={{float:'right'}}>
                <span style={styles.itemMetaIcon}>
                  <Icon type="good" size="small" /> {item.voteUp}
                </span>
                <span style={styles.itemMetaIcon}>
                  <Icon type="bad" size="small" /> {item.voteDown}
                </span>
              </span>
            </div>
            </IcePanel.Header>
            <IcePanel.Body>
              <div>
                <ReactMarkdown source={item.content} />
              </div>
            </IcePanel.Body>
          </IcePanel>
      </div>
    )
  }

  render() {
    return (
      <div className="article-list">
        <div>
          {this.props.comments.map((item, index) => {
            return (
              this.generateReplyPanel(item)
            );
          }
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  articleFilterCard: {
    marginBottom: '10px',
    minHeight: 'auto',
    padding: 0,
  },
  articleSort: {
    margin: 0,
    padding: 0,
  },
  sortItem: {
    cursor: 'pointer',
    listStyle: 'none',
    fontSize: '14px',
    float: 'left',
    whiteSpace: 'nowrap',
    padding: '20px',
  },
  articleItem: {
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid #f5f5f5',
  },
  title: {
    fontSize: '16px',
    color: '#333',
    textDecoration: 'none',
  },
  content: {
    lineHeight: '24px',
    fontSize: '14px',
    color: '#333333',
  },
  articleItemFooter: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    fontSize: '13px',
    background: '#f5f5f5',
    color: '#999',
    padding: '4px 15px',
    borderRadius: '20px',
    marginRight: '20px',
  },
  articleItemTags: {
    padding: '10px 0',
  },
  articleItemMeta: {
    padding: '10px 0',
  },
  itemMetaIcon: {
    fontSize: '14px',
    color: '#5485f7',
    marginRight: '15px',
  },
};
