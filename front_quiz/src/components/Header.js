import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

class HeaderCustom extends Component{
 render(){
    return(
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }} 
        >
          <Menu.Item key="1"><Link to= '/'>Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to= '/master'>Master</Link></Menu.Item>
          <Menu.Item key="3"><Link to= '/history'>History </Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderCustom;