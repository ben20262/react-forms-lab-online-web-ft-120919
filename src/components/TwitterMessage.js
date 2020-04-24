import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
		maxChars: props.maxChars,
		content: '',
		count: props.maxChars
	};
  }

  handleChange = event => {
	  this.setState({
		  content: event.target.value,
		  count: this.props.maxChars - event.target.value.length
	  })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
		<input
		type="text"
		name="message"
		id="message"
		onChange={event => this.handleChange(event)}
		value={this.state.content}
		/>
		<p>{this.state.count}</p>
      </div>
    );
  }
}

export default TwitterMessage;
