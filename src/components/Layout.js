import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Avatar, Dropdown } from 'antd';

import '../assets/layout.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class ThisLayout extends Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  menu = (
    <Menu>
      <Menu.Item>
        <a href="/">
          <Icon type="logout" style={{ fontSize: '18px', paddingRight: '6px' }} />
          <span>Logout</span>
        </a>
      </Menu.Item>
    </Menu>
  );

  //   render() {
  //     return (
  //       <Layout>
  //         <Header className="header">
  //           {/* <div className="logo" /> */}
  //           <Menu
  //             theme="dark"
  //             mode="horizontal"
  //             defaultSelectedKeys={['2']}
  //             style={{ lineHeight: '64px' }}
  //           >
  //             <Menu.Item key="1">nav 1</Menu.Item>
  //             <Menu.Item key="2">nav 2</Menu.Item>
  //             <Menu.Item key="3">nav 3</Menu.Item>
  //           </Menu>
  //         </Header>
  //         <Layout>
  //           <Sider width={200} style={{ background: '#fff' }}>
  //             <Menu
  //               mode="inline"
  //               defaultSelectedKeys={['1']}
  //               defaultOpenKeys={['sub1']}
  //               style={{ height: '100%', borderRight: 0 }}
  //             >
  //               <SubMenu
  //                 key="sub1"
  //                 title={
  //                   <span>
  //                     <Icon type="user" />
  //                     subnav 1
  //                   </span>
  //                 }
  //               >
  //                 <Menu.Item key="1">option1</Menu.Item>
  //                 <Menu.Item key="2">option2</Menu.Item>
  //                 <Menu.Item key="3">option3</Menu.Item>
  //                 <Menu.Item key="4">option4</Menu.Item>
  //               </SubMenu>
  //               <SubMenu
  //                 key="sub2"
  //                 title={
  //                   <span>
  //                     <Icon type="laptop" />
  //                     subnav 2
  //                   </span>
  //                 }
  //               >
  //                 <Menu.Item key="5">option5</Menu.Item>
  //                 <Menu.Item key="6">option6</Menu.Item>
  //                 <Menu.Item key="7">option7</Menu.Item>
  //                 <Menu.Item key="8">option8</Menu.Item>
  //               </SubMenu>
  //               <SubMenu
  //                 key="sub3"
  //                 title={
  //                   <span>
  //                     <Icon type="notification" />
  //                     subnav 3
  //                   </span>
  //                 }
  //               >
  //                 <Menu.Item key="9">option9</Menu.Item>
  //                 <Menu.Item key="10">option10</Menu.Item>
  //                 <Menu.Item key="11">option11</Menu.Item>
  //                 <Menu.Item key="12">option12</Menu.Item>
  //               </SubMenu>
  //             </Menu>
  //           </Sider>
  //           <Layout style={{ padding: '24px 24px 24px' }}>
  //             <Content
  //               style={{
  //                 background: '#fff',
  //                 padding: 24,
  //                 margin: 0,
  //                 minHeight: 280
  //               }}
  //             >
  //               Content
  //             </Content>
  //           </Layout>
  //         </Layout>
  //       </Layout>
  //     );
  //   }

  render() {
    return (
      <Layout className="layout-container">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Menu.Item key="0">
              <Icon type="folder" />
              <span>Inbox</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="layout-header">
            <Icon
              className="layout-trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'flex-end',
                padding: '0 24px',
                alignItems: 'center'
              }}
            >
              {/* <a style={{ paddingRight: '12px' }}>
                  <Icon type="question-circle" style={{ fontSize: '18px' }} />
                  <span style={{ marginLeft: '6px' }}>Help</span>
                </a>
                <a style={{ paddingRight: '12px' }}>
                  <Icon type="read" style={{ fontSize: '18px' }} />
                  <span style={{ marginLeft: '6px' }}>Docs</span>
                </a> */}
              <Dropdown overlay={this.menu}>
                <Avatar icon="user" />
              </Dropdown>
            </div>
          </Header>
          <Content className="layout-content">{this.props.children}</Content>
          <Footer style={{ textAlign: 'center' }}>MisFit Design © 2019</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default ThisLayout;
