import React, { Component } from 'react';

/*********************************************** */
import { Grid } from "@icedesign/base";
const { Row, Col } = Grid;

import Img from '@icedesign/img';
import ArticleList from './components/ArticleList';
import IceContainer from '@icedesign/container';
import { Button } from '@icedesign/base';
/*********************************************** */


export default class UserInfo extends Component {
  static displayName = 'User Information';

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleImgError = () => {
    // 你可以额外添加一些容错处理业务逻辑
    // console.log('图片报错啦！日志记录下');
    this.setState({
      imgSrc: 'https://img.alicdn.com/tps/TB11W.WOXXXXXcbaXXXXXXXXXXX-496-310.png'
    });
  };

  //点击编辑个人资料按钮
  handleEditUserInfo = () => {

  }

  render() {
    return (<div>

      <Row >
        <Col span='3' />
        <Col span="18">
          <IceContainer>
            <Row>
              {/* <div>
                <Img
                  src="https://images.wallpaperscraft.com/image/pokemon_charizard_mega_charizard_x_greninja_ash_greninja_113654_2560x1080.jpg"
                  type="contain"
                  height={450}
                  style={{ marginTop: '0' }}
                  enableAliCDNSuffix='true'
                  onError={this.handleImgError}
                />  
              </div> */}
            </Row>
            <Row>

              <Col span='4' height="150">
                <div>
                  <Img
                    src="//img.alicdn.com/tfs/TB1K..3PpXXXXa4XFXXXXXXXXXX-311-199.png"
                    shape="rounded"
                    type="cover"
                    width={150}
                    height={150}
                    style={{ marginLeft: "0", marginRight: "auto" }}
                  />
                </div>
              </Col>
              <Col span='16'>
                <div>
                  <h1 style={{ fontSize: '40px', marginLeft: '10px', marginTop: "60px" }}>
                    白天黑夜
                </h1>
                  <h3 style={{ fontSize: '20px', marginLeft: '10px' }}>
                    皇家万六学院菜鸡，求大佬赐教皇家万六学院菜鸡，求大佬赐教
                </h3>
                </div>
              </Col>
              {/* <Col span='2'/> */}
              <Col span='4'>
                <Button 
                size="large" 
                shape='ghost' 
                onClick={this.handleEditUserInfo} 
                style={{ marginTop: "65%" }}
                component='a'
                href="/#/editUserInfo"
                >
                  编辑个人资料
                  </Button>
              </Col>
            </Row>
          </IceContainer>
        </Col>
        <Col span='3' />
      </Row>
      <Row>
        <Col span='3' />
        <Col span='18'>
          <IceContainer title='我的评论'>
            <ArticleList />
          </IceContainer>
        </Col>

        <Col span='3' />
      </Row>

    </div>);
  }
}


const styles = {
  backgroundImage: {
    backgroundImage:
      'url(https://images.wallpaperscraft.com/image/beach_ocean_sand_palm_trees_bungalows_95633_2560x1080.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',
    backgroundSize: '100% 100%'
  }
};