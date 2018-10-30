import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class NewListForm extends React.Component{
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) 
        this.props.onNewList(values.question,values.answer)
        console.log('Received values of form: ', values);


      
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
          {getFieldDecorator('question', {
            rules: [{ required: true, message: 'Please input your question!' }],
          })(
            <Input prefix={<Icon type="question" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Question" />
          )}
        </FormItem>
      
        <FormItem
          validateStatus={answerError ? 'error' : ''}
          help={answerError || ''}
        >
          {getFieldDecorator('answer', {
            rules: [{ required: true, message: 'Please input your answer!' }],
          })(
            <Input prefix={<Icon type="answer" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Answer" />
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

export const NewForm = Form.create()(NewListForm);
