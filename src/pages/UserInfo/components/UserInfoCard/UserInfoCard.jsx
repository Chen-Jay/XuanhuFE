import React, { Component } from 'react';
import IceContainer from '@icedesign/container';

import { Balloon, Icon } from '@icedesign/base';


export default class UserInfoCard extends Component {
  static displayName = 'UserInfoCard';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      "trigger": props.trigger,
      "content": props.content
    };
  }

  render() {
    return (
      <div>
        {/* <div className="user-info-card" style={styles.container}> */}
          <Balloon 
            trigger={<a>{this.state.trigger}</a>}
            closable={false}
            delay='0'
          >
            <div style={styles.content}>
              <div style={styles.head}>
                <img
                  src="https://img.alicdn.com/tfs/TB1nf.WjyqAXuNjy1XdXXaYcVXa-245-245.gif"
                  style={styles.avatar}
                  alt="头像"
                />
                <div style={styles.baseInfo}>
                  <h5 style={styles.name}>{this.state.content.name}</h5>
                  <p style={styles.deptName}>{this.state.content.desc}</p>
                </div>
              </div>
              <ul style={styles.body}>
                <li style={styles.profileItem}>
                  <Icon type="map" size="xs" style={styles.itemIcon} /> {this.state.content.loc}
                </li>
                <li style={styles.profileItem}>
                  <Icon type="discount" size="xs" style={styles.itemIcon} />
                  {this.state.content.tag}
                </li>
                {/* <li style={styles.profileItem}>
                  <Icon type="phone" size="xs" style={styles.itemIcon} />
                  871066160
                </li>
                <li style={styles.profileItem}>
                  <Icon type="mobile-phone" size="xs" style={styles.itemIcon} />
                  13867894321
                </li> */}
                <li style={{ ...styles.profileItem, width: '100%' }}>
                  <a href={"mailto:"+this.state.content.email}>
                    <Icon type="email" size="xs" style={styles.itemIcon} />
                    {this.state.content.email}
                  </a>
                </li>
                {/* <li style={{ ...styles.profileItem, width: '100%' }}>
                  <Icon type="account" size="xs" style={styles.itemIcon} />
                  主管：李四
                </li> */}
              </ul>
            </div>
          </Balloon>
        {/* </div> */}
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '20px 0',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  head: {
    display: 'flex',
    paddingBottom: '10px',
    borderBottom: '1px dotted #eee',
  },
  avatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50px',
    border: '1px solid #eee',
  },
  name: {
    padding: '0 10px',
    margin: 0,
  },
  deptName: {
    padding: '0 10px',
    margin: 0,
    fontSize: '12px',
  },
  body: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10px',
  },
  profileItem: {
    width: '50%',
    lineHeight: '26px',
  },
  itemIcon: {
    color: '#8a9099',
    marginRight: '5px',
  },
  triggerText: {
    color: '#108ee9',
    borderBottom: '1px dashed #108ee9',
    cursor: 'pointer',
  },
};
