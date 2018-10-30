import React from 'react';
import { Card, Col, Row } from 'antd';


class ScoreBoard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      right_answer: 0,
      false_answer: 0
    }
  }

  render(){
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }} >
        <Row gutter={16}>
          <Col span={10}>
            <Card title="Score" bordered={false}>
              <div>
                Right Answer : { this.state.right_answer }
                Wrong Answer : { this.state.false_answer }
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
    );
  }
}

export default ScoreBoard;

 