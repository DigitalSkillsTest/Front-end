import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Content, Sider } = Layout;

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(collapsed) {
    this.setState({ collapsed });
  }

  render() {
    const { collapsed } = this.state;
    const { sidebar, children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {sidebar && (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
          </Sider>
        )}
        <Layout style={{ background: '#ddd' }}>
          <Content style={{ margin: '25px' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  sidebar: PropTypes.bool,
  children: PropTypes.shape({}).isRequired,
};

MainLayout.defaultProps = {
  sidebar: PropTypes.bool,
};
