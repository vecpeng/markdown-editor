import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Container extends React.Component {
  render() {
    return(
      <div className = "container">
        <UserInput />
      </div>
    )
  }
}
class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleValue = this.handleValue.bind(this)
  }
  handleValue(e) {
    this.setState({
      value: e.target.value
    })
    console.log(this.state.value)
  }
  handleKeyDown(e) {
    if(e.keyCode === 13) {
      console.log("enter")
    }
  }
  render() {
    return (
      <textarea 
      className = "user-input"
      name = "userInput"
      spellCheck = "false"
      value = {this.state.value}
      onChange = {this.handleValue}
      onKeyDown = {this.handleKeyDown}
      >

      </textarea>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById("root"))