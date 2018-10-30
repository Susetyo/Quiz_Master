import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../App.css';
import HeaderCustom from './Header';
import ScoreBoard from './ScoreBoard';
import {  QuestionForm } from './FormQuestion';
import { Card, Col, Row } from 'antd';
const { Content, Footer } = Layout;

class Home extends React.Component{
	constructor(props){
		super(props)
		
		this.state = {
			scoreboard:[]
		}

	}

	render(){
		return (
			<Layout>
				<HeaderCustom />
				<Content style={{ padding: '0 50px', marginTop: 64 }}>
					<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
						<ScoreBoard scoreboard={this.state.scoreboard} />
						<Row gutter={16} style={{ paddingTop: 24  }}>
							<Card title="Master Question">
								<Card
									style={{ marginTop: 16 }}
									type="inner"
									title="Question"
									extra={<a href="#">More</a>}
								>
									<QuestionForm />
								</Card>
							</Card>
						</Row>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		);
	}
}



export default Home;
