import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Icon,Ballon, Grid } from '@icedesign/base';
const { Row, Col } = Grid;

import IcePanel from '@icedesign/panel';
import UserInfoCard from '../UserInfoCard'

export default class ArticleList extends Component {
  static displayName = 'ArticleList';

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  generateReplyPanel(item) {
    return (
      <div>
          <IcePanel status="info" style={{ marginTop: "20px" }}>
            <IcePanel.Header>
            <div style={{marginTop: "2px", marginBottom: "2px"}}>
              <span align="left">{item.user.name}</span>
              <span style={{float:'right'}}>
                <span style={styles.itemMetaIcon}>
                  <Icon type="good" size="small" /> {item.voteUp}
                </span>
                <span style={styles.itemMetaIcon}>
                  <Icon type="bad" size="small" /> {item.voteDown}
                </span>
                <span style={styles.itemMetaIcon}>
                  <Icon type="skip" size="small" /> 回复Ta
                </span>
              </span>
            </div>
            </IcePanel.Header>
            <IcePanel.Body>
              <div>
                <p style={styles.content}>{item.content}</p>
                {item.nestedComment.map((i) => {
                  return (this.generateReplyPanel(i));
                })}
              </div>
              {/* <div style={styles.articleItemFooter}>
                <div style={styles.articleItemMeta}>
                </div>
              </div> */}
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
