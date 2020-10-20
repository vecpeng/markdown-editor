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
      this.setState({
        value: this.state.value + '\n'
      })
    }
  }
  render() {
    return (
      <div 
      contentEditable = "true"
      className = "user-input"
      >
      </div>
    )
  }
}

ReactDOM.render(<Container />, document.getElementById("root"))