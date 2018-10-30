class EditListForm extends Component {
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

  handleSubmit(e){
    e.preventDefault();
    const { id, question, answer } = this.state;
    this.props.editList(id, question, answer);
  }

  render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <input  name="question"
                  type="text"
                  placeholder="Question..."
                  value={this.state.question}
                  onChange={this.handleChange} />
          <input  name="answer"
                  type="text"
                  placeholder="Answer..."
                  value={this.state.answer}
                  onChange={this.handleChange} />
          <button>Update List</button>
        </form>  
      )
  }
}

export default EditListForm;