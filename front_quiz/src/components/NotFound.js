import React, { Component } from 'react';
import Header from './Header';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../App.css'
import HeaderCustom from './Header';
import PropTypes from 'prop-types';
const { Content, Footer } = Layout;

function NotFound() {
  return (
    <Layout>
    	<HeaderCustom />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
      	<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      		<p>Not Found</p>
      	</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
    		Ant Design ©2018 Created by Ant UED
  		</Footer>
    </Layout>
  );
}



export default NotFound;
