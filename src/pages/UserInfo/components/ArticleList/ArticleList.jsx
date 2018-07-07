import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Icon,Ballon } from '@icedesign/base';

import IcePanel from '@icedesign/panel';
import UserInfoCard from '../UserInfoCard'

const generatorData = () => {
    return [{
      title: '软件需求分析与建模',
      description:
        '在这门课，我学到了怎么利用StarUML进行一些建模工作，受益匪浅。llnnb。',
      userContent: {
        "name": '连木明',
        "desc": '2016软件工程卓越班',
        "loc": '广州',
        'tag': 'lmmnb',
        'email': '1461014539@qq.com'
      },
      like: 123,
      favor: 114514,
      comment: 233,
    }, {
      title: '软件需求分析与建模',
      description:
        '上课很吔屎。但是我觉得李静锴实验员不错。',
      userContent: {
        "name": '陈俊伟',
        "desc": '2016软件工程5班',
        "loc": '广州',
        'tag': 'wqnb',
        'email': '394715636@qq.com'
      },
      like: 123,
      favor: 114514,
      comment: 233,
    }];
};

export default class ArticleList extends Component {
  static displayName = 'ArticleList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  getCourseId() {
    var arr = window.location.hash.split("/");
    return arr[2];
  }

  render() {
    const dataSource = generatorData();
    return (
      <div className="article-list">
        <div>
          {dataSource.map((item, index) => {
            return (
              <div>
                <IcePanel status="info" style={{ marginTop: "20px" }}>
                  <IcePanel.Header>
                  <p style={{marginTop: "2px", marginBottom: "2px"}}>
                      <a>
                          <div>
                          <UserInfoCard content={item.userContent} trigger={item.title} />
                        </div>
                      </a>
                    </p>
                  </IcePanel.Header>
                  <IcePanel.Body>
                    <div>
                      <p style={styles.desc}>{item.description}</p>
                    </div>
                    <div style={styles.articleItemFooter}>
                      <div style={styles.articleItemMeta}>
                        <span style={styles.itemMetaIcon}>
                          <Icon type="good" size="small" /> {item.like}
                        </span>
                        <span style={styles.itemMetaIcon}>
                          <Icon type="favorite" size="small" /> {item.favor}
                        </span>
                        <span style={styles.itemMetaIcon}>
                          <Icon type="comments" size="small" /> {item.comment}
                        </span>
                      </div>
                    </div>
                  </IcePanel.Body>
                </IcePanel>
              </div>
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
  desc: {
    lineHeight: '24px',
    fontSize: '14px',
    color: '#999',
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
    color: '#999',
    marginRight: '15px',
  },
};
