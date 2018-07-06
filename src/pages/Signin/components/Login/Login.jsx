/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Input, Button, Checkbox, Grid, Feedback } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/icon';
import './Login.scss';
import axios from 'axios';
import ud from '../../../../utilities/UrlDictionary'
import {withRouter} from 'react-router-dom';
const { Row, Col } = Grid;

class Login extends Component {
  static displayName = 'Login';

  static propTypes = {
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        password: '',
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      console.log('values:', values);
      axios.post(ud.getInstance().api("login"), values).then((response) => {
        console.log(response)
          Feedback.toast.success('登录成功');
          localStorage.setItem('user_info', JSON.stringify(response.data));
          localStorage.setItem('expire_date', new Date().getTime() + 2592000000);
          this.props.history.push('/');
        
      }).catch((error) => {
        Feedback.toast.error("登录失败，请检查重试")
      }) ;
    });
  };

  render() {
    return (
      <div style={styles.container} className="user-login">
        <div style={styles.header}>
          <a href="#" style={styles.meta}>
            {/* <img
              style={styles.logo}
              src="https://img.alicdn.com/tfs/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png"
              alt="logo"
            /> */}
            <span style={styles.title}>选乎</span>
          </a>
          <p style={styles.desc}>选乎，让选课简单而美好</p>
        </div>
        <div style={styles.formContainer}>
          <h4 style={styles.formTitle}>登 录</h4>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div style={styles.formItems}>
              <Row style={styles.formItem}>
                <Col style={styles.formItemCol}>
                  <IceIcon
                    type="mail"
                    size="small"
                    style={styles.inputIcon}
                  />
                  <IceFormBinder name="email" required message="必填">
                    <Input
                      size="large"
                      maxLength={20}
                      placeholder="电子邮箱"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="email" />
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Col style={styles.formItemCol}>
                  <IceIcon type="lock" size="small" style={styles.inputIcon} />
                  <IceFormBinder name="password" required message="必填">
                    <Input
                      size="large"
                      htmlType="password"
                      placeholder="密码"
                    />
                  </IceFormBinder>
                </Col>
                <Col>
                  <IceFormError name="password" />
                </Col>
              </Row>

              {/* <Row style={styles.formItem}>
                <Col>
                  <IceFormBinder name="checkbox">
                    <Checkbox style={styles.checkbox}>记住账号</Checkbox>
                  </IceFormBinder>
                </Col>
              </Row> */}

              <Row style={styles.formItem}>
                <Button
                  type="primary"
                  onClick={this.handleSubmit}
                  style={styles.submitBtn}
                >
                  登 录
                </Button>
              </Row>

              <Row className="tips" style={styles.tips}>
                <a href="/#/reg" style={styles.link}>
                  立即注册
                </a>
                {/* <span style={styles.line}>|</span>
                <a href="/" style={styles.link}>
                  忘记密码
                </a> */}
              </Row>
            </div>
          </IceFormBinderWrapper>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);


const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    paddingTop: '100px',
    background: '#f0f2f5',
    backgroundImage:
      'url(https://img.alicdn.com/tfs/TB1kOoAqv1TBuNjy0FjXXajyXXa-600-600.png)',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  title: {
    textAlign: 'center',
    fontSize: '33px',
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: 'Myriad Pro, Helvetica Neue, Arial, Helvetica, sans-serif',
    fontWeight: '600',
  },
  desc: {
    margin: '10px 0',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.45)',
  },
  logo: {
    marginRight: '10px',
    width: '48px',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '368px',
    margin: '0 auto',
  },
  formItem: {
    position: 'relative',
    marginBottom: '25px',
    flexDirection: 'column',
    padding: '0',
  },
  formItemCol: {
    position: 'relative',
    padding: '0',
  },
  formTitle: {
    textAlign: 'center',
    margin: '0 0 20px',
    color: 'rgba(0, 0, 0, 0.85)',
    fontWeight: 'bold',
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#999',
  },
  submitBtn: {
    fontSize: '16px',
    height: '40px',
    lineHeight: '40px',
    background: '#3080fe',
    borderRadius: '4px',
  },
  checkbox: {
    marginLeft: '5px',
  },
  tips: {
    justifyContent: 'center',
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontSize: '13px',
  },
  line: {
    color: '#dcd6d6',
    margin: '0 8px',
  },
};
