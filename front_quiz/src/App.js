import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import ListsContainer from './components/ListsContainer';
import HeaderCustom from './components/Header';
import PropTypes from 'prop-types';

const { Header, Content, Footer } = Layout;

function App(){
	return (
    <Layout>
    	<HeaderCustom />
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
      	<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      		<ListsContainer />
      	</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
    		Ant Design ©2018 Created by Ant UED
  		</Footer>
    </Layout>
  );
}

export default App;
