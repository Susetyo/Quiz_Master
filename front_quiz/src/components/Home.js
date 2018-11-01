import React, { Component } from 'react';
import '../App.css';
import HeaderCustom from './Header';
import {  QuestionForm } from './FormQuestion';
import { Card, Col, Row, Layout, Menu, Breadcrumb  } from 'antd';
const { Content, Footer } = Layout;


class Home extends React.Component{
	constructor(props){
		super(props)
		
		this.state = {
			scoreboard:[]
		}

		this.countScoreBoard = this.countScoreBoard.bind(this)
	}

	countScoreBoard(data){
		this.setState({
			scoreboard: data
		})
	}


	render(){
		return (
			<Layout>
				<HeaderCustom />

				<Content style={{ padding: '0 50px', marginTop: 64 }}>
					<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>

			      <div style={{ background: '#ECECEC', padding: '30px' }} >
				      <Row gutter={16}>
				        <Col span={10}>
				          <Card 
				          	title="Score" 
				          	bordered={false}
				          >
				            <div>
				              Right Answer : { this.state.scoreboard.length == 0 ? 0 : this.state.scoreboard[0].right  } <br />
				              Wrong Answer : { this.state.scoreboard.length == 0 ? 0 : this.state.scoreboard[0].wrong }
				            </div>
				          </Card>
				        </Col>
				        <Col span={10}>
				          <Card title="User Info" bordered={false}>
				            Card content
				          </Card>
				        </Col>
				      </Row>
				    </div>

						<Row gutter={16} style={{ paddingTop: 24  }}>
							<Card title="Master Question">
								<Card
									style={{ marginTop: 16 }}
									type="inner"
									title="Question"
								>
									<QuestionForm countScoreBoard={this.countScoreBoard} />
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
