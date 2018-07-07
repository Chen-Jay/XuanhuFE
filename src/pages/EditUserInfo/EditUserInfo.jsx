/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Radio, Switch, Upload, Grid, Feedback } from '@icedesign/base';
import {
    FormBinderWrapper as IceFormBinderWrapper,
    FormBinder as IceFormBinder,
    FormError as IceFormError,
} from '@icedesign/form-binder';
import './EditUserInfo.scss';

const { Row, Col } = Grid;
const { Group: RadioGroup } = Radio;
const { ImageUpload } = Upload;

function beforeUpload(info) {
    console.log('beforeUpload callback : ', info);
}

function onChange(info) {
    console.log('onChane callback : ', info);
}

function onSuccess(res, file) {
    console.log('onSuccess callback : ', res, file);
}

function onError(file) {
    console.log('onError callback : ', file);
}

export default class EditUserInfo extends Component {
    static displayName = 'EditUserInfo';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            value: {
                name: '',
                gender: 'male',
                notice: false,
                email: '',
                avatar: '',
                siteUrl: '',
                githubUrl: '',
                twitterUrl: '',
                description: '',
            },
            userInfo: {
                name: "谢仪民",
                description: "我很厉害的"
            }
        };
    }

    componentDidMount() {
        var info = JSON.parse(window.localStorage.getItem("user_info"));
        if (info == undefined || info == null) {
            window.location.replace("/#/notfound");
            return;
        }
        this.setState({
            userInfo: info
        });
    }

    onClickSubmit() {
        Feedback.toast.success("not implemented yet");
    }

    onDragOver = () => {
        // console.log('dragover callback');
    };

    onDrop = (fileList) => {
        // console.log('drop callback : ', fileList);
    };

    formChange = (value) => {
        // console.log('value', value);
        this.setState({
            value,
        });
    };

    render() {
        return (<div>
            <Row>
                <Col span='3' />
                <Col span='18'>
                    <IceContainer>
                        <IceFormBinderWrapper
                            value={this.state.value}
                            onChange={this.formChange}
                            ref="form"
                        >
                            <div style={styles.formContent}>
                                <h2 style={styles.formTitle}>个人资料</h2>

                                <Row style={styles.formItem}>
                                    <Col xxs="6" s="3" l="3" style={styles.label}>
                                        姓名&nbsp;
                                    </Col>
                                    <Col s="12" l="10">
                                        <IceFormBinder name="name" required max={10} message="必填">
                                            <Input value={this.state.userInfo.name} size="large" placeholder="张三" />
                                        </IceFormBinder>
                                        <IceFormError name="name" />
                                    </Col>
                                </Row>

                                <Row style={styles.formItem}>
                                    <Col xxs="6" s="3" l="3" style={styles.label}>
                                        头像&nbsp;
                                    </Col>
                                    <Col s="12" l="10">
                                        <IceFormBinder name="avatar" message="必填">
                                            <ImageUpload
                                                listType="picture-card"
                                                action=""
                                                accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
                                                locale={{
                                                    image: {
                                                        cancel: '取消上传',
                                                        addPhoto: '上传图片',
                                                    },
                                                }}
                                                beforeUpload={beforeUpload}
                                                onChange={onChange}
                                                onSuccess={onSuccess}
                                                onError={onError}
                                            />
                                        </IceFormBinder>
                                        <IceFormError name="avatar" />
                                    </Col>
                                </Row>

                                <Row style={styles.formItem}>
                                    <Col xxs="6" s="3" l="3" style={styles.label}>
                                        个人简介&nbsp;
                                    </Col>
                                    <Col s="12" l="10">
                                        <IceFormBinder name="description">
                                            <Input value={this.state.userInfo.description} size="large" multiple placeholder="请输入描述..." />
                                        </IceFormBinder>
                                        <IceFormError name="description" />
                                    </Col>
                                </Row>
                            </div>
                        </IceFormBinderWrapper>

                        <Row style={{ marginTop: 20 }}>
                            <Col offset="3">
                                <Button
                                    size="large"
                                    type="primary"
                                    style={{ width: 100 }}
                                    onClick={this.onClickSubmit.bind(this)}
                                >
                                    提交
                            </Button>
                            </Col>
                        </Row>
                    </IceContainer>
                </Col>
                <Col span='3' />
            </Row>
        </div>
        );
    }
}

const styles = {
    label: {
        textAlign: 'right',
    },
    formContent: {
        width: '100%',
        position: 'relative',
    },
    formItem: {
        alignItems: 'center',
        marginBottom: 25,
    },
    formTitle: {
        margin: '0 0 20px',
        paddingBottom: '10px',
        borderBottom: '1px solid #eee',
    },
};