import React, { Component } from 'react';
import { Layout, Menu, Icon, Input } from 'antd';
import styled from 'styled-components';

const Search = Input.Search;
const { Header } = Layout;

const StyledHeader = styled(Header)`
  background: #303030 !important;
  display: flex;
  font-family: 'Roboto';
  .logo {
    width: 20%;
    display: flex;
    justify-content: flex-start;
    color: #f3f5fb;
    font-size: 20px;
    font-weight: 700;
  }
  .avatar-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 20px;
  }
  .menu {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    background: #303030;
    color: #f3f5fb;
    letter-spacing: 0.015625em;
    border-bottom: 0px;
  }
  .ant-layout-header {
    height: 64px;
    padding: 0 10px;
    line-height: 64px;
  }
`;
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state = {
    searchValue: ''
  };

  componentDidMount() {}

  // Change input box value
  handleInputChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <Layout>
        <StyledHeader className="header">
          {/* <div className="logo">
            <span className="avatar-container">
              <Avatar style={{ color: '#424242', backgroundColor: '#424242fff' }}>Avatar</Avatar>
            </span>
          </div> */}
          <Search
            className="search-bar"
            placeholder="Search todo"
            onSearch={value => console.log(value)}
            value={this.state.searchValue}
            onChange={this.handleInputChange}
          />
          <Menu
            mode="horizontal"
            style={{ lineHeight: '64px', padding: '0px 10px' }}
            className="menu"
          >
            <Menu.Item key="1">
              <Icon type="bell" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="message" />
            </Menu.Item>
          </Menu>
        </StyledHeader>
      </Layout>
    );
  }
}

export default Navbar;
