import React from 'react';
import { Table, Button } from 'antd';

class Lists extends React.Component{
	constructor(props){
		super(props)

		this.state = {
			
		}
	}

	render(){
			const data = this.props.list
		 	const columns = [
		 		{
		      title: 'Question',
		      dataIndex: 'question',
		      key: 'question',
		      filters: [
		        { text: 'Joe', value: 'Joe' },
		        { text: 'Jim', value: 'Jim' },
		      ],
	    	},
	    	{
		      title: 'Answer',
		      dataIndex: 'answer',
		      key: 'answer',
	    	},
	    	{
	    		title: 'Action',
	    		dataIndex: 'id',
	    		key: 'id',
	    		render: (id) => (
	    			<div>
	    				<Button onClick={()=> this.props.editingList(id)} type="primary" shape="circle" icon="edit" />
	    				 <span className="ant-divider" />
	    				<Button onClick={()=> this.props.onRemove(id)} type="primary" shape="circle" icon="delete" />
	    			</div>
	    		)

	    	}
	    ];

		return(
			<div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
		);
	}
}


// const Lists = ({list, onRemove = f => f, editingList = f => f}) =>{
	 
  // <div className="single-list" key={list.id}>
  //     <h4>{list.question}</h4>
  //     <p>{list.answer}</p>
  //     <button onClick={()=> onRemove(list.id)}> Delete </button>
  //     <button onClick={()=> editingList(list.id)}> Edit </button>
  // </div>
// }
export default Lists;