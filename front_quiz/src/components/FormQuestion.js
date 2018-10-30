import React from 'react';
import { Form, Icon, Input, Button,notification } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class QuestForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      lists: []
    }
  }

  checkAnswer(data){
    axios.post('http://localhost:3010/api/v1/check_answer',{question: data } )
    .then(res => {
      console.log(res.status)
    })
    .catch(error => {
      console.log(error)
    })
  }


  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    
    axios.get('http://localhost:3010/api/v1/questions')
    .then(response => {
        this.setState({
            lists: response.data
        })
    })
    .catch(error => console.log(error))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let _answer = []
    
    this.props.form.validateFields((err, values) => {
      if (!err){ 
        console.log('Received values of form: ', values);
        for(let k in values){
          if(values[k]!== "" ) {
            _answer.push({
              id:k.match(/\d+/)[0], 
              answer: values[k]
            })
          }
        }

        this.checkAnswer(_answer);


      }
    });

    console.log(_answer)

    let result = []

    this.state.lists.map( m => {
       _answer.map( answer => {
        if(m.id == answer.id && m.answer === answer.answer)
           result.push(answer)
      })
    })

    console.log(result)


    
  }

  render(){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched , setFieldsValue} = this.props.form;
    
    // Only show error after a field is touched.
    const questionError = isFieldTouched('question') && getFieldError('question');
    const answerError = isFieldTouched('answer') && getFieldError('answer');

    return(
      
      <Form layout="inline" onSubmit={this.handleSubmit}>

           { this.state.lists.map( ques =>
              {
                return(
                  <div>

                    <FormItem label={ques.question} />

                    <FormItem
                      validateStatus={answerError ? 'error' : ''}
                      help={answerError || ''}
                    >
                      {getFieldDecorator('answer_'+ques.id)(
                        <Input placeholder="Answer" />
                      )}
                    </FormItem>
                  </div>
                )
              }
            ) 
          } 


          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Submit
            </Button>
          </FormItem>  
      
      </Form>
    );
  }


}

export const QuestionForm = Form.create()(QuestForm);
