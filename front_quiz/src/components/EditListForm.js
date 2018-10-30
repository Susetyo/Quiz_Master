import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class EditListForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        id: this.props.list[0].id,
        question: this.props.list[0].question,
        answer: this.props.list[0].answer
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }



  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) 
        console.log('Received values of form: ', values);
         this.props.editList(this.state.id, values.question, values.answer);   
    });
  }

  render(){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    
    // Only show error after a field is touched.
    const questionError = isFieldTouched('question') && getFieldError('question');
    const answerError = isFieldTouched('answer') && getFieldError('answer');
    
    return(
      <Form layout="inline" onSubmit={this.handleSubmit}>
        
        <FormItem
          validateStatus={questionError ? 'error' : ''}
          help={questionError || ''}
        >
          {getFieldDecorator('question',{ initialValue: this.state.question})(
            <Input prefix={<Icon type="question" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Question" value={this.state.question} onChange={this.handleChange} />
          )}
        </FormItem>
      
        <FormItem
          validateStatus={answerError ? 'error' : ''}
          help={answerError || ''}
        >
          {getFieldDecorator('answer', { initialValue: this.state.answer })(
            <Input prefix={<Icon type="answer" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Answer" value={this.state.answer} onChange={this.handleChange} />
          )}
        </FormItem>
        
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

export const EditForm = Form.create()(EditListForm);

