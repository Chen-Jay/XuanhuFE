import React, { PureComponent } from 'react';
import Layout from '@icedesign/layout';
import Logo from './Logo';

export default class Footer extends PureComponent {
  render() {
    return (
      <Layout.Section style={{ minHeight: '10vh' }}>
        <Layout.Aside width='12.5%'/>
      <Layout.Main
        className="ice-design-layout-footer"
        style={{
          lineHeight: '36px',
        }}
      >
        <div className="ice-design-layout-footer-body">
          <div style={{ filter: 'grayscale(100%)', opacity: 0.3 }}>
            {/* <Logo /> */}
          </div>
          <div className="copyright">
            © 2018 Xuanhu Team
          </div>
        </div>
        </Layout.Main>
      <Layout.Aside width='12.5%'/>
      </Layout.Section>
    );
  }
}
