import React,{Component} from 'react'

class SendMessageForm extends Component {
	constructor(){
		super();
		
		this.state= {message:''};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit= this.handleSubmit.bind(this);
	}
    render() {
        return (
            <form 	onSubmit = {this.handleSubmit}
					className="send-message-form">
                <input
					disabled ={this.props.IsDisabled}
					onChange={this.handleChange}
					value={this.state.message}
                    placeholder="SendMessageForm"
                    type="text" />
            </form>
        )
    }
	handleSubmit(e){
		e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
	}
	handleChange(e){
		//console.log(e.target.value);
		this.setState({message:e.target.value});
	}
}

export default SendMessageForm