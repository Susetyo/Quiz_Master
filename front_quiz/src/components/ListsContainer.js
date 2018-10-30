import React, { Component } from 'react';
import axios from 'axios';
import Lists from './Lists';
import { NewForm } from './NewListForm';
import { EditForm } from './EditListForm';
import { Card, notification } from 'antd';

class ListsContainer extends Component{
	constructor(props){
		super(props);
		this.state = {
			lists:[],
			EditingListId:null,
			EditValue:[]
		}
		this.addNewList = this.addNewList.bind(this);
		this.removeList = this.removeList.bind(this);
    this.editingList = this.editingList.bind(this)
    this.editList = this.editList.bind(this);
    this.renderComponentCard = this.renderComponentCard.bind(this);
	}

	removeList(id){
    axios.delete( 'http://localhost:3010/api/v1/questions/' + id )
    .then(response => {
        const lists = this.state.lists.filter(
            list => list.id !== id
        )
        this.setState({lists})
    })
    .catch(error => console.log(error))
	}

	addNewList(question,answer){
		axios.post('http://localhost:3010/api/v1/questions',{question: {question: question, answer: answer} } )
    .then(response => {
	  console.log(response)
      const lists = [ ...this.state.lists, response.data ]
	  	this.setState({lists})
	  
			notification.open({
				message: 'Info',
				description: 'Insert data was successfully',
			});
    })
    .catch(error => {
    	console.log(error)
    })
	}


	editList(id, question,answer) {
	    axios.put( 'http://localhost:3010/api/v1/questions/' + id, { 
	        question: {
	            question : question, 
	            answer: answer
	        } 
	    })
	    .then(response => {
	        console.log(response);
	        const lists = this.state.lists;
			
			let id_changed=0;
			
			lists.map( (l,index) =>{ 
	        	if(l.id === id) return id_changed = index;
	        })

	        console.log(id_changed)

	        lists[id_changed] = {id, question, answer}
	        
	        this.setState(() => ({
	            lists, 
	            EditingListId: null,
	            EditValue:[]
			}))
			
			notification.open({
				message: 'Info',
				description: 'Update data was successfully',
			});
	    })
	    .catch(error => console.log(error));
	}

	editingList(id){
		this.setState({
			EditingListId: id
		});

		this.state.lists.map(m=>{
			if(m.id == id){
				const EditValue = [...this.state.EditValue,m]
				this.setState({EditValue})
			}
		})
		console.log(this.state.EditValue)
	}

	componentDidMount() {
	  axios.get('http://localhost:3010/api/v1/questions')
	  .then(response => {
	      this.setState({
	          lists: response.data
	      })
	  })
	  .catch(error => console.log(error))
  }

  renderComponentCard(){
  	if(this.state.EditingListId === null){
  		return(
    		<Card
      		type="inner"
      		title="Information"
      		extra={<a href="#">More</a>}
   	 		>
  		 		<Lists list={this.state.lists} onRemove={this.removeList} editingList={this.editingList} /> 
    		</Card>
  		);
  	}else{
  		return(
    		<Card
      		type="inner"
      		title="Form Edit"
      		extra={<a href="#">More</a>}
   	 		>
  		 		<EditForm list={this.state.EditValue} editList={this.editList} />
    		</Card>
  		);
  	}
  }

	render(){
		return(
	  	<Card title="Master Question">
				{ this.renderComponentCard() }
        <Card
      		style={{ marginTop: 16 }}
      		type="inner"
      		title="Form Input"
    			extra={<a href="#">More</a>}
    		>
      		<NewForm onNewList={this.addNewList} />
    		</Card>
        
			</Card>
		);
	}
}

export default ListsContainer;